// ===== Homepage Search Functionality =====

document.addEventListener('DOMContentLoaded', function() {
    const plantSearchInput = document.getElementById('plantSearch');
    const searchSuggestions = document.getElementById('searchSuggestions');
    const selectPlantBtn = document.getElementById('selectPlantBtn');
    
    let selectedPlantId = null;
    const setSelectButtonVisibility = (isVisible) => {
        selectPlantBtn.style.display = isVisible ? 'inline-block' : 'none';
    };

    // Keep button hidden until a valid plant is selected.
    setSelectButtonVisibility(false);

    // Event listener for input - show suggestions
    plantSearchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        selectedPlantId = null;
        selectPlantBtn.disabled = true;
        setSelectButtonVisibility(false);
        
        if (query.length === 0) {
            searchSuggestions.classList.remove('active');
            searchSuggestions.innerHTML = '';
            return;
        }

        // Filter plants based on search query
        const filteredPlants = PLANTS.filter(plant => 
            plant.name.toLowerCase().includes(query)
        );

        if (filteredPlants.length === 0) {
            searchSuggestions.innerHTML = '<div class="suggestion-item" style="color: #999;">The Plant is not Available yet, it will be Added Soon</div>';
            searchSuggestions.classList.add('active');
            selectPlantBtn.disabled = true;
            selectedPlantId = null;
            return;
        }

        // Display suggestions
        searchSuggestions.innerHTML = filteredPlants.map(plant => 
            `<div class="suggestion-item" data-plant-id="${plant.id}" data-plant-name="${plant.name}">
                🌱 ${plant.name} <span style="font-size: 0.85em; color: #999;">- ${plant.category}</span>
            </div>`
        ).join('');
        searchSuggestions.classList.add('active');
    });

    // Event listener for suggestion selection
    searchSuggestions.addEventListener('click', function(e) {
        const suggestionItem = e.target.closest('.suggestion-item');
        if (!suggestionItem) return;

        const plantId = suggestionItem.dataset.plantId;
        const plantName = suggestionItem.dataset.plantName;
        if (!plantId || !plantName) {
            selectedPlantId = null;
            selectPlantBtn.disabled = true;
            setSelectButtonVisibility(false);
            return;
        }

        // Set the selected plant
        selectedPlantId = plantId;
        plantSearchInput.value = plantName;
        
        // Hide suggestions and enable button
        searchSuggestions.classList.remove('active');
        selectPlantBtn.disabled = false;
        setSelectButtonVisibility(true);

        // Optional: Store in session for next page
        sessionStorage.setItem('selectedPlantId', plantId);
        sessionStorage.setItem('selectedPlantName', plantName);
    });

    // Handle "Get Care Guide" button click
    selectPlantBtn.addEventListener('click', function() {
        if (selectedPlantId) {
            // Redirect to detail page
            window.location.href = 'detail.html';
        }
    });

    // Close suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            searchSuggestions.classList.remove('active');
        }
    });

    // Allow Enter key to select from input
    plantSearchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            // Get first matching plant if input text matches
            const query = this.value.trim().toLowerCase();
            const matchedPlant = PLANTS.find(plant => 
                plant.name.toLowerCase() === query
            );
            
            if (matchedPlant) {
                selectedPlantId = matchedPlant.id;
                sessionStorage.setItem('selectedPlantId', matchedPlant.id);
                sessionStorage.setItem('selectedPlantName', matchedPlant.name);
                window.location.href = 'detail.html';
            } else if (query.length > 0) {
                searchSuggestions.innerHTML = '<div class="suggestion-item" style="color: #999;">The Plant is not Available yet, it will be Added Soon </div>';
                searchSuggestions.classList.add('active');
                selectPlantBtn.disabled = true;
                selectedPlantId = null;
                setSelectButtonVisibility(false);
            }
        }
    });
});
