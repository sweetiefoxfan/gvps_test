// Main JavaScript for Gustavvasas Pluggsida
document.addEventListener('DOMContentLoaded', () => {
    // Register service worker for offline support
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                })
                .catch(error => {
                    console.log('ServiceWorker registration failed: ', error);
                });
        });
    }
    // DOM Elements
    const gamesGrid = document.getElementById('games-grid');
    const themeToggle = document.getElementById('theme-toggle');
    const customizeBtn = document.getElementById('customize-btn');
    const customizePanel = document.getElementById('customize-panel');
    const closeCustomize = document.getElementById('close-customize');
    const applyCustomize = document.getElementById('apply-customize');
    const gameSearch = document.getElementById('game-search');
    const searchBtn = document.getElementById('search-btn');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const themeOptions = document.querySelectorAll('.theme-option');
    const sizeOptions = document.querySelectorAll('.size-option');
    const bgOptions = document.querySelectorAll('.bg-option');
    const gameModal = document.getElementById('game-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalGameTitle = document.getElementById('modal-game-title');
    const modalGameFrame = document.getElementById('modal-game-frame');
    const modalGameDescription = document.getElementById('modal-game-description');
    const modalGameTags = document.getElementById('modal-game-tags');

    // State
    let currentTheme = 'dark';
    let currentSize = 'medium';
    let currentBg = 'gradient';
    let currentCategory = 'all';
    let searchQuery = '';

    // Initialize
    initTheme();
    loadGames();
    setupEventListeners();

    function initTheme() {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('gv-theme');
        const savedSize = localStorage.getItem('gv-size');
        const savedBg = localStorage.getItem('gv-bg');

        if (savedTheme) currentTheme = savedTheme;
        if (savedSize) currentSize = savedSize;
        if (savedBg) currentBg = savedBg;

        applyTheme();
        applySize();
        applyBackground();
    }

    function applyTheme() {
        // Remove all theme classes
        document.documentElement.classList.remove('theme-dark', 'theme-light', 'theme-neon', 'theme-retro');
        // Add current theme
        document.documentElement.classList.add(`theme-${currentTheme}`);

        // Update UI
        themeOptions.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === currentTheme);
        });

        // Save preference
        localStorage.setItem('gv-theme', currentTheme);
    }

    function applySize() {
        // Remove all size classes
        document.documentElement.classList.remove('size-small', 'size-medium', 'size-large');
        // Add current size
        document.documentElement.classList.add(`size-${currentSize}`);

        // Update UI
        sizeOptions.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.size === currentSize);
        });

        // Save preference
        localStorage.setItem('gv-size', currentSize);
    }

    function applyBackground() {
        // Remove all background classes
        document.documentElement.classList.remove('bg-gradient', 'bg-dark', 'bg-space', 'bg-abstract');
        // Add current background
        document.documentElement.classList.add(`bg-${currentBg}`);

        // Update UI
        bgOptions.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.bg === currentBg);
        });

        // Save preference
        localStorage.setItem('gv-bg', currentBg);
    }

    function setupEventListeners() {
        // Theme toggle
        themeToggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme();
            // Update icon
            themeToggle.querySelector('i').className =
                currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        });

        // Customize panel
        customizeBtn.addEventListener('click', () => {
            customizePanel.classList.add('open');
        });

        closeCustomize.addEventListener('click', () => {
            customizePanel.classList.remove('open');
        });

        applyCustomize.addEventListener('click', () => {
            customizePanel.classList.remove('open');
        });

        // Theme options
        themeOptions.forEach(btn => {
            btn.addEventListener('click', () => {
                currentTheme = btn.dataset.theme;
                applyTheme();
            });
        });

        // Size options
        sizeOptions.forEach(btn => {
            btn.addEventListener('click', () => {
                currentSize = btn.dataset.size;
                applySize();
            });
        });

        // Background options
        bgOptions.forEach(btn => {
            btn.addEventListener('click', () => {
                currentBg = btn.dataset.bg;
                applyBackground();
            });
        });

        // Search functionality
        searchBtn.addEventListener('click', () => {
            searchQuery = gameSearch.value.trim();
            loadGames();
        });

        gameSearch.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchQuery = gameSearch.value.trim();
                loadGames();
            }
        });

        // Tab buttons
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                tabButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = btn.dataset.category;
                loadGames();
            });
        });

        // Modal close
        closeModal.addEventListener('click', () => {
            gameModal.classList.remove('open');
            modalGameFrame.src = ''; // Stop iframe when closing
        });

        // Close modal when clicking outside content
        gameModal.addEventListener('click', (e) => {
            if (e.target === gameModal) {
                gameModal.classList.remove('open');
                modalGameFrame.src = '';
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && gameModal.classList.contains('open')) {
                gameModal.classList.remove('open');
                modalGameFrame.src = '';
            }
        });
    }

    function loadGames() {
        // Show loading state
        gamesGrid.innerHTML = '<div class="loading">Loading games...</div>';

        // Filter games
        let filteredGames = gamesData;

        // Filter by category
        if (currentCategory !== 'all') {
            filteredGames = filteredGames.filter(game => game.category === currentCategory);
        }

        // Filter by search query
        if (searchQuery) {
            filteredGames = filteredGames.filter(game =>
                game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                game.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        // Handle no results
        if (filteredGames.length === 0) {
            gamesGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <p>No games found matching "${searchQuery}"</p>
                    <p>Try clearing your search or selecting a different category</p>
                </div>
            `;
            return;
        }

        // Render games
        gamesGrid.innerHTML = '';
        filteredGames.forEach(game => {
            const gameCard = createGameCard(game);
            gamesGrid.appendChild(gameCard);
        });
    }

    function createGameCard(game) {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <div class="game-thumbnail">
                <img src="${game.thumbnail}" alt="${game.title}" onerror="this.onerror=null;this.src='https://via.placeholder.com/300x200/6366f1/ffffff?text=Game'">
            </div>
            <div class="game-info">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <div class="game-tags">
                    ${game.tags.map(tag => `<span class="game-tag ${tag}">${tag}</span>`).join('')}
                </div>
            </div>
        `;

        // Add click event to open modal/game
        card.addEventListener('click', () => {
            openGameModal(game);
        });

        return card;
    }

    function openGameModal(game) {
        modalGameTitle.textContent = game.title;
        modalGameDescription.textContent = game.description;
        modalGameFrame.src = game.iframeUrl;

        // Update tags
        modalGameTags.innerHTML = '';
        game.tags.forEach(tag => {
            const tagEl = document.createElement('span');
            tagEl.className = `game-tag ${tag}`;
            tagEl.textContent = tag;
            modalGameTags.appendChild(tagEl);
        });

        gameModal.classList.add('open');
    }

    // Initialize games on load
    loadGames();
});