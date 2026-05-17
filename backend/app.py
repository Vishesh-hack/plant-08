"""
Plant-08 Backend API - Phase 2
Backend Integration & Extensive Dataset + Semantic Search
Flask API with CORS, MongoDB integration, and semantic search endpoints
"""

from flask import Flask, request, jsonify
from flask_cors import CORS 
from dotenv import load_dotenv
import os
import json
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

# ==================== PLANT DATA (In-Memory for Phase 1) ====================
# In production, this will be replaced with MongoDB
PLANTS_DATA = {}

def load_plant_data():
    """Load plant data from JSON file"""
    global PLANTS_DATA
    try:
        with open('data/plants.json', 'r', encoding='utf-8') as f:
            PLANTS_DATA = json.load(f)
        print(f"✅ Loaded {len(PLANTS_DATA)} plants from database")
    except FileNotFoundError:
        print("❌ plants.json not found. Starting with empty database.")
        PLANTS_DATA = {}

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
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'plants_count': len(PLANTS_DATA)
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
        
        # Get all plants as list
        plants_list = list(PLANTS_DATA.values())
        total = len(plants_list)
        
        # Paginate
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
        
        results = []
        for plant_id, plant in PLANTS_DATA.items():
            # Check name match (or no name filter provided)
            name_match = (not query) or (query in plant.get('name', '').lower())
            # Check type match (or no type filter provided)
            type_match = (not plant_type) or (plant_type == plant.get('type', '').lower())
            # Add if all provided filters match
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
        plant = PLANTS_DATA.get(plant_id)
        
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
        valid_types = ['herb', 'vegetable', 'fruit', 'flower', 'indoor', 'succulent']
        if plant_type not in valid_types:
            return jsonify({'error': f'Invalid type. Valid types: {", ".join(valid_types)}'}), 400
        
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
        plant = PLANTS_DATA.get(plant_id)
        
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
    return jsonify({
        'total_plants': len(PLANTS_DATA),
        'timestamp': datetime.now().isoformat()
    }), 200


@app.route('/api/admin/plants/list-types', methods=['GET'])
def list_plant_types():
    """Get all unique plant types"""
    types = set()
    for plant in PLANTS_DATA.values():
        plant_type = plant.get('type', 'unknown').lower()
        types.add(plant_type)
    
    return jsonify({
        'types': sorted(list(types)),
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
        plants_list = list(PLANTS_DATA.values())
        
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
        
        if plant_id not in PLANTS_DATA:
            return jsonify({'error': f'Plant "{plant_id}" not found'}), 404
        
        plants_list = list(PLANTS_DATA.values())
        results = get_similar_plants(plant_id, plants_list, limit)
        
        formatted_results = []
        for result in results:
            formatted_results.append({
                'plant': result['plant'],
                'similarity_score': round(result['score'], 2)
            })
        
        return jsonify({
            'success': True,
            'reference_plant': PLANTS_DATA[plant_id].get('name'),
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
        
        plants_list = list(PLANTS_DATA.values())
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
    # Load plant data on startup
    load_plant_data()
    
    # Get port from environment or default to 5000
    port = int(os.getenv('PORT', 5000))
    debug = os.getenv('FLASK_ENV', 'development') == 'development'
    
    print(f"\n🌱 Plant-08 Backend API Starting...")
    print(f"📍 Running on http://localhost:{port}")
    print(f"🔧 Debug mode: {debug}")
    print(f"📚 Loaded {len(PLANTS_DATA)} plants\n")
    
    app.run(host='0.0.0.0', port=port, debug=debug)
