"""
Embeddings Generator Module - Phase 2
Generates sentence embeddings for semantic search using sentence-transformers
"""

from sentence_transformers import SentenceTransformer
import numpy as np
import json
import os

# Global model instance
_model = None

def load_embedding_model():
    """Load and cache the sentence-transformers model"""
    global _model
    if _model is None:
        print("📥 Loading sentence-transformers model...")
        # Using all-MiniLM-L6-v2: 384-dimensional vectors, fast and accurate
        _model = SentenceTransformer('all-MiniLM-L6-v2')
        print("✅ Model loaded successfully (384-dim vectors)")
    return _model

def generate_embedding(text):
    """
    Generate embedding for a single text string
    Args:
        text (str): Text to embed
    Returns:
        list: 384-dimensional embedding vector
    """
    model = load_embedding_model()
    embedding = model.encode(text, convert_to_tensor=False)
    return embedding.tolist() if isinstance(embedding, np.ndarray) else list(embedding)

def batch_embed_plants(plants_list):
    """
    Generate embeddings for multiple plants efficiently
    Args:
        plants_list (list): List of plant dictionaries with 'name' and 'description' keys
    Returns:
        list: List of dicts with plant data + 'embedding' key
    """
    model = load_embedding_model()
    print(f"🔄 Generating embeddings for {len(plants_list)} plants...")
    
    # Create embeddings text: combine name, type, and description for context
    texts_to_embed = []
    for plant in plants_list:
        # Create rich text for embedding: name + type + key attributes
        combined_text = f"{plant.get('name', '')} {plant.get('type', '')} {plant.get('description', '')} sunlight:{plant.get('sunlight', '')} water:{plant.get('water', '')} difficulty:{plant.get('difficulty', '')}"
        texts_to_embed.append(combined_text)
    
    # Batch encode for efficiency
    embeddings = model.encode(texts_to_embed, convert_to_tensor=False, show_progress_bar=True)
    
    # Attach embeddings to plants
    plants_with_embeddings = []
    for i, plant in enumerate(plants_list):
        plant_copy = plant.copy()
        plant_copy['embedding'] = embeddings[i].tolist() if isinstance(embeddings[i], np.ndarray) else list(embeddings[i])
        plants_with_embeddings.append(plant_copy)
    
    print(f"✅ Generated {len(plants_with_embeddings)} embeddings (384-dim)")
    return plants_with_embeddings

def embedding_dimension():
    """Get the dimension of embeddings (384 for all-MiniLM-L6-v2)"""
    return 384

if __name__ == "__main__":
    # Test the embeddings module
    model = load_embedding_model()
    
    # Test single embedding
    test_embedding = generate_embedding("Tomato plant with red fruits")
    print(f"✅ Single embedding generated: {len(test_embedding)} dimensions")
    
    # Test batch embedding
    test_plants = [
        {"name": "Basil", "type": "herb", "description": "Aromatic herb", "sunlight": "full sun", "water": "moderate", "difficulty": "easy"},
        {"name": "Tomato", "type": "vegetable", "description": "Fruiting plant", "sunlight": "full sun", "water": "high", "difficulty": "medium"}
    ]
    batch_result = batch_embed_plants(test_plants)
    print(f"✅ Batch embeddings test passed: {len(batch_result)} plants embedded")
