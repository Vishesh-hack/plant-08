/**
 * API Configuration & Wrapper
 * Plant-08 Frontend API Integration
 */

// ===== API BASE URL =====
const API_BASE_URL = 'http://localhost:5000/api';
const API_TIMEOUT = 5000;
const MAX_RETRIES = 3;

// ===== API REQUEST WRAPPER WITH RETRY & CACHING =====
class PlantAPI {
  constructor() {
    this.cache = new Map();
    this.cacheExpiry = 60 * 60 * 1000; // 1 hour cache
  }

  /**
   * Make API request with retry logic and caching
   */
  async request(endpoint, options = {}) {
    const cacheKey = `${endpoint}`;
    
    // Check cache
    if (this.cache.has(cacheKey)) {
      const cached = this.cache.get(cacheKey);
      if (Date.now() - cached.timestamp < this.cacheExpiry) {
        console.log(`📦 Using cached data: ${endpoint}`);
        return cached.data;
      }
    }

    const url = `${API_BASE_URL}${endpoint}`;
    let lastError;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        console.log(`📡 API Request (Attempt ${attempt}): ${endpoint}`);
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);

        const response = await fetch(url, {
          ...options,
          signal: controller.signal,
          headers: {
            'Content-Type': 'application/json',
            ...options.headers
          }
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        
        // Cache the successful response
        this.cache.set(cacheKey, {
          data: data,
          timestamp: Date.now()
        });

        return data;

      } catch (error) {
        lastError = error;
        console.warn(`⚠️  Attempt ${attempt} failed: ${error.message}`);
        
        if (attempt < MAX_RETRIES) {
          // Exponential backoff
          const delay = Math.pow(2, attempt - 1) * 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }

    // All retries failed - try offline cache
    console.error(`❌ All retries failed: ${lastError.message}`);
    return this.getOfflineData(endpoint) || null;
  }

  /**
   * Get all plants with pagination
   */
  async getAllPlants(page = 1, limit = 20) {
    try {
      return await this.request(`/plants/all?page=${page}&limit=${limit}`);
    } catch (error) {
      console.error('Error fetching all plants:', error);
      return null;
    }
  }

  /**
   * Search plants by name or type
   */
  async searchPlants(query, type = null) {
    try {
      let endpoint = `/plants/search?q=${encodeURIComponent(query)}`;
      if (type) {
        endpoint += `&type=${encodeURIComponent(type)}`;
      }
      return await this.request(endpoint);
    } catch (error) {
      console.error('Error searching plants:', error);
      return null;
    }
  }

  /**
   * Get single plant by ID
   */
  async getPlantById(plantId) {
    try {
      return await this.request(`/plant/${plantId}`);
    } catch (error) {
      console.error(`Error fetching plant ${plantId}:`, error);
      return null;
    }
  }

  /**
   * Get plants filtered by type
   */
  async getPlantsByType(type) {
    try {
      return await this.request(`/plants/by-type?type=${encodeURIComponent(type)}`);
    } catch (error) {
      console.error(`Error fetching plants by type ${type}:`, error);
      return null;
    }
  }

  /**
   * Get plant guides (care instructions)
   */
  async getPlantGuides(plantId) {
    try {
      return await this.request(`/plant/${plantId}/guides`);
    } catch (error) {
      console.error(`Error fetching guides for ${plantId}:`, error);
      return null;
    }
  }

  /**
   * Get offline fallback data from localStorage
   */
  getOfflineData(endpoint) {
    const stored = localStorage.getItem(`api_fallback_${endpoint}`);
    if (stored) {
      console.log(`📱 Using offline fallback for: ${endpoint}`);
      return JSON.parse(stored);
    }
    return null;
  }

  /**
   * Save response to offline cache
   */
  cacheOffline(endpoint, data) {
    localStorage.setItem(`api_fallback_${endpoint}`, JSON.stringify(data));
  }

  /**
   * Clear all caches
   */
  clearCache() {
    this.cache.clear();
    console.log('Cache cleared');
  }

  /**
   * Check API health
   */
  async checkHealth() {
    try {
      const response = await fetch(`${API_BASE_URL.replace('/api', '')}/health`);
      return response.ok;
    } catch (error) {
      return false;
    }
  }

  /**
   * PHASE 2: Semantic search for plants based on natural language query
   */
  async searchSemantic(query, limit = 5) {
    try {
      const cacheKey = `semantic_search_${query}_${limit}`;
      
      // Check cache
      if (this.cache.has(cacheKey)) {
        const cached = this.cache.get(cacheKey);
        if (Date.now() - cached.timestamp < this.cacheExpiry) {
          console.log(`📦 [Cache] Semantic search: "${query}"`);
          return cached.data;
        }
      }

      const response = await this.request(`/search/semantic?q=${encodeURIComponent(query)}&limit=${limit}`);
      
      // Cache the result
      if (response && response.success) {
        this.cache.set(cacheKey, {
          data: response,
          timestamp: Date.now()
        });
        console.log(`✅ Semantic search returned ${response.results.length} results`);
      }
      
      return response;
    } catch (error) {
      console.error('Semantic search error:', error);
      return { error: error.message, results: [] };
    }
  }

  /**
   * PHASE 2: Get plants similar to a reference plant
   */
  async getSimilarPlants(plantId, limit = 5) {
    try {
      const cacheKey = `similar_${plantId}_${limit}`;
      
      // Check cache
      if (this.cache.has(cacheKey)) {
        const cached = this.cache.get(cacheKey);
        if (Date.now() - cached.timestamp < this.cacheExpiry) {
          console.log(`📦 [Cache] Similar plants for: ${plantId}`);
          return cached.data;
        }
      }

      const response = await this.request(`/plants/similar/${plantId}?limit=${limit}`);
      
      // Cache the result
      if (response && response.success) {
        this.cache.set(cacheKey, {
          data: response,
          timestamp: Date.now()
        });
        console.log(`✅ Found ${response.similar_plants.length} plants similar to ${response.reference_plant}`);
      }
      
      return response;
    } catch (error) {
      console.error('Similar plants error:', error);
      return { error: error.message, similar_plants: [] };
    }
  }

  /**
   * PHASE 2: Get plants filtered by growth stage (seedling/vegetative/mature)
   */
  async getPlantsByGrowthStage(stage, limit = 20) {
    try {
      // Validate stage
      const validStages = ['seedling', 'vegetative', 'mature'];
      if (!validStages.includes(stage.toLowerCase())) {
        return {
          error: `Invalid stage. Valid values: ${validStages.join(', ')}`,
          plants: []
        };
      }

      const cacheKey = `growth_stage_${stage}_${limit}`;
      
      // Check cache
      if (this.cache.has(cacheKey)) {
        const cached = this.cache.get(cacheKey);
        if (Date.now() - cached.timestamp < this.cacheExpiry) {
          console.log(`📦 [Cache] Growth stage: ${stage}`);
          return cached.data;
        }
      }

      const response = await this.request(`/plants/by-growth-stage?stage=${stage}&limit=${limit}`);
      
      // Cache the result
      if (response && response.success) {
        this.cache.set(cacheKey, {
          data: response,
          timestamp: Date.now()
        });
        
        const stageLabels = {
          'seedling': 'fast-growing',
          'vegetative': 'medium-growth',
          'mature': 'long-term'
        };
        console.log(`✅ Found ${response.count} ${stageLabels[stage]} plants`);
      }
      
      return response;
    } catch (error) {
      console.error('Growth stage filter error:', error);
      return { error: error.message, plants: [] };
    }
  }
}

// ===== GLOBAL API INSTANCE =====
const plantAPI = new PlantAPI();

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', async function() {
  console.log('🌱 Plant-08 API initialized');
  
