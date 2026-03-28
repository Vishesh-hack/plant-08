let currentPlant = null;

document.addEventListener('DOMContentLoaded', function () {
    initializePage();
    initializeScrollHeader();
});

function initializePage() {
    const plantId = sessionStorage.getItem('selectedPlantId');

    if (!plantId || !GUIDE_DATA[plantId]) {
        window.location.href = 'explore.html';
        return;
    }

    currentPlant = { ...GUIDE_DATA[plantId], id: plantId };

    document.getElementById('scrollPlantName').textContent = currentPlant.name;

    populateHeroSection();
    populateProfileSections();
}

function initializeScrollHeader() {
    const header = document.querySelector('.header');
    const scrollHeader = document.querySelector('.scroll-header');

    window.addEventListener('scroll', function () {
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
}

function populateHeroSection() {
    const category = getCategory(currentPlant.name);

    document.getElementById('plantName').textContent = currentPlant.name;
    document.getElementById('plantCategory').textContent = category;
    document.getElementById('plantOverview').textContent = currentPlant.overview;
}

function populateProfileSections() {
    const profile = getProfileForPlant(currentPlant);

    document.getElementById('profileTitle').textContent = `${currentPlant.name} Detailed Profile`;
    document.getElementById('profileSubtitle').textContent = profile.subtitle;

    renderQuickFacts(profile.quickFacts);
    renderParagraphs('introContent', profile.intro);
    document.getElementById('distributionGlobal').textContent = profile.distributionGlobal;
    renderChipList('distributionIndia', profile.indiaStates);
    renderConditions(profile.conditions);
    renderSeasons(profile.seasons);
    renderHabits(profile.habits);
    renderBulletList('varietyList', profile.varieties);
    renderBulletList('useList', profile.uses);
    renderBulletList('riskList', profile.risks);
    document.getElementById('briefSummary').textContent = profile.brief;
}

function getProfileForPlant(plant) {
    const profileFromData = window.DETAILS_DATA?.[plant.name];
    if (profileFromData) {
        return profileFromData;
    }

    const category = getCategory(plant.name);

    return {
        subtitle: 'Expanded plant profile will be added soon for this crop.',
        quickFacts: [
            { label: 'Plant Name', value: plant.name },
            { label: 'Category', value: category },
            { label: 'Scientific Name', value: 'To be added' },
            { label: 'Local Name', value: 'To be added' }
        ],
        intro: [plant.overview || 'Basic overview is currently available from the guide data.'],
        distributionGlobal: 'Detailed distribution notes are planned in the next update.',
        indiaStates: ['Data pending'],
        conditions: [
            {
                title: 'Stage-Based Basics',
                items: [
                    { label: 'Soil', value: getStageValue(plant, 'soil') },
                    { label: 'Water', value: getStageValue(plant, 'water') },
                    { label: 'Sunlight', value: getStageValue(plant, 'sunlight') },
                    { label: 'Temperature', value: getStageValue(plant, 'temperature') }
                ]
            }
        ],
        seasons: [
            {
                name: 'Season Information',
                sowing: 'To be added',
                transplanting: 'To be added',
                note: 'Ask to populate this crop next and the full local season chart will be added.'
            }
        ],
        habits: [
            {
                title: 'Growth Pattern',
                description: 'Detailed growth habit notes are pending for this plant.'
            }
        ],
        varieties: ['Variety list pending for this plant.'],
        uses: ['Use cases will be expanded when this profile is prioritized.'],
        risks: ['Risk and pest matrix will be added in the extended profile.'],
        brief: 'Core guide data remains active. Extended profile content can be added plant-by-plant.'
    };
}

function getStageValue(plant, key) {
    return (
        plant?.stages?.seed?.[key] ||
        plant?.stages?.seedling?.[key] ||
        plant?.stages?.tree?.[key] ||
        'To be added'
    );
}

function renderQuickFacts(facts) {
    const target = document.getElementById('quickFactsGrid');
    target.innerHTML = facts
        .map(
            (fact) =>
                `<article class="fact-card"><span class="label">${fact.label}</span><p class="value">${fact.value}</p></article>`
        )
        .join('');
}

function renderParagraphs(targetId, paragraphs) {
    const target = document.getElementById(targetId);
    target.innerHTML = paragraphs.map((text) => `<p>${text}</p>`).join('');
}

function renderChipList(targetId, values) {
    const target = document.getElementById(targetId);
    target.innerHTML = values.map((value) => `<li>${value}</li>`).join('');
}

function renderConditions(groups) {
    const target = document.getElementById('conditionsGrid');

    target.innerHTML = groups
        .map((group) => {
            const list = group.items
                .map((item) => `<li><strong>${item.label}:</strong> ${item.value}</li>`)
                .join('');

            return `<article class="condition-card"><h4>${group.title}</h4><ul>${list}</ul></article>`;
        })
        .join('');
}

function renderSeasons(seasons) {
    const target = document.getElementById('seasonGrid');

    target.innerHTML = seasons
        .map(
            (season) =>
                `<article class="season-card"><h4>${season.name}</h4><p><strong>Sowing:</strong> ${season.sowing}</p><p><strong>Transplanting:</strong> ${season.transplanting}</p><p>${season.note}</p></article>`
        )
        .join('');
}

function renderHabits(habits) {
    const target = document.getElementById('habitCards');

    target.innerHTML = habits
        .map((habit) => `<article class="habit-card"><h4>${habit.title}</h4><p>${habit.description}</p></article>`)
        .join('');
}

function renderBulletList(targetId, values) {
    const target = document.getElementById(targetId);
    target.innerHTML = values.map((value) => `<li>${value}</li>`).join('');
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
