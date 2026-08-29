"""
Plant-08 Backend API - Phase 2
Backend Integration & Extensive Dataset + Semantic Search
Flask API with CORS, MongoDB integration, and semantic search endpoints
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from pymongo import MongoClient
from pymongo.errors import PyMongoError
import os
import json
import re
from datetime import datetime
from semantic_search import semantic_search_simple, get_similar_plants, filter_by_growth_stage

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for all routes
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Configuration
app.config['JSON_SORT_KEYS'] = False

# ==================== PLANT DATA (MongoDB + Fallback JSON) ====================
PLANTS_DATA = {}
MONGO_CLIENT = None
MONGO_DB = None
PLANTS_COLLECTION = None
MONGO_AVAILABLE = False

def load_plants_from_file():
    """Load plant data from JSON file into memory for fallback or seeding."""
    global PLANTS_DATA
    try:
        with open('data/plants.json', 'r', encoding='utf-8') as f:
            PLANTS_DATA = json.load(f)
        print(f"✅ Loaded {len(PLANTS_DATA)} plants from local seed data")
    except FileNotFoundError:
        print("❌ data/plants.json not found. Starting with empty dataset.")
        PLANTS_DATA = {}

def init_mongo():
    """Initialize MongoDB connection using environment configuration."""
    global MONGO_CLIENT, MONGO_DB, PLANTS_COLLECTION, MONGO_AVAILABLE
    mongo_uri = os.getenv('MONGODB_URI')
    db_name = os.getenv('DB_NAME', 'plant08')
    collection_name = os.getenv('PLANTS_COLLECTION', 'plants')

    if not mongo_uri:
        print("⚠️  MONGODB_URI not set. Falling back to local JSON data.")
        MONGO_AVAILABLE = False
        return

    try:
        MONGO_CLIENT = MongoClient(mongo_uri, serverSelectionTimeoutMS=5000)
        MONGO_CLIENT.admin.command('ping')
        MONGO_DB = MONGO_CLIENT[db_name]
        PLANTS_COLLECTION = MONGO_DB[collection_name]
        PLANTS_COLLECTION.create_index('id', unique=True)
        MONGO_AVAILABLE = True
        print("✅ Connected to MongoDB")
    except PyMongoError as error:
        print(f"❌ MongoDB connection failed: {error}")
        MONGO_AVAILABLE = False

def seed_mongo_if_empty():
    """Seed MongoDB collection if empty using local JSON data."""
    if not MONGO_AVAILABLE or PLANTS_COLLECTION is None:
        return

    try:
        existing_count = PLANTS_COLLECTION.count_documents({})
        if existing_count > 0:
            print(f"✅ MongoDB already has {existing_count} plants")
            return

        plants_list = list(PLANTS_DATA.values())
        if not plants_list:
            print("⚠️  No local plants available for seeding.")
            return

        for plant in plants_list:
            PLANTS_COLLECTION.update_one({'id': plant['id']}, {'$set': plant}, upsert=True)

        print(f"✅ Seeded MongoDB with {len(plants_list)} plants")
    except PyMongoError as error:
        print(f"❌ Failed to seed MongoDB: {error}")

def fetch_all_plants():
    """Fetch all plants from MongoDB or fallback JSON."""
    if MONGO_AVAILABLE and PLANTS_COLLECTION is not None:
        return list(PLANTS_COLLECTION.find({}, {'_id': 0}))
    return list(PLANTS_DATA.values())

def fetch_plant_by_id(plant_id):
    """Fetch a single plant by ID from MongoDB or fallback JSON."""
    if MONGO_AVAILABLE and PLANTS_COLLECTION is not None:
        return PLANTS_COLLECTION.find_one({'id': plant_id}, {'_id': 0})
    return PLANTS_DATA.get(plant_id)

# ==================== ERROR HANDLERS ====================
@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Endpoint not found', 'status': 404}), 404

@app.errorhandler(500)
def server_error(error):
    return jsonify({'error': 'Internal server error', 'status': 500}), 500

# ==================== HEALTH CHECK ====================
@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint for monitoring"""
    if MONGO_AVAILABLE and PLANTS_COLLECTION is not None:
        plants_count = PLANTS_COLLECTION.count_documents({})
    else:
        plants_count = len(PLANTS_DATA)
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'plants_count': plants_count
    }), 200

