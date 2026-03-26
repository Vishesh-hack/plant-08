// ===== Plant Detail Page - Simple Scroll Layout =====
// Clean plant information display

let currentPlant = null;

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

document.addEventListener('DOMContentLoaded', function() {
    initializeScroll();
});

function initializeScroll() {
    const plantId = sessionStorage.getItem('selectedPlantId');
    
    if (!plantId || !GUIDE_DATA[plantId]) {
        window.location.href = 'explore.html';
        return;
    }

    currentPlant = GUIDE_DATA[plantId];
    currentPlant.id = plantId;
    
    // Populate all sections
    populateHeroSection();
    populateInfoSection();
    populateAppearanceSection();
    populateBenefitsSection();
    populateStagesSection();
    populateCareSection();
}

function populateHeroSection() {
    const icon = plantIcons[currentPlant.name] || '🌱';
    const category = getCategory(currentPlant.name);
    
    document.getElementById('plantName').textContent = currentPlant.name;
    document.getElementById('plantCategory').textContent = category;
    document.getElementById('plantOverview').textContent = currentPlant.overview;
}

function populateInfoSection() {
    const seedStage = currentPlant.stages?.seed;
    
    // Get more detailed information
    const infoData = {
        'Tomato': {
            light: '6-8 hours minimum daily sunlight (8+ hours preferred)',
            temp: '65-75°F during day, 55-65°F at night (warmth lover)',
            water: 'Keep soil consistently moist, 1-1.5 inches per week',
            origin: 'Central & South America (Peru & Chile origin)'
        },
        'Basil': {
            light: '6-8 hours of direct sunlight daily (prefers warmth)',
            temp: '70-80°F optimal (dislikes temperatures below 50°F)',
            water: 'Keep soil moist but not waterlogged, water when top inch dry',
            origin: 'Central Africa & India (tropical herb)'
        },
        'Rose': {
            light: '6+ hours of direct sunlight daily (morning sun preferred)',
            temp: '60-75°F during growing season for best blooms',
            water: 'Deep watering 1-2 inches per week at soil level',
            origin: 'Persia, Mediterranean & Europe (ancient cultivar)'
        },
        'Sunflower': {
            light: '6+ hours direct sun (sun-following behavior when young)',
            temp: '70-78°F optimal for germination and growth',
            water: 'Moderate - 1-1.5 inches per week, deeper roots reduce frequency',
            origin: 'North America (Mexico/Peru region origin)'
        },
        'Mint': {
            light: '4-6 hours of sunlight (tolerates partial shade)',
            temp: '60-75°F (hardy perennial, survives cold winters)',
            water: 'Keep moist but not soggy, prefers consistently damp soil',
            origin: 'Mediterranean & Asia (temperate regions)'
        },
        'Lavender': {
            light: '6+ hours of direct sunlight daily (sun lover)',
            temp: '70-75°F growing season, dormant in winter below 50°F',
            water: 'Low water needs - allow to dry between waterings',
            origin: 'Mediterranean Europe (drought adapted)'
        }
    };

    const plantInfo = infoData[currentPlant.name] || {
        light: seedStage?.sunlight || 'Varies by growth stage',
        temp: seedStage?.temperature || 'Check growth stages',
        water: seedStage?.water || 'Keep consistently moist',
        origin: getOriginInfo(currentPlant.name)
    };

    document.getElementById('lightInfo').textContent = plantInfo.light;
    document.getElementById('tempInfo').textContent = plantInfo.temp;
    document.getElementById('waterInfo').textContent = plantInfo.water;
    document.getElementById('originInfo').textContent = plantInfo.origin;
}

