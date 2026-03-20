// ===== Homepage Search Functionality =====

document.addEventListener('DOMContentLoaded', function() {
    const plantSearchInput = document.getElementById('plantSearch');
    const searchSuggestions = document.getElementById('searchSuggestions');
    const selectPlantBtn = document.getElementById('selectPlantBtn');
    
    let selectedPlantId = null;

    // Event listener for input - show suggestions
    plantSearchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        
        if (query.length === 0) {
            searchSuggestions.classList.remove('active');
            searchSuggestions.innerHTML = '';
            selectPlantBtn.disabled = true;
            selectedPlantId = null;
            return;
        }

        // Filter plants based on search query
        const filteredPlants = PLANTS.filter(plant => 
            plant.name.toLowerCase().includes(query)
        );

        if (filteredPlants.length === 0) {
            searchSuggestions.classList.remove('active');
            searchSuggestions.innerHTML = '<div class="suggestion-item" style="color: #999;">No plants found</div>';
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

        // Set the selected plant
        selectedPlantId = plantId;
        plantSearchInput.value = plantName;
        
        // Hide suggestions and enable button
        searchSuggestions.classList.remove('active');
        selectPlantBtn.disabled = false;

        // Optional: Store in session for next page
        sessionStorage.setItem('selectedPlantId', plantId);
        sessionStorage.setItem('selectedPlantName', plantName);
    });

    // Handle "Get Care Guide" button click
    selectPlantBtn.addEventListener('click', function() {
        if (selectedPlantId) {
            // Redirect to stage selection page
            window.location.href = 'stage.html';
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
                window.location.href = 'stage.html';
            }
        }
    });
});