# ==================== API ENDPOINTS ====================

# ENDPOINT 1: Get all plants (with pagination)
@app.route('/api/plants/all', methods=['GET'])
def get_all_plants():
    """
    Get all plants with pagination support
    Query params: page (default=1), limit (default=20)
    """
    try:
        page = request.args.get('page', 1, type=int)
        limit = request.args.get('limit', 20, type=int)
        
        # Validation
        if page < 1 or limit < 1 or limit > 100:
            return jsonify({'error': 'Invalid pagination parameters'}), 400
        
        if MONGO_AVAILABLE and PLANTS_COLLECTION is not None:
            total = PLANTS_COLLECTION.count_documents({})
            paginated = list(
                PLANTS_COLLECTION.find({}, {'_id': 0})
                .sort('name', 1)
                .skip((page - 1) * limit)
                .limit(limit)
            )
        else:
            plants_list = list(PLANTS_DATA.values())
            total = len(plants_list)
            start = (page - 1) * limit
            end = start + limit
            paginated = plants_list[start:end]
        
        return jsonify({
            'success': True,
            'plants': paginated,
            'pagination': {
                'page': page,
                'limit': limit,
                'total': total,
                'pages': (total + limit - 1) // limit
            }
        }), 200
    except Exception as e:
        return jsonify({'error': str(e), 'status': 500}), 500


# ENDPOINT 2: Search plants by name or type
@app.route('/api/plants/search', methods=['GET'])
def search_plants():
    """
    Search plants by name or type (case-insensitive)
    Query params: q (search query), type (optional filter)
    """
    try:
        query = request.args.get('q', '', type=str).lower()
        plant_type = request.args.get('type', '', type=str).lower()
        
        if not query and not plant_type:
            return jsonify({'error': 'Search query (q) or type parameter required'}), 400
        
        if MONGO_AVAILABLE and PLANTS_COLLECTION is not None:
            mongo_query = {}
            if query:
                mongo_query['name'] = {'$regex': re.escape(query), '$options': 'i'}
            if plant_type:
                mongo_query['type'] = {'$regex': f'^{re.escape(plant_type)}$', '$options': 'i'}
            results = list(PLANTS_COLLECTION.find(mongo_query, {'_id': 0}).sort('name', 1))
        else:
            results = []
            for plant_id, plant in PLANTS_DATA.items():
                name_match = (not query) or (query in plant.get('name', '').lower())
                type_match = (not plant_type) or (plant_type == plant.get('type', '').lower())
                if name_match and type_match:
                    results.append(plant)
        
        return jsonify({
            'success': True,
            'query': query,
            'results': results,
            'count': len(results)
        }), 200
    except Exception as e:
        return jsonify({'error': str(e), 'status': 500}), 500


# ENDPOINT 3: Get single plant by ID
@app.route('/api/plant/<plant_id>', methods=['GET'])
def get_plant_by_id(plant_id):
    """
    Get detailed information for a single plant by ID
    """
    try:
        plant = fetch_plant_by_id(plant_id)
        
        if not plant:
            return jsonify({'error': f'Plant with ID "{plant_id}" not found', 'status': 404}), 404
        
        return jsonify({
            'success': True,
            'plant': plant
        }), 200
    except Exception as e:
        return jsonify({'error': str(e), 'status': 500}), 500


