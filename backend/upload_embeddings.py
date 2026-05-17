#!/usr/bin/env python
"""
Upload Plant Embeddings to Qdrant - Phase 2
Loads plants from plants.json, generates embeddings, and uploads to vector database
"""

import json
import os
import sys
from pathlib import Path

# Add parent directory to path for imports
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from embeddings import batch_embed_plants, embedding_dimension
from qdrant_config import upload_plant_points, get_collection_info, COLLECTION_NAME

def load_plants_from_json(json_path):
    """Load plants from JSON file"""
    print(f"📖 Loading plants from {json_path}...")
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    if isinstance(data, dict) and 'plants' in data:
        plants = data['plants']
    elif isinstance(data, list):
        plants = data
    else:
        raise ValueError("Invalid plants.json format")
    
    print(f"✅ Loaded {len(plants)} plants")
    return plants

def main():
    """Main upload workflow"""
    print("\n" + "="*60)
    print("🚀 Plant Embeddings Upload - Phase 2")
    print("="*60 + "\n")
    
    # Paths
    plants_json_path = Path(__file__).parent / 'data' / 'plants.json'
    
    if not plants_json_path.exists():
        print(f"❌ Error: plants.json not found at {plants_json_path}")
        sys.exit(1)
    
    # Step 1: Load plants
    plants = load_plants_from_json(str(plants_json_path))
    
    # Step 2: Generate embeddings
    print(f"\n🔧 Embedding dimension: {embedding_dimension()} (all-MiniLM-L6-v2)")
    plants_with_embeddings = batch_embed_plants(plants)
    
    # Verify embeddings
    sample_plant = plants_with_embeddings[0]
    print(f"📊 Sample embedding for '{sample_plant['name']}': {len(sample_plant['embedding'])} dimensions")
    
    # Step 3: Upload to Qdrant
    print("\n" + "-"*60)
    upload_plant_points(plants_with_embeddings)
    
    # Step 4: Verify upload
    print("\n" + "-"*60)
    print("📋 Verifying upload...")
    collection_info = get_collection_info()
    if collection_info:
        print(f"✅ Collection '{COLLECTION_NAME}' info:")
        print(f"   - Points stored: {collection_info['point_count']}")
        print(f"   - Vector size: {collection_info['vector_size']} dimensions")
        print(f"   - Distance metric: {collection_info['distance_metric']}")
    
    print("\n" + "="*60)
    print("✅ PHASE 2 STEP 4 COMPLETE: Embeddings uploaded to Qdrant!")
    print("="*60 + "\n")

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"\n❌ Error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
