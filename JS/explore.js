// ===== Explore Page Functionality =====

document.addEventListener('DOMContentLoaded', async function() {
    // Show loading UI
    if (typeof LoadingUI !== 'undefined') {
        LoadingUI.show();
    }

    const plantsGrid = document.getElementById('plantsGrid');
    const categoryFilterTop = document.getElementById('categoryFilterTop');
    const categoryFilterScroll = document.getElementById('categoryFilterScroll');
    const BOOKMARKS_KEY = 'plant08_bookmarks_v1';

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

        // Use document fragment for better performance
        const fragment = document.createDocumentFragment();
        
        plantsToDisplay.forEach(plant => {
            const imagePath = typeof getPlantImagePath !== 'undefined' 
                ? getPlantImagePath(plant.name) 
                : 'Pics/default-plant.svg';
            
            const card = document.createElement('div');
            card.className = 'plant-card';
            card.dataset.plantId = plant.id;
            
            const bookmarkBadge = bookmarkedIds.has(String(plant.id)) 
                ? '<span class="bookmark-badge" title="Bookmarked">★</span>' 
                : '';
            
            card.innerHTML = `
                ${bookmarkBadge}
                <div class="plant-image">
                    <img src="${imagePath}" alt="${plant.name}" onerror="this.src='Pics/default-plant.svg'">
                </div>
                <div class="plant-info">
                    <div class="plant-name">${plant.name.replace(/\s*\(.*?\)\s*/g, '')}</div>
                    <div class="plant-category">${plant.category || 'Other'}</div>
                    <button class="plant-btn" data-id="${plant.id}">
                        Select Plant
                    </button>
                </div>
            `;
            
            fragment.appendChild(card);
        });

        // Clear and append all at once
        plantsGrid.innerHTML = '';
        plantsGrid.appendChild(fragment);

        // Add event listeners after all elements are added
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

        document.querySelectorAll('.plant-image').forEach(image => {
            image.addEventListener('click', function() {
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

    // Display local plants first (non-blocking with requestAnimationFrame)
    if (basePlants.length > 0) {
        requestAnimationFrame(() => {
            displayPlants(basePlants);
        });
    }

    // Load API data asynchronously
    const mergedPlants = await loadPlantsData();
    if (mergedPlants.length > 0) {
        basePlants = mergedPlants;
        const activeFilter = categoryFilterTop?.value || categoryFilterScroll?.value || '';
        // Use requestAnimationFrame to defer rendering
        requestAnimationFrame(() => {
            syncAndFilter(activeFilter, 'api');
        });
    }

    // Hide loading UI after a minimum display time to ensure smooth transition
    if (typeof LoadingUI !== 'undefined') {
        // Wait at least 500ms for smooth perception
        setTimeout(() => {
            LoadingUI.hide();
        }, 500);
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
