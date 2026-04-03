document.addEventListener('DOMContentLoaded', function() {
    const BOOKMARKS_KEY = 'plant08_bookmarks_v1';

    const readBookmarks = () => {
        try {
            const raw = localStorage.getItem(BOOKMARKS_KEY);
            if (!raw) return [];
            const parsed = JSON.parse(raw);
            if (!Array.isArray(parsed)) return [];
            return parsed
                .filter(item => item && item.id && item.name)
                .map(item => ({
                    id: String(item.id),
                    name: String(item.name),
                    savedAt: item.savedAt || Date.now()
                }));
        } catch (error) {
            return [];
        }
    };

    const writeBookmarks = (bookmarks) => {
        localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
    };

    const getCurrentPlant = () => {
        const params = new URLSearchParams(window.location.search);
        let plantId = params.get('plant') || sessionStorage.getItem('selectedPlantId');
        if (!plantId) return null;
        plantId = String(plantId);

        let plantName = sessionStorage.getItem('selectedPlantName');
        if ((!plantName || plantName === 'undefined') && typeof GUIDE_DATA !== 'undefined' && GUIDE_DATA[plantId]) {
            plantName = GUIDE_DATA[plantId].name;
        }
        if (!plantName && typeof PLANTS !== 'undefined') {
            const match = PLANTS.find(plant => String(plant.id) === plantId);
            if (match) plantName = match.name;
        }
        if (!plantName) return null;

        return {
            id: plantId,
            name: plantName
        };
    };

    const createOverlay = () => {
        const overlay = document.createElement('div');
        overlay.className = 'bookmarks-overlay';
        overlay.innerHTML = `
            <div class="bookmarks-panel" role="dialog" aria-modal="true" aria-label="Bookmarks">
                <div class="bookmarks-header">
                    <h2 class="bookmarks-title">Saved Bookmarks</h2>
                    <button class="bookmarks-close" type="button" aria-label="Close bookmarks">&times;</button>
                </div>
                <ul class="bookmarks-list"></ul>
                <div class="bookmarks-empty">No bookmarks yet. Save plants from detail, stage, or guide pages.</div>
            </div>
        `;
        document.body.appendChild(overlay);
        return overlay;
    };

    const overlay = createOverlay();
    const listEl = overlay.querySelector('.bookmarks-list');
    const emptyEl = overlay.querySelector('.bookmarks-empty');

    const renderBookmarks = () => {
        const bookmarks = readBookmarks().sort((a, b) => b.savedAt - a.savedAt);
        if (bookmarks.length === 0) {
            listEl.innerHTML = '';
            emptyEl.style.display = 'block';
            return;
        }

        emptyEl.style.display = 'none';
        listEl.innerHTML = bookmarks
            .map((bookmark) => `
                <li class="bookmarks-item" data-id="${bookmark.id}">
                    <span class="bookmarks-name">${bookmark.name}</span>
                    <div class="bookmarks-actions">
                        <button class="bookmark-link-btn" type="button" data-action="open">Open Detail</button>
                        <button class="bookmark-delete-btn" type="button" data-action="delete">Delete</button>
                    </div>
                </li>
            `)
            .join('');
    };

    const openOverlay = () => {
        renderBookmarks();
        overlay.classList.add('visible');
        document.body.style.overflow = 'hidden';
    };

    const closeOverlay = () => {
        overlay.classList.remove('visible');
        document.body.style.overflow = '';
    };

    const syncAddBookmarkButtons = () => {
        const currentPlant = getCurrentPlant();
        const bookmarks = readBookmarks();
        const isBookmarked = currentPlant
            ? bookmarks.some(item => item.id === currentPlant.id)
            : false;

        document.querySelectorAll('.add-bookmark-btn').forEach((button) => {
            if (isBookmarked) {
                button.classList.add('added');
                button.textContent = 'Bookmarked';
            } else {
                button.classList.remove('added');
                button.textContent = 'Add Bookmark';
            }
        });
    };

    const toggleBookmark = () => {
        const currentPlant = getCurrentPlant();
        if (!currentPlant) return;

        const bookmarks = readBookmarks();
        const existingIndex = bookmarks.findIndex(item => item.id === currentPlant.id);

        if (existingIndex >= 0) {
            bookmarks.splice(existingIndex, 1);
        } else {
            bookmarks.unshift({
                id: currentPlant.id,
                name: currentPlant.name,
                savedAt: Date.now()
            });
        }

        writeBookmarks(bookmarks);
        syncAddBookmarkButtons();
        if (overlay.classList.contains('visible')) {
            renderBookmarks();
        }
    };

    overlay.addEventListener('click', (event) => {
        const panel = overlay.querySelector('.bookmarks-panel');
        if (!panel.contains(event.target)) {
            closeOverlay();
            return;
        }

        if (event.target.classList.contains('bookmarks-close')) {
            closeOverlay();
            return;
        }

        const actionButton = event.target.closest('button[data-action]');
        if (!actionButton) return;

        const item = actionButton.closest('.bookmarks-item');
        if (!item) return;
        const plantId = item.dataset.id;
        const bookmarks = readBookmarks();
        const matched = bookmarks.find(entry => entry.id === plantId);

        if (actionButton.dataset.action === 'delete') {
            const updated = bookmarks.filter(entry => entry.id !== plantId);
            writeBookmarks(updated);
            renderBookmarks();
            syncAddBookmarkButtons();
            return;
        }

        if (actionButton.dataset.action === 'open' && matched) {
            sessionStorage.setItem('selectedPlantId', matched.id);
            sessionStorage.setItem('selectedPlantName', matched.name);
            window.location.href = `detail.html?plant=${encodeURIComponent(matched.id)}`;
        }
    });

    document.querySelectorAll('.bookmarks-open-btn').forEach((button) => {
        button.addEventListener('click', openOverlay);
    });

    const scrollHeader = document.querySelector('.scroll-header');
    if (scrollHeader && !scrollHeader.querySelector('.bookmarks-open-btn-scroll')) {
        const scrollTrigger = document.createElement('button');
        scrollTrigger.type = 'button';
        scrollTrigger.className = 'bookmarks-open-btn bookmarks-open-btn-scroll';
        scrollTrigger.textContent = 'Bookmarks';
        scrollHeader.appendChild(scrollTrigger);
        scrollTrigger.addEventListener('click', openOverlay);
    }

    document.querySelectorAll('.add-bookmark-btn').forEach((button) => {
        button.addEventListener('click', () => toggleBookmark());
    });

    syncAddBookmarkButtons();

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && overlay.classList.contains('visible')) {
            closeOverlay();
        }
    });
});