function populateAppearanceSection() {
    const appearanceData = {
        'Tomato': {
            height: '1-3 feet (indeterminate varieties grow 6-10+ feet)',
            spread: '1-2 feet',
            leaf: 'Compound feather-like leaves with serrated edges',
            color: 'Red, yellow, pink, or orange fruits with green foliage',
            description: 'Tomato plants grow as bushy or vine-like plants depending on variety. Indeterminate types grow continuously and need staking. The stems are somewhat woody, and sticky hairs cover the plant. Flowers are small yellow blooms clustered on the stem.',
            tips: 'Determinate varieties are compact and fruit all at once. Indeterminate types produce fruit throughout the season. Remove suckers (shoots between main stem and branches) for better fruit production.',
            companions: 'Basil, carrots, parsley, marigolds, garlic. Avoid brassicas.'
        },
        'Basil': {
            height: '1-2 feet depending on variety',
            spread: '1 foot',
            leaf: 'Broad, soft, highly fragrant green leaves',
            color: 'Green foliage with delicate white, purple, or pink flowers',
            description: 'Basil is a warm-season annual with soft stems and aromatic leaves. Sweet basil has larger leaves than Thai varieties. The plant grows bushy and flowers appear on terminal spikes. Leaves become stronger in flavor as temperatures warm.',
            tips: 'Pinch off flower buds to extend leaf production. Regular harvesting keeps the plant bushy. Best flavor when leaves are harvested in morning after dew dries.',
            companions: 'Tomatoes, peppers, oregano. Excellent for repelling flies and mosquitoes.'
        },
        'Rose': {
            height: '1-6 feet depending on variety (climbing varieties reach 12-20 feet)',
            spread: '2-4 feet',
            leaf: 'Compound green leaflets with fine serrated edges',
            color: 'Red, pink, white, yellow, coral, or bi-color flowers; green glossy foliage',
            description: 'Roses are deciduous or evergreen woody shrubs with thorny stems. Flowers have multiple petals arranged in various forms (single, double, quartered). Comes in miniature, shrub, climbing, and exhibition types. Fragrance varies widely.',
            tips: 'Deadhead spent blooms to encourage continuous flowering. Prune in early spring. Provide at least 6 hours of direct sunlight daily. Good air circulation prevents disease.',
            companions: 'Lavender, catmint, salvia, garlic, parsley. Avoid planting with oleander or walnut.'
        },
        'Sunflower': {
            height: '2-12 feet depending on variety (dwarf varieties 1-2 feet)',
            spread: '1-2 feet',
            leaf: 'Large, coarse, heart-shaped leaves with rough texture',
            color: 'Bright yellow, orange, red, or bi-color flowers; green stems and foliage',
            description: 'Sunflowers are tall annual plants with thick, sturdy stems covered in coarse hairs. Large flower heads (3-12 inches) follow the sun daily when young. Seeds develop inside the yellow or bronze disk. Giant varieties can reach impressive heights.',
            tips: 'Tall varieties need support in windy areas. Plant seeds directly in soil after frost danger. Flowers attract pollinators and birds. Seeds mature in 70-100 days.',
            companions: 'Corn, beans, squash (the Three Sisters). Beneficial for bees and butterflies. Repels some pests.'
        },
        'Mint': {
            height: '1-3 feet depending on variety',
            spread: 'Spreads aggressively via underground runners',
            leaf: 'Small to medium oval leaves with serrated edges, highly aromatic',
            color: 'Green or purple-tinged foliage with delicate purple, pink, or white flowers',
            description: 'Mint is a vigorous perennial often grown as annual in containers. Forms dense mats of aromatic foliage. Small flowers appear in terminal spikes. Extremely aromatic - the whole plant smells distinctly minty.',
            tips: 'Contain in pots as it spreads rapidly and can overwhelm gardens. Pinch regularly to promote bushiness. Cut before flowering for best leaf flavor. Winter hardy in most climates.',
            companions: 'Excellent companion plant but plant in containers to prevent takeover. Attracts beneficial insects and repels pests.'
        },
        'Lavender': {
            height: '1-3 feet depending on variety',
            spread: '2-3 feet',
            leaf: 'Fine, narrow, silvery-green needle-like foliage',
            color: 'Purple, blue, pink, or white fragrant flower spikes; silvery-green foliage',
            description: 'Lavender is a semi-woody Mediterranean shrub with aromatic needle-like leaves and tubular flowers in dense spikes. Extremely fragrant, attracts pollinators. Foliage remains attractive year-round. Most varieties are evergreen.',
            tips: 'Requires excellent drainage - won\'t tolerate wet feet. Thrives in poor soil and full sun. Prune after flowering to maintain shape. Very drought tolerant once established.',
            companions: 'Roses, catmint, salvia, thyme. Attracts beneficial insects and repels moths and fleas.'
        }
    };

    const plantAppearance = appearanceData[currentPlant.name] || {
        height: 'Varies by growth stage',
        spread: 'Varies by growth stage',
        leaf: 'Check growth stages',
        color: 'Check growth stages',
        description: 'This plant develops distinctive characteristics throughout its growth stages. See the Growth Stages section for detailed information at each stage.',
        tips: 'Monitor regularly and adjust care based on plant response.',
        companions: 'Varies - research specific companion planting for this variety.'
    };

    document.getElementById('heightInfo').textContent = plantAppearance.height;
    document.getElementById('spreadInfo').textContent = plantAppearance.spread;
    document.getElementById('leafInfo').textContent = plantAppearance.leaf;
    document.getElementById('colorInfo').textContent = plantAppearance.color;
    document.getElementById('appearanceDesc').textContent = plantAppearance.description;
    
    // Add tips and companions if elements exist
    const tipsEl = document.getElementById('plantTips');
    const companionsEl = document.getElementById('plantCompanions');
    if (tipsEl) tipsEl.textContent = plantAppearance.tips;
    if (companionsEl) companionsEl.textContent = plantAppearance.companions;
}

