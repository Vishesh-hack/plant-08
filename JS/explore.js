// ===== Explore Page Functionality =====

document.addEventListener('DOMContentLoaded', function() {
    const plantsGrid = document.getElementById('plantsGrid');
    const categoryFilters = Array.from(document.querySelectorAll('.category-filter'));
    
    // Plant icons
    const plantIcons = {
        'Tomato': '🍅',
        'Basil': '🌿',
        'Lettuce': '🥬',
        'Rose': '🌹',
        'Sunflower': '🌻',
        'Mint': '☘️',
        'Parsley': '🥬',
        'Spinach': '🥬',
        'Carrot': '🥕',
        'Cucumber': '🥒',
        'Tulip': '🌷',
        'Daffodil': '🌼',
        'Thyme': '🪴',
        'Oregano': '🫒',
        'Bell Pepper': '🫑',
        'Broccoli': '🥦',
        'Lavender': '🌸',
        'Daisy': '🏵️',
        'Sage': '🍃',
        'Chives': '🧅',
        'Apple': '🍎',
        'Banana': '🍌',
        'Orange': '🍊',
        'Strawberry': '🍓',
        'Mango': '🥭',
    };

    function displayPlants(plantsToDisplay) {
        if (!plantsGrid) return;

        if (plantsToDisplay.length === 0) {
            plantsGrid.innerHTML = `<div class="empty-state" style="grid-column: 1 / -1;">
                <h2>No plants found</h2>
                <p>Try a different filter</p>
            </div>`;
            return;
        }

        plantsGrid.innerHTML = plantsToDisplay.map(plant => `
            <div class="plant-card" data-plant-id="${plant.id}">
                <div class="plant-icon">${plantIcons[plant.name] || '🌱'}</div>
                <div class="plant-info">
                    <div class="plant-name">${plant.name}</div>
                    <div class="plant-category">${plant.category}</div>
                    <button class="plant-btn" data-id="${plant.id}">
                        Select Plant
                    </button>
                </div>
            </div>
        `).join('');

        // Button click
        document.querySelectorAll('.plant-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const plantId = this.dataset.id;
                const plantCard = this.closest('.plant-card');
                const plantName = plantCard.querySelector('.plant-name').textContent;
                
                sessionStorage.setItem('selectedPlantId', plantId);
                sessionStorage.setItem('selectedPlantName', plantName);
                window.location.href = 'detail.html';
            });
        });

        // Icon click
        document.querySelectorAll('.plant-icon').forEach(icon => {
            icon.addEventListener('click', function() {
                const plantCard = this.closest('.plant-card');
                const plantId = plantCard.dataset.plantId;
                const plantName = plantCard.querySelector('.plant-name').textContent;

                sessionStorage.setItem('selectedPlantId', plantId);
                sessionStorage.setItem('selectedPlantName', plantName);
                window.location.href = 'detail.html';
            });
        });

        // Info click
        document.querySelectorAll('.plant-info').forEach(info => {
            info.addEventListener('click', function() {
                const plantCard = this.closest('.plant-card');
                const plantId = plantCard.dataset.plantId;
                const plantName = plantCard.querySelector('.plant-name').textContent;

                sessionStorage.setItem('selectedPlantId', plantId);
                sessionStorage.setItem('selectedPlantName', plantName);
                window.location.href = 'detail.html';
            });
        });
    }

    // Filter
    if (categoryFilters.length > 0) {
        const applyFilter = (value) => {
            const filtered = value ? PLANTS.filter(p => p.category === value) : PLANTS;
            displayPlants(filtered);
        };

        categoryFilters.forEach((filter) => {
            filter.addEventListener('change', function() {
                categoryFilters.forEach(otherFilter => {
                    if (otherFilter !== this) {
                        otherFilter.value = this.value;
                    }
                });

                applyFilter(this.value);
            });
        });
    }

    // Load all plants
    if (typeof PLANTS !== 'undefined') {
        displayPlants(PLANTS);
    } else {
        console.error("PLANTS not found");
    }
    
    // Scroll header functionality
    const header = document.querySelector('.header');
    const scrollHeader = document.querySelector('.scroll-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.opacity = '0';
            header.style.pointerEvents = 'none';
            scrollHeader.classList.add('visible');
        } else {
            header.style.opacity = '1';
            header.style.pointerEvents = 'auto';
            scrollHeader.classList.remove('visible');
        }
    });
});
