// ===== Stage Selection Page Functionality =====

document.addEventListener('DOMContentLoaded', function() {
    const stageCards = document.querySelectorAll('.stage-card');
    const selectedPlantName = document.getElementById('selectedPlantName');
    const plantNameSpan = document.getElementById('plantNameSpan');
    
    // Get selected plant from session storage
    const plantId = sessionStorage.getItem('selectedPlantId');
    const plantName = sessionStorage.getItem('selectedPlantName');
    
    // If no plant selected, redirect to home
    if (!plantId || !plantName) {
        window.location.href = 'index.html';
        return;
    }
    
    // Display plant name
    selectedPlantName.textContent = plantName;
    plantNameSpan.textContent = plantName;
    
    let selectedStage = null;
    
    // Stage selection logic
    stageCards.forEach(card => {
        card.addEventListener('click', function() {
            const stage = this.dataset.stage;
            
            // Remove previous selection
            stageCards.forEach(c => c.classList.remove('selected'));
            
            // Add selection to clicked card
            this.classList.add('selected');
            selectedStage = stage;
            
            // Store selection in session
            sessionStorage.setItem('selectedStage', stage);
            
            // Auto-navigate to guide page after selection
            setTimeout(() => {
                window.location.href = `guide.html?plant=${plantId}&stage=${stage}`;
            }, 300);
        });
    });
    
    // Optional: Allow keyboard navigation
    document.addEventListener('keypress', function(e) {
        if (e.key === '1' || e.key === '2' || e.key === '3') {
            const cardIndex = parseInt(e.key) - 1;
            if (stageCards[cardIndex]) {
                stageCards[cardIndex].click();
            }
        }
    });
});
