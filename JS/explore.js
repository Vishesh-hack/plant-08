// ===== Explore Page Functionality =====

document.addEventListener('DOMContentLoaded', async function() {
    const plantsGrid = document.getElementById('plantsGrid');
    const categoryFilterTop = document.getElementById('categoryFilterTop');
    const categoryFilterScroll = document.getElementById('categoryFilterScroll');
    const BOOKMARKS_KEY = 'plant08_bookmarks_v1';

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
        Oregano: '\ud83c\udf43',
        'Bell Pepper': '\ud83e\uded1',
        Broccoli: '\ud83e\udd66',
        Lavender: '\ud83c\udf38',
        Daisy: '\ud83c\udff5\ufe0f',
        Sage: '\ud83c\udf43',
        Chives: '\ud83e\uddc5',
        "Kulthi (Horse gram)": '\ud83e\uddc4',
        "Peanut (Groundnut)": '\ud83e\udd5c',
        "Tur (Pigeon pea)": '\ud83e\uddc6',
        "Bajra (Pearl millet)": '\ud83c\udf3e',
        Cotton: '\ud83e\uddf5',
        Rice: '\ud83c\udf3e',
        Wheat: '\ud83c\udf3e',
        Maize: '\ud83c\udf3d',
        Sugarcane: '\ud83c\udf6f',
        Soybean: '\ud83e\uddc6',
        "Chickpea (Gram)": '\ud83e\uddc6',
        Lentil: '\ud83e\uddc6',
        Mustard: '\ud83c\udf3f',
        Potato: '\ud83e\udd54',
        Onion: '\ud83e\uddc5',
        Garlic: '\ud83e\uddc4',
        Ginger: '\ud83e\uddc1',
        Turmeric: '\ud83e\uddc1',
        "Brinjal (Eggplant)": '\ud83c\udf46',
        "Okra (Lady finger)": '\ud83e\uddc5'
    };

    const getBookmarkedIds = () => {
        try {
            const raw = localStorage.getItem(BOOKMARKS_KEY);
            if (!raw) return new Set();
            const parsed = JSON.parse(raw);
            if (!Array.isArray(parsed)) return new Set();
            return new Set(parsed.map(item => String(item.id)));
        } catch (error) {
            return new Set();
        }
    };

    function displayPlants(plantsToDisplay) {
        if (!plantsGrid) return;
        const bookmarkedIds = getBookmarkedIds();

        if (plantsToDisplay.length === 0) {
            plantsGrid.innerHTML = `<div class="empty-state" style="grid-column: 1 / -1;">
                <h2>No plants found</h2>
                <p>Try a different filter</p>
            </div>`;
            return;
        }

        plantsGrid.innerHTML = plantsToDisplay.map(plant => `
            <div class="plant-card" data-plant-id="${plant.id}">
                ${bookmarkedIds.has(String(plant.id)) ? '<span class="bookmark-badge" title="Bookmarked">★</span>' : ''}
                <div class="plant-icon">${plantIcons[plant.name] || '\ud83c\udf31'}</div>
                <div class="plant-info">
                    <div class="plant-name">${plant.name}</div>
                    <div class="plant-category">${plant.category || 'Other'}</div>
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
                window.location.href = `detail.html?plant=${encodeURIComponent(plantId)}`;
            });
        });

        document.querySelectorAll('.plant-icon').forEach(icon => {
            icon.addEventListener('click', function() {
                const plantCard = this.closest('.plant-card');
                const plantId = plantCard.dataset.plantId;
                const plantName = plantCard.querySelector('.plant-name').textContent;

                sessionStorage.setItem('selectedPlantId', plantId);
                sessionStorage.setItem('selectedPlantName', plantName);
                window.location.href = `detail.html?plant=${encodeURIComponent(plantId)}`;
            });
        });

        document.querySelectorAll('.plant-info').forEach(info => {
            info.addEventListener('click', function() {
                const plantCard = this.closest('.plant-card');
                const plantId = plantCard.dataset.plantId;
                const plantName = plantCard.querySelector('.plant-name').textContent;

                sessionStorage.setItem('selectedPlantId', plantId);
                sessionStorage.setItem('selectedPlantName', plantName);
                window.location.href = `detail.html?plant=${encodeURIComponent(plantId)}`;
            });
        });
    }

    const normalizePlants = (source) => {
        if (Array.isArray(source)) return source;
        if (source && typeof source === 'object') return Object.values(source);
        return [];
    };

    const mergePlants = (apiPlants, localPlants) => {
        const merged = [];
        const seenIds = new Set();
        const seenNames = new Set();

        const addPlant = (plant) => {
            if (!plant || !plant.name) return;
            const idKey = plant.id ? String(plant.id) : null;
            const nameKey = plant.name.toLowerCase();
            if ((idKey && seenIds.has(idKey)) || seenNames.has(nameKey)) return;
            if (idKey) seenIds.add(idKey);
            seenNames.add(nameKey);
            merged.push(plant);
        };

        normalizePlants(apiPlants).forEach(addPlant);
        normalizePlants(localPlants).forEach(addPlant);
        return merged;
    };

    const localPlants = Array.isArray(window.PLANTS)
        ? window.PLANTS
        : (typeof PLANTS !== 'undefined' ? PLANTS : []);

    let basePlants = mergePlants([], localPlants);

    const loadPlantsData = async () => {
        let apiPlants = [];
        try {
            if (window.plantAPI?.request) {
                const response = await plantAPI.request(`/plants/all?page=1&limit=100&_=${Date.now()}`);
                if (response && response.plants) {
                    apiPlants = response.plants;
                }
            } else if (window.plantAPI?.getAllPlants) {
                const response = await plantAPI.getAllPlants(1, 100);
                if (response && response.plants) {
                    apiPlants = response.plants;
                }
            }

            if (apiPlants.length === 0) {
                const directResponse = await fetch(
                    `http://localhost:8080/api/plants/all?page=1&limit=100&_=${Date.now()}`,
                    { cache: 'no-store' }
                );
                if (directResponse.ok) {
                    const data = await directResponse.json();
                    if (data && data.plants) {
                        apiPlants = data.plants;
                    }
                }
            }
        } catch (error) {
            console.warn('API plants load failed, using local data.', error);
        }

        return mergePlants(apiPlants, localPlants);
    };

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

    if (basePlants.length > 0) {
        displayPlants(basePlants);
    }

    const mergedPlants = await loadPlantsData();
    if (mergedPlants.length > 0) {
        basePlants = mergedPlants;
        const activeFilter = categoryFilterTop?.value || categoryFilterScroll?.value || '';
        syncAndFilter(activeFilter, 'api');
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
