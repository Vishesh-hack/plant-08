// ==================== SEMANTIC SEARCH PAGE SCRIPT ====================

let currentSearchStage = 'seedling';
let currentSimilarPlantId = null;

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    console.log('🔍 Search page initialized');
});

function initializeEventListeners() {
    // Tab switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', handleTabSwitch);
    });

    // Semantic search
    const semanticBtn = document.getElementById('semantic-btn');
    const semanticInput = document.getElementById('semantic-input');
    semanticBtn.addEventListener('click', performSemanticSearch);
    semanticInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSemanticSearch();
    });

    // Example chips
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            const query = chip.dataset.search;
            document.getElementById('semantic-input').value = query;
            performSemanticSearch();
        });
    });

    // Growth stage selector
    const stageOptions = document.querySelectorAll('.stage-option');
    stageOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove active from all
            stageOptions.forEach(o => o.classList.remove('active'));
            // Add active to clicked
            option.classList.add('active');
            currentSearchStage = option.dataset.stage;
        });
    });

    // Growth stage button
    const growthBtn = document.getElementById('growth-btn');
    growthBtn.addEventListener('click', performGrowthStageSearch);

    // Modal close buttons
    const closeButtons = document.querySelectorAll('.modal-close');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // Close modal on outside click
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    });

    // Prevent closing when clicking inside modal content
    const modalContents = document.querySelectorAll('.modal-content');
    modalContents.forEach(content => {
        content.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
}

// ==================== TAB MANAGEMENT ====================

function handleTabSwitch(e) {
    const tabName = e.target.dataset.tab;
    
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

// ==================== SEMANTIC SEARCH ====================

async function performSemanticSearch() {
    const query = document.getElementById('semantic-input').value.trim();
    
    if (!query) {
        showSemanticError('Please enter a search query');
        return;
    }

    showSemanticLoading();
    hideSemanticError();

    try {
        const results = await plantAPI.searchSemantic(query, 12);

        if (results.error) {
            showSemanticError(results.error || 'Search failed');
            hideSemanticLoading();
            return;
        }

        if (!results.results || results.results.length === 0) {
            showSemanticEmpty();
            hideSemanticLoading();
            return;
        }

        displaySemanticResults(results.results);
        hideSemanticLoading();
    } catch (error) {
        console.error('Search error:', error);
        showSemanticError('Failed to search plants: ' + error.message);
        hideSemanticLoading();
    }
}

function displaySemanticResults(results) {
    const grid = document.getElementById('semantic-results-grid');
    const container = document.getElementById('semantic-results');
    const count = document.getElementById('results-count');
    const empty = document.getElementById('semantic-empty');

    // Clear previous results
    grid.innerHTML = '';
    empty.classList.add('hidden');

    // Update count
    count.textContent = `${results.length} found`;

    // Create plant cards
    results.forEach(result => {
        const card = createPlantCard(result.plant, result.score, 'semantic');
        grid.appendChild(card);
    });

    // Show results container
    container.classList.remove('hidden');
}

function showSemanticLoading() {
    document.getElementById('semantic-loading').classList.remove('hidden');
    document.getElementById('semantic-results').classList.add('hidden');
    document.getElementById('semantic-empty').classList.add('hidden');
}

function hideSemanticLoading() {
    document.getElementById('semantic-loading').classList.add('hidden');
}

function showSemanticError(message) {
    const error = document.getElementById('semantic-error');
    error.textContent = message;
    error.classList.remove('hidden');
}

function hideSemanticError() {
    document.getElementById('semantic-error').classList.add('hidden');
}

function showSemanticEmpty() {
    document.getElementById('semantic-results').classList.add('hidden');
    document.getElementById('semantic-empty').classList.remove('hidden');
}

// ==================== GROWTH STAGE FILTER ====================

async function performGrowthStageSearch() {
    const limit = parseInt(document.getElementById('growth-limit').value);

    showGrowthLoading();
    hideGrowthError();

    try {
        const results = await plantAPI.getPlantsByGrowthStage(currentSearchStage, limit);

        if (results.error) {
            showGrowthError(results.error || 'Filter failed');
            hideGrowthLoading();
            return;
        }

        if (!results.plants || results.plants.length === 0) {
            showGrowthEmpty();
            hideGrowthLoading();
            return;
        }

        displayGrowthResults(results);
        hideGrowthLoading();
    } catch (error) {
        console.error('Growth stage filter error:', error);
        showGrowthError('Failed to filter plants: ' + error.message);
        hideGrowthLoading();
    }
}

function displayGrowthResults(data) {
    const grid = document.getElementById('growth-results-grid');
    const container = document.getElementById('growth-results');
    const count = document.getElementById('growth-count');
    const title = document.getElementById('growth-stage-title');
    const empty = document.getElementById('growth-empty');

    // Clear previous results
    grid.innerHTML = '';
    empty.classList.add('hidden');

    // Update title and count
    const stageLabels = {
        'seedling': '🌱 Quick Harvest (20-30 days)',
        'vegetative': '🌿 Medium Growth (30-90 days)',
        'mature': '🌳 Long Term (90+ days)'
    };
    title.textContent = stageLabels[data.stage];
    count.textContent = `${data.plants.length} found`;

    // Create plant cards
    data.plants.forEach(plant => {
        const card = createPlantCard(plant, null, 'growth');
        grid.appendChild(card);
    });

    // Show results container
    container.classList.remove('hidden');
}

function showGrowthLoading() {
    document.getElementById('growth-loading').classList.remove('hidden');
    document.getElementById('growth-results').classList.add('hidden');
    document.getElementById('growth-empty').classList.add('hidden');
}

function hideGrowthLoading() {
    document.getElementById('growth-loading').classList.add('hidden');
}

function showGrowthError(message) {
    const error = document.getElementById('growth-error');
    error.textContent = message;
    error.classList.remove('hidden');
}

function hideGrowthError() {
    document.getElementById('growth-error').classList.add('hidden');
}

function showGrowthEmpty() {
    document.getElementById('growth-results').classList.add('hidden');
    document.getElementById('growth-empty').classList.remove('hidden');
}

// ==================== PLANT CARD CREATION ====================

function createPlantCard(plant, score, source) {
    const card = document.createElement('div');
    card.className = 'plant-card';

    // Get emoji based on type
    const typeEmojis = {
        'herb': '🌿',
        'vegetable': '🥬',
        'fruit': '🍎',
        'flower': '🌸',
        'indoor': '🏠',
        'succulent': '🌵'
    };
    const emoji = typeEmojis[plant.type] || '🌱';

    // Build card HTML
    let scoreHtml = '';
    if (score !== null) {
        const scoreClass = score >= 7 ? '' : (score >= 5 ? 'low' : '');
        scoreHtml = `<span class="score-badge ${scoreClass}">${score.toFixed(1)}</span>`;
    }

    let matureHtml = '';
    if (plant.maturityDays) {
        matureHtml = `<span>${plant.maturityDays}d</span>`;
    }

    card.innerHTML = `
        <div class="plant-card-image">${emoji}</div>
        <div class="plant-card-content">
            <h3 class="plant-card-title">${plant.name}</h3>
            <span class="plant-card-type">${plant.type}</span>
            
            <div class="plant-card-meta">
                <span>🎯 ${plant.difficulty}</span>
                ${matureHtml ? `<span>⏱️ ${matureHtml}` : ''}
            </div>
            
            <p class="plant-card-description">${plant.description}</p>
            
            <div class="plant-card-score">
                ${scoreHtml}
                <div class="plant-actions">
                    <button class="plant-action-btn view-btn" data-plant-id="${plant.id}">View</button>
                    <button class="plant-action-btn similar-btn" data-plant-id="${plant.id}">Similar</button>
                </div>
            </div>
        </div>
    `;

    const goToDetail = () => {
        sessionStorage.setItem('selectedPlantId', plant.id);
        sessionStorage.setItem('selectedPlantName', plant.name);
        window.location.href = `detail.html?plant=${encodeURIComponent(plant.id)}`;
    };

    // Add event listeners
    card.querySelector('.view-btn').addEventListener('click', () => {
        goToDetail();
    });

    card.querySelector('.similar-btn').addEventListener('click', () => {
        showSimilarPlants(plant.id, plant.name);
    });

    return card;
}

// ==================== PLANT DETAIL MODAL ====================

function showPlantDetail(plant) {
    const modal = document.getElementById('detail-modal');
    const content = document.getElementById('detail-content');

    // Build HTML for detail view
    const html = `
        <h2>${plant.name}</h2>
        
        <div class="detail-section">
            <h3>📌 Basic Info</h3>
            <p><strong>Scientific Name:</strong> ${plant.scientificName || 'N/A'}</p>
            <p><strong>Type:</strong> ${plant.type}</p>
            <p><strong>Difficulty:</strong> ${plant.difficulty}</p>
        </div>

        <div class="detail-section">
            <h3>📝 Description</h3>
            <p>${plant.description}</p>
        </div>

        <div class="detail-section">
            <h3>🌞 Growing Conditions</h3>
            <p><strong>Sunlight:</strong> ${plant.sunlight}</p>
            <p><strong>Water:</strong> ${plant.water}</p>
            <p><strong>Temperature:</strong> ${plant.temperature}</p>
            <p><strong>Soil:</strong> ${plant.soil}</p>
        </div>

        <div class="detail-section">
            <h3>⏱️ Timeline</h3>
            <p><strong>Maturity Days:</strong> ${plant.maturityDays} days</p>
            <p><strong>Spacing:</strong> ${plant.spacing}</p>
        </div>

        ${plant.guides && Object.keys(plant.guides).length > 0 ? `
            <div class="detail-section">
                <h3>📚 Care Guides</h3>
                ${Object.entries(plant.guides).map(([stage, guide]) => `
                    <p><strong>${stage}:</strong> ${guide}</p>
                `).join('')}
            </div>
        ` : ''}

        ${plant.seasonalCare && Object.keys(plant.seasonalCare).length > 0 ? `
            <div class="detail-section">
                <h3>🌍 Seasonal Care</h3>
                ${Object.entries(plant.seasonalCare).map(([season, care]) => `
                    <p><strong>${season}:</strong> ${care}</p>
                `).join('')}
            </div>
        ` : ''}
    `;

    content.innerHTML = html;
    modal.classList.remove('hidden');
}

// ==================== SIMILAR PLANTS MODAL ====================

async function showSimilarPlants(plantId, plantName) {
    const modal = document.getElementById('similar-modal');
    const grid = document.getElementById('similar-results-grid');
    const title = document.getElementById('modal-title');

    title.textContent = `Plants Similar to ${plantName}`;
    grid.innerHTML = '';

    // Show loading
    document.getElementById('similar-loading').classList.remove('hidden');
    modal.classList.remove('hidden');

    try {
        const results = await plantAPI.getSimilarPlants(plantId, 8);

        if (results.error) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #999;">Could not load similar plants</p>`;
            document.getElementById('similar-loading').classList.add('hidden');
            return;
        }

        if (!results.similar_plants || results.similar_plants.length === 0) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #999;">No similar plants found</p>`;
            document.getElementById('similar-loading').classList.add('hidden');
            return;
        }

        // Create cards for similar plants
        results.similar_plants.forEach(item => {
            const card = createPlantCard(item.plant, item.similarity_score, 'similar');
            grid.appendChild(card);
        });

        document.getElementById('similar-loading').classList.add('hidden');
    } catch (error) {
        console.error('Error loading similar plants:', error);
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #999;">Error loading similar plants</p>`;
        document.getElementById('similar-loading').classList.add('hidden');
    }
}

// ==================== MODAL MANAGEMENT ====================

function closeModal(e) {
    if (e.target.closest('.modal-close')) {
        const modal = e.target.closest('.modal');
        modal.classList.add('hidden');
    }
}
