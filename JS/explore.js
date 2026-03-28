// ===== Explore Page Functionality =====

document.addEventListener('DOMContentLoaded', function() {
    const plantsGrid = document.getElementById('plantsGrid');
    const categoryFilterTop = document.getElementById('categoryFilterTop');
    const categoryFilterScroll = document.getElementById('categoryFilterScroll');

    const plantIcons = {
        Tomato: '\ud83c\udf45',
        Basil: '\ud83c\udf3f',
        Lettuce: '\ud83e\udd6c',
        Rose: '\ud83c\udf39',
        Sunflower: '\ud83c\udf3b',
        Mint: '\u2618\ufe0f',
        Parsley: '\ud83e\udd6c',
        Spinach: '\ud83e\udd6c',
        Carrot: '\ud83e\udd55',
        Cucumber: '\ud83e\udd52',
        Tulip: '\ud83c\udf37',
        Daffodil: '\ud83c\udf3c',
        Thyme: '\ud83e\udeb4',
        Oregano: '\ud83e\udec2',
        'Bell Pepper': '\ud83e\uded1',
        Broccoli: '\ud83e\udd66',
        Lavender: '\ud83c\udf38',
        Daisy: '\ud83c\udff5\ufe0f',
        Sage: '\ud83c\udf43',
        Chives: '\ud83e\uddc5'
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
                <div class="plant-icon">${plantIcons[plant.name] || '\ud83c\udf31'}</div>
                <div class="plant-info">
                    <div class="plant-name">${plant.name}</div>
                    <button class="plant-btn" data-id="${plant.id}">
                        Select Plant
                    </button>
                </div>
            </div>
        `).join('');

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

    const basePlants = typeof PLANTS !== 'undefined' ? PLANTS : [];

    const syncAndFilter = (value, source) => {
        if (source !== 'top' && categoryFilterTop) {
            categoryFilterTop.value = value;
        }
        if (source !== 'scroll' && categoryFilterScroll) {
            categoryFilterScroll.value = value;
        }

        const filtered = value ? basePlants.filter(p => p.category === value) : basePlants;
        displayPlants(filtered);
    };

    if (categoryFilterTop) {
        categoryFilterTop.addEventListener('change', function() {
            syncAndFilter(this.value, 'top');
        });
    }

    if (categoryFilterScroll) {
        categoryFilterScroll.addEventListener('change', function() {
            syncAndFilter(this.value, 'scroll');
        });
    }

    if (typeof PLANTS !== 'undefined') {
        displayPlants(basePlants);
    } else {
        console.error('PLANTS not found');
    }

    const header = document.querySelector('.header');
    const scrollHeader = document.querySelector('.scroll-header');

    window.addEventListener('scroll', function() {
        if (!header || !scrollHeader) return;
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