# ENDPOINT 4: Get plants by type
@app.route('/api/plants/by-type', methods=['GET'])
def get_plants_by_type():
    """
    Get all plants filtered by type
    Query params: type (herb, vegetable, fruit, flower, indoor, succulent)
    """
    try:
        plant_type = request.args.get('type', '', type=str).lower()
        
        if not plant_type:
            return jsonify({'error': 'Type parameter required'}), 400
        
        # List of valid types
        valid_types = [
            'herb',
            'vegetable',
            'fruit',
            'flower',
            'indoor',
            'succulent',
            'grain',
            'legume',
            'fiber',
            'spice',
            'oilseed',
            'cash'
        ]
        if plant_type not in valid_types:
            return jsonify({'error': f'Invalid type. Valid types: {", ".join(valid_types)}'}), 400
        if MONGO_AVAILABLE and PLANTS_COLLECTION is not None:
            results = list(
                PLANTS_COLLECTION.find({'type': {'$regex': f'^{re.escape(plant_type)}$', '$options': 'i'}}, {'_id': 0})
                .sort('name', 1)
            )
        else:
            results = [plant for plant in PLANTS_DATA.values()
                       if plant.get('type', '').lower() == plant_type]
        
        return jsonify({
            'success': True,
            'type': plant_type,
            'plants': results,
            'count': len(results)
        }), 200
    except Exception as e:
        return jsonify({'error': str(e), 'status': 500}), 500


# ENDPOINT 5: Get plant guides
@app.route('/api/plant/<plant_id>/guides', methods=['GET'])
def get_plant_guides(plant_id):
    """
    Get care guides for a specific plant at different growth stages
    """
    try:
        plant = fetch_plant_by_id(plant_id)
        
        if not plant:
            return jsonify({'error': f'Plant "{plant_id}" not found', 'status': 404}), 404
        
        guides = plant.get('guides', {})
        seasonal_care = plant.get('seasonalCare', {})
        
        return jsonify({
            'success': True,
            'plant_id': plant_id,
            'plant_name': plant.get('name'),
            'guides': guides,
            'seasonal_care': seasonal_care
        }), 200
    except Exception as e:
        return jsonify({'error': str(e), 'status': 500}), 500


# ==================== ADMIN ENDPOINTS (For testing/setup) ====================

@app.route('/api/admin/plants/count', methods=['GET'])
def count_plants():
    """Get total count of plants in database"""
    if MONGO_AVAILABLE and PLANTS_COLLECTION is not None:
        total_plants = PLANTS_COLLECTION.count_documents({})
    else:
        total_plants = len(PLANTS_DATA)
    return jsonify({
        'total_plants': total_plants,
        'timestamp': datetime.now().isoformat()
    }), 200


@app.route('/api/admin/plants/list-types', methods=['GET'])
def list_plant_types():
    """Get all unique plant types"""
    if MONGO_AVAILABLE and PLANTS_COLLECTION is not None:
        types = PLANTS_COLLECTION.distinct('type')
        types = sorted([t.lower() for t in types if t])
    else:
        types = set()
        for plant in PLANTS_DATA.values():
            plant_type = plant.get('type', 'unknown').lower()
            types.add(plant_type)
        types = sorted(list(types))
    
    return jsonify({
        'types': types,
        'count': len(types)
    }), 200


# ==================== PHASE 2: SEMANTIC SEARCH ENDPOINTS ====================

# ENDPOINT 6: Semantic search for plants
@app.route('/api/search/semantic', methods=['GET', 'POST'])
def semantic_search():
    """
    Semantic search for plants based on natural language query
    Query params or body: q (query), limit (default=5)
    Example: /api/search/semantic?q=red fruit full sun
    """
    try:
        # Get query from params or body
        if request.method == 'POST':
            data = request.get_json() or {}
            query = data.get('q', '').strip()
        else:
            query = request.args.get('q', '').strip()
        
        limit = request.args.get('limit', 5, type=int)
        
        if not query:
            return jsonify({'error': 'Query parameter "q" is required'}), 400
        
        if limit < 1 or limit > 20:
            return jsonify({'error': 'Limit must be between 1 and 20'}), 400
        
        # Convert plants dict to list
        plants_list = fetch_all_plants()
        
        # Perform semantic search
        results = semantic_search_simple(query, plants_list, limit)
        
        # Format results
        formatted_results = []
        for result in results:
            formatted_results.append({
                'plant': result['plant'],
                'score': round(result['score'], 2)
            })
        
        return jsonify({
            'success': True,
            'query': query,
            'results': formatted_results,
            'count': len(formatted_results)
        }), 200
    except Exception as e:
        return jsonify({'error': str(e), 'status': 500}), 500


