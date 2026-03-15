// ===== Explore Page Functionality =====

document.addEventListener('DOMContentLoaded', function() {
    const plantsGrid = document.getElementById('plantsGrid');
    const categoryFilter = document.getElementById('categoryFilter');
    
    // Plant icons (emoji based)
    const plantIcons = {
        'Tomato': '🍅',
        'Basil': '🌿',
        'Lettuce': '🥬',
        'Rose': '🌹',
        'Sunflower': '🌻',
        'Mint': '🌿',
        'Parsley': '🌿',
        'Spinach': '🥬',
        'Carrot': '🥕',
        'Cucumber': '🥒',
        'Tulip': '🌷',
        'Daffodil': '🌼',
        'Thyme': '🌿',
        'Oregano': '🌿',
        'Bell Pepper': '🫑',
        'Broccoli': '🥦',
        'Lavender': '💜',
        'Daisy': '🌼',
        'Sage': '🌿',
        'Chives': '🌿',
    };

    // Display all plants or filtered plants
    function displayPlants(plantsToDisplay) {
        if (plantsToDisplay.length === 0) {
            plantsGrid.innerHTML = '<div class="empty-state" style="grid-column: 1 / -1;"><h2>No plants found</h2><p>Try a different filter or browse all plants</p></div>';
            return;
        }

        plantsGrid.innerHTML = plantsToDisplay.map(plant => `
            <div class="plant-card" data-plant-id="${plant.id}">
                <div class="plant-icon">${plantIcons[plant.name] || '🌱'}</div>
                <div class="plant-info">
                    <div class="plant-name">${plant.name}</div>
                    <div class="plant-category">${plant.category}</div>
                    <div class="plant-description">
                        Learn how to grow and care for ${plant.name} from seed to harvest.
                    </div>
                    <button class="plant-btn plant-select-btn" data-plant-id="${plant.id}" data-plant-name="${plant.name}">
                        Select Plant
                    </button>
                </div>
            </div>
        `).join('');

        // Add event listeners to select buttons
        document.querySelectorAll('.plant-select-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const plantId = this.dataset.plantId;
                const plantName = this.dataset.plantName;
                
                // Store selection in session
                sessionStorage.setItem('selectedPlantId', plantId);
                sessionStorage.setItem('selectedPlantName', plantName);
                
                // Redirect to stage page
                window.location.href = 'stage.html';
            });
        });
    }

    // Filter plants based on category
    categoryFilter.addEventListener('change', function() {
        const selectedCategory = this.value;
        
        if (selectedCategory === '') {
            displayPlants(PLANTS);
        } else {
            const filtered = PLANTS.filter(plant => plant.category === selectedCategory);
            displayPlants(filtered);
        }
    });

    // Initial display of all plants
    displayPlants(PLANTS);

    // Add card click to select plant
    document.addEventListener('click', function(e) {
        const card = e.target.closest('.plant-card');
        if (card && !e.target.closest('.plant-btn')) {
            card.querySelector('.plant-btn').click();
        }
    });
});
