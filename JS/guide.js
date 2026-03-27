// ===== Guide Page Functionality =====

document.addEventListener('DOMContentLoaded', function() {
    // Get plant and stage from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const plantId = urlParams.get('plant');
    const stage = urlParams.get('stage');
    
    // Get from session storage if not in URL
    const sessionPlantId = sessionStorage.getItem('selectedPlantId');
    const sessionStage = sessionStorage.getItem('selectedStage');
    
    const finalPlantId = plantId || sessionPlantId;
    const finalStage = stage || sessionStage;
    
    // Find plant data
    const plant = PLANTS.find(p => p.id.toString() === finalPlantId);
    
    if (!plant || !GUIDE_DATA[finalPlantId] || !finalStage) {
        window.location.href = 'index.html';
        return;
    }
    
    const guideData = GUIDE_DATA[finalPlantId];
    const stageData = guideData.stages[finalStage];
    const stageName = finalStage.charAt(0).toUpperCase() + finalStage.slice(1);
    
    // Set page title and headers
    document.getElementById('plantTitle').textContent = plant.name;
    document.getElementById('stageSubtitle').textContent = `Care guide for the ${stageName} stage`;
    
    // Set overview
    document.getElementById('plantOverview').textContent = guideData.overview;
    
    // Populate care sections
    populateCareSection('soilInfo', stageData.soil);
    populateCareSection('waterInfo', stageData.water);
    populateCareSection('sunlightInfo', stageData.sunlight);
    populateCareSection('environmentInfo', stageData.environment);
    populateCareSection('temperatureInfo', stageData.temperature);
    populateCareSection('pestInfo', stageData.pest);
    
    // Add tips
    const tips = PLANT_TIPS[finalPlantId]?.general || [];
    const tipsContent = document.getElementById('tipsContent');
    if (tips.length > 0) {
        tipsContent.innerHTML = tips.map(tip => `<div class="tip-item">${tip}</div>`).join('');
    } else {
        tipsContent.innerHTML = '<div class="tip-item">Check back for more tips!</div>';
    }
    
    // Update stage button functionality
    const stageBackLink = document.querySelector('a[href="stage.html"]');
    if (stageBackLink) {
        stageBackLink.href = `stage.html?plant=${finalPlantId}`;
    }
    
    // Set scroll header plant name
    const scrollPlantName = document.getElementById('scrollPlantName');
    scrollPlantName.textContent = plant.name;
    
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

// Helper function to populate care sections
function populateCareSection(elementId, content) {
    const element = document.getElementById(elementId);
    if (content) {
        element.innerHTML = `<p>${content}</p>`;
    } else {
        element.innerHTML = '<p>Information coming soon!</p>';
    }
}

// Optional: Add rating or feedback functionality
function toggleAccordion(element) {
    element.classList.toggle('active');
}