# ENDPOINT 7: Get similar plants
@app.route('/api/plants/similar/<plant_id>', methods=['GET'])
def get_similar(plant_id):
    """
    Get plants similar to the specified plant
    Query params: limit (default=5)
    """
    try:
        limit = request.args.get('limit', 5, type=int)
        
        reference_plant = fetch_plant_by_id(plant_id)
        if not reference_plant:
            return jsonify({'error': f'Plant "{plant_id}" not found'}), 404

        plants_list = fetch_all_plants()
        results = get_similar_plants(plant_id, plants_list, limit)
        
        formatted_results = []
        for result in results:
            formatted_results.append({
                'plant': result['plant'],
                'similarity_score': round(result['score'], 2)
            })
        
        return jsonify({
            'success': True,
            'reference_plant': reference_plant.get('name'),
            'similar_plants': formatted_results,
            'count': len(formatted_results)
        }), 200
    except Exception as e:
        return jsonify({'error': str(e), 'status': 500}), 500


# ENDPOINT 8: Filter plants by growth stage
@app.route('/api/plants/by-growth-stage', methods=['GET'])
def plants_by_growth_stage():
    """
    Get plants filtered by growth stage (seedling/vegetative/mature)
    Query params: stage (required), limit (default=20)
    """
    try:
        stage = request.args.get('stage', '').strip().lower()
        limit = request.args.get('limit', 20, type=int)
        
        valid_stages = ['seedling', 'vegetative', 'mature']
        if not stage:
            return jsonify({
                'error': f'Stage parameter required. Valid values: {", ".join(valid_stages)}'
            }), 400
        
        if stage not in valid_stages:
            return jsonify({
                'error': f'Invalid stage "{stage}". Valid values: {", ".join(valid_stages)}'
            }), 400
        
        plants_list = fetch_all_plants()
        results = filter_by_growth_stage(plants_list, stage)
        
        # Apply limit
        results = results[:limit]
        
        return jsonify({
            'success': True,
            'stage': stage,
            'plants': results,
            'count': len(results)
        }), 200
    except Exception as e:
        return jsonify({'error': str(e), 'status': 500}), 500


# ==================== APP STARTUP ====================

@app.before_request
def before_request():
    """Executed before each request"""
    pass

@app.after_request
def after_request(response):
    """Executed after each request - add CORS headers"""
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    return response


if __name__ == '__main__':
    # Load plant data from file (for seeding and fallback)
    load_plants_from_file()

    # Initialize MongoDB and seed if needed
    init_mongo()
    seed_mongo_if_empty()
    
    # Get port from environment or default to 5000
    port = int(os.getenv('PORT', 5000))
    debug = os.getenv('FLASK_ENV', 'development') == 'development'
    
    print(f"\n🌱 Plant-08 Backend API Starting...")
    print(f"📍 Running on http://localhost:{port}")
    print(f"🔧 Debug mode: {debug}")
    if MONGO_AVAILABLE and PLANTS_COLLECTION is not None:
        mongo_count = PLANTS_COLLECTION.count_documents({})
        print(f"📚 MongoDB plants: {mongo_count}\n")
    else:
        print(f"📚 Loaded {len(PLANTS_DATA)} plants (local fallback)\n")
    
    app.run(host='0.0.0.0', port=port, debug=debug)
