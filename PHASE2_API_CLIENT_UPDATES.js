// ==================== PHASE 2 API CLIENT UPDATES ====================
// Add these methods to JS/api-config.js PlantAPI class

// SEMANTIC SEARCH: Find plants based on natural language query
async searchSemantic(query, limit = 5) {
  /**
   * Search for plants using semantic keywords and descriptions
   * @param {string} query - Search query (e.g., "red fruit full sun")
   * @param {number} limit - Max results to return (1-20)
   * @returns {Promise} Search results with relevance scores
   */
  const cacheKey = `semantic_search_${query}_${limit}`;
  
  // Check cache
  if (this.cache.has(cacheKey)) {
    const cached = this.cache.get(cacheKey);
    if (Date.now() - cached.timestamp < this.cacheTTL) {
      console.log(`📦 [Cache Hit] Semantic search: "${query}"`);
      return cached.data;
    }
  }
  
  try {
    const endpoint = `/api/search/semantic?q=${encodeURIComponent(query)}&limit=${limit}`;
    const data = await this.makeRequest(endpoint);
    
    // Cache the results
    this.cache.set(cacheKey, {
      data: data,
      timestamp: Date.now()
    });
    
    console.log(`✅ Semantic search returned ${data.results.length} results`);
    return data;
  } catch (error) {
    console.error(`❌ Semantic search failed: ${error.message}`);
    // Fallback to localStorage cache or empty results
    return {
      error: error.message,
      results: [],
      fallback: true
    };
  }
}

// SIMILAR PLANTS: Find plants similar to a reference plant
async getSimilarPlants(plantId, limit = 5) {
  /**
   * Get plants similar to the specified plant
   * Similar based on: type, difficulty, sunlight, description
   * @param {string|number} plantId - ID of reference plant
   * @param {number} limit - Max results to return
   * @returns {Promise} Similar plants with similarity scores
   */
  const cacheKey = `similar_${plantId}_${limit}`;
  
  // Check cache
  if (this.cache.has(cacheKey)) {
    const cached = this.cache.get(cacheKey);
    if (Date.now() - cached.timestamp < this.cacheTTL) {
      console.log(`📦 [Cache Hit] Similar plants for: ${plantId}`);
      return cached.data;
    }
  }
  
  try {
    const endpoint = `/api/plants/similar/${plantId}?limit=${limit}`;
    const data = await this.makeRequest(endpoint);
    
    // Cache the results
    this.cache.set(cacheKey, {
      data: data,
      timestamp: Date.now()
    });
    
    console.log(`✅ Found ${data.similar_plants.length} similar plants to ${data.reference_plant}`);
    return data;
  } catch (error) {
    console.error(`❌ Similar plants lookup failed: ${error.message}`);
    return {
      error: error.message,
      similar_plants: [],
      fallback: true
    };
  }
}

// GROWTH STAGE FILTER: Get plants by growth speed
async getPlantsByGrowthStage(stage, limit = 20) {
  /**
   * Filter plants by growth stage (how fast they mature)
   * Stages: 
   *   - seedling: 0-30 days (fast, beginner-friendly)
   *   - vegetative: 30-90 days (moderate)
   *   - mature: 90+ days (long-term)
   * @param {string} stage - Growth stage: 'seedling', 'vegetative', or 'mature'
   * @param {number} limit - Max results to return
   * @returns {Promise} Plants at specified growth stage
   */
  const cacheKey = `growth_stage_${stage}_${limit}`;
  
  // Validate stage parameter
  const validStages = ['seedling', 'vegetative', 'mature'];
  if (!validStages.includes(stage.toLowerCase())) {
    console.error(`❌ Invalid growth stage: ${stage}. Use: ${validStages.join(', ')}`);
    return {
      error: `Invalid stage. Valid values: ${validStages.join(', ')}`,
      plants: []
    };
  }
  
  // Check cache
  if (this.cache.has(cacheKey)) {
    const cached = this.cache.get(cacheKey);
    if (Date.now() - cached.timestamp < this.cacheTTL) {
      console.log(`📦 [Cache Hit] Growth stage: ${stage}`);
      return cached.data;
    }
  }
  
  try {
    const endpoint = `/api/plants/by-growth-stage?stage=${stage}&limit=${limit}`;
    const data = await this.makeRequest(endpoint);
    
    // Cache the results
    this.cache.set(cacheKey, {
      data: data,
      timestamp: Date.now()
    });
    
    const stageLabels = {
      'seedling': 'fast-growing (20-30 days)',
      'vegetative': 'medium-growth (30-90 days)',
      'mature': 'long-term projects (90+ days)'
    };
    
    console.log(`✅ Found ${data.count} ${stageLabels[stage]} plants`);
    return data;
  } catch (error) {
    console.error(`❌ Growth stage filter failed: ${error.message}`);
    return {
      error: error.message,
      plants: [],
      fallback: true
    };
  }
}

