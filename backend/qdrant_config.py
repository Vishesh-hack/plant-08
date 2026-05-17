"""
Qdrant Vector Database Configuration - Phase 2
Handles connection to local Qdrant instance for semantic search
Supports both Docker mode and in-memory/file-based mode for development
"""

from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams, PointStruct
import os

# Configuration
QDRANT_HOST = os.getenv('QDRANT_HOST', None)
QDRANT_PORT = int(os.getenv('QDRANT_PORT', '6333')) if QDRANT_HOST else None
USE_MEMORY = os.getenv('QDRANT_MODE', 'memory').lower() == 'memory'  # Use in-memory by default
QDRANT_PATH = os.getenv('QDRANT_PATH', './qdrant_storage')  # For persistent file-based mode
COLLECTION_NAME = 'plants'
VECTOR_SIZE = 384  # Matches all-MiniLM-L6-v2 model
DISTANCE_METRIC = Distance.COSINE  # Cosine similarity for semantic search

# Global client instance
_client = None

def get_qdrant_client():
    """Get or create Qdrant client instance"""
    global _client
    if _client is None:
        try:
            if QDRANT_HOST and QDRANT_PORT:
                # Connect to remote Qdrant instance (Docker)
                print(f"🌐 Connecting to remote Qdrant at {QDRANT_HOST}:{QDRANT_PORT}...")
                _client = QdrantClient(host=QDRANT_HOST, port=QDRANT_PORT)
                print(f"✅ Connected to remote Qdrant")
            elif USE_MEMORY:
                # Use in-memory mode for development
                print("💾 Using Qdrant in-memory mode (development)")
                _client = QdrantClient(":memory:")
                print(f"✅ In-memory Qdrant client initialized")
            else:
                # Use persistent file-based mode
                print(f"💾 Using Qdrant file-based mode at {QDRANT_PATH}")
                _client = QdrantClient(path=QDRANT_PATH)
                print(f"✅ File-based Qdrant client initialized at {QDRANT_PATH}")
            
            # Verify connection
            _client.get_collections()
        except Exception as e:
            print(f"❌ Failed to initialize Qdrant: {e}")
            raise
    return _client

def create_collection_if_not_exists():
    """Create the plants collection if it doesn't exist"""
    client = get_qdrant_client()
    
    try:
        # Check if collection exists
        collections = client.get_collections()
        collection_names = [col.name for col in collections.collections]
        
        if COLLECTION_NAME not in collection_names:
            print(f"📦 Creating collection '{COLLECTION_NAME}'...")
            client.create_collection(
                collection_name=COLLECTION_NAME,
                vectors_config=VectorParams(size=VECTOR_SIZE, distance=DISTANCE_METRIC)
            )
            print(f"✅ Collection '{COLLECTION_NAME}' created successfully")
        else:
            print(f"✅ Collection '{COLLECTION_NAME}' already exists")
            
    except Exception as e:
        print(f"❌ Error managing collection: {e}")
        raise

def upload_plant_points(plants_with_embeddings):
    """
    Upload plant embeddings to Qdrant collection
    Args:
        plants_with_embeddings (list): List of plant dicts with 'embedding' key
    """
    client = get_qdrant_client()
    
    # Create collection if needed
    create_collection_if_not_exists()
    
    print(f"📤 Uploading {len(plants_with_embeddings)} plant embeddings to Qdrant...")
    
    # Create points with plant data as payload
    points = []
    for idx, plant in enumerate(plants_with_embeddings):
        point = PointStruct(
            id=plant.get('id', idx),  # Use plant ID or index
            vector=plant['embedding'],
            payload={
                'name': plant.get('name', ''),
                'type': plant.get('type', ''),
                'scientificName': plant.get('scientificName', ''),
                'difficulty': plant.get('difficulty', ''),
                'sunlight': plant.get('sunlight', ''),
                'water': plant.get('water', ''),
                'temperature': plant.get('temperature', ''),
                'soil': plant.get('soil', ''),
                'description': plant.get('description', '')[:200],  # Limit description length
                'maturityDays': plant.get('maturityDays', 0),
            }
        )
        points.append(point)
    
    # Upsert points (insert or update)
    client.upsert(
        collection_name=COLLECTION_NAME,
        points=points
    )
    print(f"✅ Successfully uploaded {len(points)} plant embeddings")

def search_semantic(query_embedding, limit=5):
    """
    Search for plants using semantic vector search
    Args:
        query_embedding (list): Query embedding vector
        limit (int): Number of results to return
    Returns:
        list: Search results with metadata
    """
    client = get_qdrant_client()
    
    try:
        results = client.search(
            collection_name=COLLECTION_NAME,
            query_vector=query_embedding,
            limit=limit,
            with_payload=True
        )
        
        formatted_results = []
        for result in results:
            formatted_results.append({
                'id': result.id,
                'score': result.score,
                'plant': result.payload
            })
        
        return formatted_results
    except Exception as e:
        print(f"❌ Search error: {e}")
        raise

def clear_collection():
    """Clear all points from the collection (for testing/reset)"""
    client = get_qdrant_client()
    try:
        client.delete_collection(collection_name=COLLECTION_NAME)
        print(f"✅ Collection '{COLLECTION_NAME}' deleted")
    except Exception as e:
        print(f"⚠️  Could not delete collection: {e}")

def get_collection_info():
    """Get information about the plants collection"""
    client = get_qdrant_client()
    try:
        collection_info = client.get_collection(COLLECTION_NAME)
        return {
            'name': COLLECTION_NAME,
            'vector_size': VECTOR_SIZE,
            'distance_metric': 'cosine',
            'point_count': collection_info.points_count,
            'vector_count': collection_info.vectors_count
        }
    except Exception as e:
        print(f"❌ Error getting collection info: {e}")
        return None

if __name__ == "__main__":
    # Test Qdrant connection
    try:
        client = get_qdrant_client()
        print("✅ Qdrant client initialized successfully")
        info = get_collection_info()
        if info:
            print(f"Collection info: {info}")
    except Exception as e:
        print(f"❌ Connection test failed: {e}")