function populateBenefitsSection() {
    const benefitsData = {
        'Tomato': [
            'Rich in lycopene - a powerful antioxidant linked to cancer prevention',
            'Excellent source of vitamin C, supporting immune system health',
            'High in potassium for heart health and blood pressure regulation',
            'Contains folate beneficial for heart disease prevention',
            'Low in calories (27 cal per 100g) but highly nutritious',
            'Fresh homegrown tomatoes have 3x more flavor than store-bought',
            'Perfect for fresh salads, cooking, sauces, and preservation',
            'Growing technique provides exercise and gardening skills'
        ],
        'Basil': [
            'Packed with essential oils (eugenol) with strong antibacterial properties',
            'Rich in vitamins A, K, and antioxidants for overall wellness',
            'Anti-inflammatory compounds may help reduce joint pain and swelling',
            'Supports digestive health when used as a culinary herb',
            'Fresh flavoring for Italian, Thai, and Asian cuisines',
            'Aromatic properties provide natural pest deterrent',
            'Attracts honeybees and beneficial pollinators to gardens',
            'Easy to grow on windowsills year-round for fresh herb supply'
        ],
        'Rose': [
            'Beautiful ornamental flowers perfect for home decoration and arrangements',
            'Symbolizes love, beauty, and elegance - universal gift of appreciation',
            'Rose petals edible and used in culinary applications and teas',
            'Rose hips rich in vitamin C for immune support',
            'Attracts butterflies, hummingbirds, and beneficial insects',
            'Cut flowers have lengthy vase life (10-14 days)',
            'Therapy shown to reduce stress and improve mental health',
            'Creates stunning garden focal points and natural fragrance'
        ],
        'Sunflower': [
            'Seeds are nutritional powerhouse with healthy omega-6 fatty acids',
            'Rich in vitamin E, selenium, and essential minerals',
            'Beautiful tall plants excellent for cut flowers and decoration',
            'Attracts bees, butterflies, and beneficial pollinators',
            'Seeds provide food for birds and wildlife',
            'Fast growing with visible daily progress (great for children)',
            'Used for oil production - a major global crop',
            'Companion planting benefits corn and beans'
        ],
        'Mint': [
            'Aids digestion and relieves stomach discomfort and bloating',
            'Natural breath freshener with antimicrobial properties',
            'Soothing for headaches when consumed as tea',
            'Essential oils have cooling and refreshing properties',
            'Perfect for beverages, desserts, and savory dishes',
            'Repels mosquitoes, flies, and other common garden pests',
            'Perennial - provides fresh leaves for years once established',
            'Low maintenance and extremely cold hardy'
        ],
        'Lavender': [
            'Calming and relaxing properties support better sleep quality',
            'Essential oil widely used in aromatherapy for stress relief',
            'Antimicrobial properties useful for minor skin issues',
            'Beautiful purple flowers excellent for cut arrangements',
            'Highly fragrant - garden provides natural air freshening',
            'Attracts honeybees and beneficial parasitic wasps',
            'Extremely drought tolerant - perfect for water conservation',
            'Long blooming period provides months of visual interest'
        ]
    };

    const plantBenefits = benefitsData[currentPlant.name] || [
        'Provides fresh produce from your own garden',
        'Rewarding and meditative gardening experience',
        'Great learning opportunity for children about plant care',
        'Adds natural beauty and fragrance to your space',
        'Promotes sustainability and self-sufficiency',
        'Can be shared with family and friends',
        'Therapeutic connection with nature',
        'Reduces reliance on commercial products'
    ];

    const benefitsList = document.getElementById('benefitsList');
    benefitsList.innerHTML = plantBenefits.map(benefit => `<li>${benefit}</li>`).join('');
}