// ==================== USAGE EXAMPLES ====================

/*
// Example 1: Search for plants matching a description
const results = await plantAPI.searchSemantic("red fruiting vegetable full sun");
if (results.results.length > 0) {
  results.results.forEach(result => {
    console.log(`${result.plant.name} (Score: ${result.score})`);
    displayPlantCard(result.plant);
  });
}

// Example 2: Find similar plants to tomato
const similar = await plantAPI.getSimilarPlants("tomato-001");
console.log(`Plants similar to ${similar.reference_plant}:`);
similar.similar_plants.forEach(item => {
  console.log(`  - ${item.plant.name} (Similarity: ${item.similarity_score})`);
});

// Example 3: Show quick harvest options (seedling stage)
const quickPlants = await plantAPI.getPlantsByGrowthStage("seedling", 15);
console.log(`Quick harvest options (${quickPlants.count} plants):`);
quickPlants.plants.forEach(plant => {
  console.log(`  - ${plant.name} (${plant.maturityDays} days)`);
});

// Example 4: Build a search UI with all three features
async function handleAdvancedSearch(query) {
  showLoading();
  
  try {
    // Get semantic search results
    const searchResults = await plantAPI.searchSemantic(query, 10);
    
    if (searchResults.error) {
      showError("Search failed: " + searchResults.error);
      return;
    }
    
    // Display results
    displaySearchResults(searchResults.results);
    
    // Also get similar plants for first result if available
    if (searchResults.results.length > 0) {
      const firstPlant = searchResults.results[0].plant;
      const similar = await plantAPI.getSimilarPlants(firstPlant.id, 5);
      if (similar.similar_plants) {
        displaySimilarPlantsSection(similar.similar_plants);
      }
    }
  } catch (error) {
    showError("Advanced search error: " + error.message);
  } finally {
    hideLoading();
  }
}

// Example 5: Build growth stage filter UI
async function showPlantsByGrowth(stage) {
  const stageInfo = {
    'seedling': { icon: '🌱', label: 'Quick (20-30 days)', color: 'green' },
    'vegetative': { icon: '🌿', label: 'Medium (30-90 days)', color: 'blue' },
    'mature': { icon: '🌳', label: 'Long-term (90+ days)', color: 'brown' }
  };
  
  const info = stageInfo[stage];
  console.log(`${info.icon} ${info.label}`);
  
  const plants = await plantAPI.getPlantsByGrowthStage(stage, 20);
  
  if (plants.plants.length > 0) {
    displayGrowthStageGallery(plants.plants, info);
  } else {
    showMessage(`No ${info.label} plants available`);
  }
}
*/

// ==================== INTEGRATION CHECKLIST ====================
/*
✓ Copy these methods into PlantAPI class in api-config.js
✓ Methods use existing makeRequest() for HTTP calls
✓ Methods use existing cache system (1-hour TTL)
✓ Error handling matches existing pattern
✓ Logging uses existing console patterns
✓ CORS already enabled on backend
✓ Test all three methods with example queries
✓ Update frontend pages to use new methods:
  - Add search.html for advanced search interface
  - Add growth-stage-selector.html component
  - Add similar-plants recommendation widget
  - Update explore.html to use semantic search
*/

// ==================== TESTING ====================
/*
// Quick test in browser console:
await plantAPI.searchSemantic("red fruit");
await plantAPI.getSimilarPlants("tomato-001");  
await plantAPI.getPlantsByGrowthStage("seedling");

// Expected responses:
// 1. Semantic search: {success: true, query: "...", results: [...]}
// 2. Similar plants: {success: true, reference_plant: "...", similar_plants: [...]}
// 3. Growth stage: {success: true, stage: "seedling", count: X, plants: [...]}
*/
