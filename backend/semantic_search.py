"""
Simplified Semantic Search - Phase 2
Uses keyword matching and plant attributes for semantic search without transformer models
"""

import json
import os
from difflib import SequenceMatcher
from collections import Counter

def normalize_text(text):
    """Normalize text for comparison"""
    return str(text).lower().strip()

def calculate_similarity(text1, text2):
    """Calculate similarity score between two texts (0-1)"""
    return SequenceMatcher(None, normalize_text(text1), normalize_text(text2)).ratio()

def extract_keywords(plants_list, plant_id):
    """Extract searchable keywords from a plant"""
    plant = next((p for p in plants_list if p.get('id') == plant_id), None)
    if not plant:
        return []
    
    keywords = []
    keywords.append(plant.get('name', '').lower())
    keywords.append(plant.get('type', '').lower())
    keywords.append(plant.get('difficulty', '').lower())
    keywords.append(plant.get('sunlight', '').lower())
    keywords.append(plant.get('water', '').lower())
    keywords.extend(plant.get('description', '').lower().split())
    
    return [k.strip() for k in keywords if k.strip()]

def semantic_search_simple(query, plants_list, limit=5):
    """
    Simple semantic search using keyword matching and similarity scores
    Args:
        query (str): Search query
        plants_list (list): List of plants to search
        limit (int): Number of results to return
    Returns:
        list: Search results with scores
    """
    query_normalized = normalize_text(query)
    query_words = set(query_normalized.split())
    
    results = []
    
    for plant in plants_list:
        score = 0.0
        
        # Name match (highest weight)
        plant_name = normalize_text(plant.get('name', ''))
        if plant_name:
            score += calculate_similarity(query_normalized, plant_name) * 3.0
        
        # Type match
        plant_type = normalize_text(plant.get('type', ''))
        if plant_type in query_words:
            score += 2.0
        
        # Description keyword matching
        description = normalize_text(plant.get('description', ''))
        desc_words = set(description.split())
        matches = len(query_words & desc_words)
        score += matches * 1.0
        
        # Difficulty, sunlight, water attribute matching
        for attr in ['difficulty', 'sunlight', 'water']:
            attr_val = normalize_text(plant.get(attr, ''))
            if attr_val in query_words:
                score += 1.5
        
        if score > 0:
            results.append({
                'plant': plant,
                'score': score
            })
    
    # Sort by score descending and limit results
    results.sort(key=lambda x: x['score'], reverse=True)
    return results[:limit]

def get_similar_plants(plant_id, plants_list, limit=5):
    """
    Find plants similar to the given plant
    Args:
        plant_id: ID of reference plant
        plants_list: List of plants to search
        limit: Number of similar plants to return
    Returns:
        list: Similar plants with similarity scores
    """
    reference_plant = next((p for p in plants_list if p.get('id') == plant_id), None)
    if not reference_plant:
        return []
    
    ref_type = normalize_text(reference_plant.get('type', ''))
    ref_difficulty = normalize_text(reference_plant.get('difficulty', ''))
    ref_sunlight = normalize_text(reference_plant.get('sunlight', ''))
    
    results = []
    
    for plant in plants_list:
        if plant.get('id') == plant_id:
            continue  # Skip reference plant
        
        score = 0.0
        
        # Type similarity (high weight)
        if normalize_text(plant.get('type', '')) == ref_type:
            score += 2.0
        
        # Difficulty similarity
        if normalize_text(plant.get('difficulty', '')) == ref_difficulty:
            score += 1.5
        
        # Sunlight similarity
        if normalize_text(plant.get('sunlight', '')) == ref_sunlight:
            score += 1.0
        
        # Description similarity
        ref_desc = normalize_text(reference_plant.get('description', ''))
        plant_desc = normalize_text(plant.get('description', ''))
        desc_sim = calculate_similarity(ref_desc, plant_desc)
        score += desc_sim * 2.0
        
        results.append({
            'plant': plant,
            'score': score
        })
    
    results.sort(key=lambda x: x['score'], reverse=True)
    return results[:limit]

def filter_by_growth_stage(plants_list, stage):
    """
    Filter plants by growth stage (seedling/vegetative/mature)
    Args:
        plants_list: List of plants
        stage: Growth stage to filter by
    Returns:
        list: Filtered plants
    """
    stage_normalized = normalize_text(stage)
    
    stage_mapping = {
        'seedling': lambda days: days < 30,
        'vegetative': lambda days: 30 <= days < 90,
        'mature': lambda days: days >= 90
    }
    
    if stage_normalized not in stage_mapping:
        return []
    
    filter_fn = stage_mapping[stage_normalized]
    
    return [p for p in plants_list if filter_fn(p.get('maturityDays', 0))]

if __name__ == "__main__":
    # Test the simple semantic search
    test_plants = [
        {
            "id": 1,
            "name": "Tomato",
            "type": "vegetable",
            "difficulty": "medium",
            "sunlight": "full sun",
            "water": "moderate",
            "description": "Fruiting plant that produces red tomatoes",
            "maturityDays": 60
        },
        {
            "id": 2,
            "name": "Basil",
            "type": "herb",
            "difficulty": "easy",
            "sunlight": "full sun",
            "water": "moderate",
            "description": "Aromatic herb used in cooking",
            "maturityDays": 20
        }
    ]
    
    # Test search
    results = semantic_search_simple("red fruit full sun", test_plants)
    print(f"✅ Search results: {len(results)} plants found")
    
    # Test similar plants
    similar = get_similar_plants(1, test_plants)
    print(f"✅ Similar plants: {len(similar)} found")
    
    # Test growth stage filter
    seedlings = filter_by_growth_stage(test_plants, "seedling")
    print(f"✅ Seedling plants: {len(seedlings)} found")