function populateStagesSection() {
    const stageNames = {
        'seed': '🌰 Seed',
        'seedling': '🌱 Seedling',
        'tree': '🌳 Mature',
        'flowering': '🌸 Flowering',
        'fruiting': '🍎 Fruiting'
    };

    let html = '';
    for (const [stageKey, stageData] of Object.entries(currentPlant.stages || {})) {
        html += `<div class="stage-card">
            <h4>${stageNames[stageKey] || stageKey}</h4>
            <p>Complete care guide available</p>
        </div>`;
    }

    document.getElementById('stagesTimeline').innerHTML = html;
}

function populateCareSection() {
    const stageNames = {
        'seed': '🌰 Seed Stage',
        'seedling': '🌱 Seedling Stage',
        'tree': '🌳 Mature Plant',
        'flowering': '🌸 Flowering Stage',
        'fruiting': '🍎 Fruiting Stage'
    };

    let html = '';
    for (const [stageKey, stageData] of Object.entries(currentPlant.stages || {})) {
        html += `<div class="care-stage">
            <h3>${stageNames[stageKey] || stageKey.charAt(0).toUpperCase() + stageKey.slice(1)}</h3>`;

        const icons = {
            'soil': '🌍',
            'water': '💧',
            'sunlight': '☀️',
            'environment': '🌡️',
            'temperature': '🌡️',
            'pest': '🐛'
        };

        for (const [key, value] of Object.entries(stageData)) {
            const label = key.charAt(0).toUpperCase() + key.slice(1);
            html += `<div class="care-item">
                <strong>${icons[key] || '→'} ${label}</strong>
                <p>${value}</p>
            </div>`;
        }
        html += `</div>`;
    }

    document.getElementById('careDetails').innerHTML = html;
}

function navigateToPlant(plantId) {
    sessionStorage.setItem('selectedPlantId', plantId);
    sessionStorage.setItem('selectedPlantName', GUIDE_DATA[plantId].name);
    location.reload();
}

function getCategory(name) {
    const vegetables = ['Tomato', 'Carrot', 'Cucumber', 'Bell Pepper', 'Broccoli', 'Spinach', 'Lettuce'];
    const herbs = ['Basil', 'Mint', 'Parsley', 'Thyme', 'Oregano', 'Sage', 'Chives'];
    const flowers = ['Rose', 'Sunflower', 'Tulip', 'Daffodil', 'Lavender', 'Daisy'];
    const fruits = ['Apple', 'Banana', 'Orange', 'Strawberry', 'Mango'];

    if (vegetables.includes(name)) return 'Vegetable';
    if (herbs.includes(name)) return 'Herb';
    if (flowers.includes(name)) return 'Flower';
    if (fruits.includes(name)) return 'Fruit';

    return 'Other';
}

function getOriginInfo(plantName) {
    const origins = {
        'Tomato': 'Central and South America',
        'Basil': 'Central Africa & India',
        'Rose': 'Persia & Europe',
        'Sunflower': 'North America',
        'Mint': 'Mediterranean & Asia',
        'Lavender': 'Mediterranean Europe',
        'Apple': 'Temperate regions worldwide',
        'Banana': 'Southeast Asia',
        'Orange': 'China & Southeast Asia',
        'Strawberry': 'Europe & North America',
        'Lettuce': 'Mediterranean region',
        'Carrot': 'Central Asia',
        'Cucumber': 'India & Southeast Asia',
        'Tulip': 'Central Asia',
        'Daffodil': 'Mediterranean & China',
        'Thyme': 'Southern Europe & North Africa',
        'Oregano': 'Mediterranean region',
        'Bell Pepper': 'Central Mexico',
        'Broccoli': 'Italy (Calabria region)',
        'Daisy': 'Temperate Europe',
        'Sage': 'Mediterranean region',
        'Chives': 'Siberia & China',
        'Parsley': 'Central Mediterranean',
        'Spinach': 'Central Asia',
        'Mango': 'South Asia'
    };
    return origins[plantName] || 'Various regions';
}
