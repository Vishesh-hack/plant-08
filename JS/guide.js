// ===== Guide Page Functionality =====

document.addEventListener('DOMContentLoaded', function() {
    // Show loading UI
    if (typeof LoadingUI !== 'undefined') {
        LoadingUI.show();
    }

    // Get plant and stage from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const plantId = urlParams.get('plant');
    const stage = urlParams.get('stage');
    
    // Get from session storage if not in URL
    const sessionPlantId = sessionStorage.getItem('selectedPlantId');
    const sessionStage = sessionStorage.getItem('selectedStage');
    
    const finalPlantId = plantId || sessionPlantId;
    const finalStage = stage || sessionStage;
    
    // Check if guide data exists
    if (!GUIDE_DATA || !GUIDE_DATA[finalPlantId]) {
        window.location.href = 'index.html';
        return;
    }
    
    if (!finalStage) {
        window.location.href = 'index.html';
        return;
    }
    
    const guideData = GUIDE_DATA[finalPlantId];
    const plantName = guideData.name;
    
    // Clean plant name (remove brackets)
    const cleanPlantName = plantName.replace(/\s*\(.*?\)\s*/g, '');
    
    const stageData = guideData.stages[finalStage];
    if (!stageData) {
        window.location.href = 'index.html';
        return;
    }
    
    const stageName = finalStage.charAt(0).toUpperCase() + finalStage.slice(1);
    
    // Defer rendering to not block animation
    requestAnimationFrame(() => {
        // Set page title and headers
        const plantTitle = document.getElementById('plantTitle');
        const stageSubtitle = document.getElementById('stageSubtitle');
        if (plantTitle) {
            plantTitle.textContent = cleanPlantName;
        }
        if (stageSubtitle) {
            stageSubtitle.textContent = `Care guide for the ${stageName} stage`;
        }
        
        // Populate care sections
        populateCareSection('soilInfo', stageData.soil);
        populateCareSection('waterInfo', stageData.water);
        populateCareSection('sunlightInfo', stageData.sunlight);
        populateCareSection('environmentInfo', stageData.environment);
        populateCareSection('temperatureInfo', stageData.temperature);
        populateCareSection('pestInfo', stageData.pest);

        // Add hover expansion behavior for care cards
        const careGrid = document.querySelector('.care-grid');
        const careCards = Array.from(document.querySelectorAll('.care-card'));

        if (careGrid && careCards.length > 0) {
            const setActiveCard = (activeCard) => {
                careGrid.classList.add('is-interactive');
                careCards.forEach((card) => {
                    const isActive = card === activeCard;
                    card.classList.toggle('active', isActive);
                    card.classList.toggle('collapsed', !isActive);
                });
            };

            const clearActiveCard = () => {
                careGrid.classList.remove('is-interactive');
                careCards.forEach((card) => {
                    card.classList.remove('active', 'collapsed');
                });
            };

            const isCardActive = (card) => card.classList.contains('active');

            careCards.forEach((card) => {
                card.addEventListener('click', () => {
                    if (isCardActive(card)) {
                        clearActiveCard();
                    } else {
                        setActiveCard(card);
                    }
                });
            });

            document.addEventListener('click', (event) => {
                if (!careGrid.contains(event.target)) {
                    clearActiveCard();
                }
            });
        }
        
        // Add tips
        const tips = PLANT_TIPS[finalPlantId]?.general || [];
        const tipsContent = document.getElementById('tipsContent');
        if (tipsContent && tips.length > 0) {
            tipsContent.innerHTML = tips.map(tip => `<div class="tip-item">${tip}</div>`).join('');
        } else if (tipsContent) {
            tipsContent.innerHTML = '<div class="tip-item">Check back for more tips!</div>';
        }
        
        // Update stage button functionality
        const stageBackLink = document.querySelector('a[href="stage.html"]');
        if (stageBackLink) {
            stageBackLink.href = `stage.html?plant=${finalPlantId}`;
        }
        
        // Set scroll header plant name
        const scrollPlantName = document.getElementById('scrollPlantName');
        if (scrollPlantName) {
            scrollPlantName.textContent = cleanPlantName;
        }
    });
    
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

    // Hide loading UI with minimum delay for smooth animation
    if (typeof LoadingUI !== 'undefined') {
        setTimeout(() => {
            LoadingUI.hide();
        }, 500);
    }
});

// Helper function to populate care sections
function populateCareSection(elementId, content) {
    const element = document.getElementById(elementId);
    if (content) {
        const bullets = buildBulletPoints(elementId, content);
        element.innerHTML = `<ul>${bullets.map(item => `<li>${item}</li>`).join('')}</ul>`;
    } else {
        element.innerHTML = '<p>Information coming soon!</p>';
    }
}

function buildBulletPoints(sectionId, content) {
    const sectionLabel = sectionId.replace(/Info$/, '').replace(/([a-z])([A-Z])/g, '$1 $2');
    const cleaned = content.trim().replace(/\.$/, '');
    const clauses = cleaned
        .split(/(?:,|;|\band\b|\bwhile\b|\bbut\b|\bso\b|\bthen\b)/i)
        .map(part => part.trim())
        .filter(Boolean);

    const sentenceParts = cleaned
        .split(/\.(?=\s|$)/)
        .map(part => part.trim())
        .filter(Boolean);

    const basePoints = clauses.length >= 2 ? clauses : sentenceParts;
    const normalized = basePoints
        .map(part => part.replace(/^and\s+/i, '').trim())
        .filter(Boolean);

    const bullets = normalized.slice(0, 4);

    while (bullets.length < 4) {
        if (bullets.length === 0) {
            bullets.push(`Follow the selected ${sectionLabel} guidance closely.`);
        } else if (bullets.length === 1) {
            bullets.push(`Keep the ${sectionLabel} conditions steady for this stage.`);
        } else if (bullets.length === 2) {
            bullets.push(`Avoid sudden changes that could affect the ${sectionLabel.toLowerCase()}.`);
        } else {
            bullets.push(`Use this ${sectionLabel.toLowerCase()} routine consistently for the selected plant stage.`);
        }
    }

    return bullets.slice(0, 4);
}

// Optional: Add rating or feedback functionality
function toggleAccordion(element) {
    element.classList.toggle('active');
}