  // Check API health
  const isHealthy = await plantAPI.checkHealth();
  if (isHealthy) {
    console.log('✅ API is healthy');
  } else {
    console.warn('⚠️  API health check failed - using offline mode');
    document.body.classList.add('offline-mode');
  }
});

// ===== UTILITY FUNCTIONS =====

/**
 * Format plant data for display
 */
function formatPlantForDisplay(plant) {
  return {
    id: plant.id,
    name: plant.name,
    scientificName: plant.scientificName,
    type: plant.type,
    difficulty: plant.difficulty,
    description: plant.description,
    image: plant.imageUrl || `/images/${plant.id}.jpg`,
    care: {
      sunlight: plant.sunlight,
      water: plant.water,
      temperature: plant.temperature,
      soil: plant.soil
    },
    guides: plant.guides,
    seasonalCare: plant.seasonalCare
  };
}

/**
 * Create plant card HTML
 */
function createPlantCard(plant) {
  const formatted = formatPlantForDisplay(plant);
  const difficultyColor = {
    'easy': '#4CAF50',
    'medium': '#FFC107',
    'hard': '#F44336'
  };

  return `
    <div class="plant-card" data-plant-id="${formatted.id}">
      <div class="plant-image">
        <img src="${formatted.image}" alt="${formatted.name}" onerror="this.src='/images/placeholder.jpg'">
      </div>
      <div class="plant-info">
        <h3 class="plant-name">${formatted.name}</h3>
        <p class="plant-scientific">${formatted.scientificName}</p>
        <div class="plant-meta">
          <span class="plant-type badge-${formatted.type}">${formatted.type}</span>
          <span class="plant-difficulty" style="background-color: ${difficultyColor[formatted.difficulty]}">${formatted.difficulty}</span>
        </div>
        <p class="plant-description">${formatted.description}</p>
        <ul class="plant-quick-care">
          <li>☀️ ${formatted.care.sunlight}</li>
          <li>💧 ${formatted.care.water}</li>
          <li>🌡️ ${formatted.care.temperature}</li>
        </ul>
        <a href="detail.html?plant=${formatted.id}" class="btn-view-detail">View Details →</a>
      </div>
    </div>
  `;
}

/**
 * Display error message
 */
function showError(message, containerId = 'main-content') {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = `
      <div class="error-message">
        <h3>⚠️ Error</h3>
        <p>${message}</p>
        <p style="font-size: 0.9em; color: #666;">Please try again or contact support.</p>
      </div>
    `;
  }
}

/**
 * Display loading state
 */
function showLoading(containerId = 'main-content') {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = `
      <div class="loading-spinner">
        <div class="spinner"></div>
        <p>Loading plants...</p>
      </div>
    `;
  }
}

console.log('✅ API Config loaded');
