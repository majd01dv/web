// Sample game data
const popularGames = [
    { id: 1, name: "Batman Arkham Knight", image: "pop/Batman-Arkham-Knight.jpg", genre: "Adventure", rating: "4.8/5", release: "2023" },
    { id: 2, name: "Forza Horizon 5", image: "pop/Forza-Horizon-5.jpg", genre: "Shooter", rating: "4.5/5", release: "2023" },
    { id: 3, name: "King Arthur Knights Tale", image: "pop/King-Arthur-Knights-Tale.jpg", genre: "Racing", rating: "4.7/5", release: "2023" },
    { id: 4, name: "Liars Bar", image: "pop/Liars-Bar.jpg", genre: "Simulation", rating: "4.6/5", release: "2023" },
    { id: 5, name: "Marvels Spider Man Remastered", image: "pop/Marvels-Spider-Man-Remastered.jpg", genre: "RPG", rating: "4.9/5", release: "2023" },
    { id: 6, name: "WRC 7 FIA World Rally Championsh", image: "pop/WRC-7-FIA-World-Rally-Championsh.jpg", genre: "Action", rating: "4.4/5", release: "2023" }
];

// DOM Elements
const gamesGrid = document.querySelector('.games-grid');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const backToTopBtn = document.querySelector('.back-to-top');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load popular games
    loadPopularGames();
    
    // Set up event listeners
    setupEventListeners();
});

function loadPopularGames() {
    gamesGrid.innerHTML = '';
    popularGames.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.className = 'game-item';
        gameItem.innerHTML = `
            <img src="${game.image}" alt="${game.name}">
            <div class="game-name">${game.name}</div>
        `;
        gameItem.addEventListener('click', () => showGameDetails(game));
        gamesGrid.appendChild(gameItem);
    });
}

function showGameDetails(game) {
    modal.style.display = 'block';
    modalContent.innerHTML = `
        <span class="close-btn">&times;</span>
        <h2>${game.name}</h2>
        <div class="game-details">
            <img src="${game.image}" alt="${game.name}">
            <div class="game-info">
                <h3>Game Information</h3>
                <p><strong>Genre:</strong> ${game.genre}</p>
                <p><strong>Rating:</strong> ${game.rating}</p>
                <p><strong>Release Year:</strong> ${game.release}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.</p>
                <button class="play-btn">Play Now</button>
            </div>
        </div>
    `;


    
    
    // Add event listener to close button
    document.querySelector('.close-btn').addEventListener('click', closeModal);
    
    // Add event listener to play button
    document.querySelector('.play-btn').addEventListener('click', () => {
        alert(`Starting ${game.name}...`);
    });
}

function closeModal() {
    modal.style.display = 'none';
}

function setupEventListeners() {
    // Logout button
    document.querySelector('.logout-btn').addEventListener('click', () => {
        alert('Logging out...');
    });
    
    // Search functionality
    document.querySelector('.search-bar button').addEventListener('click', () => {
        const searchTerm = document.querySelector('.search-bar input').value;
        if (searchTerm) {
            alert(`Searching for: ${searchTerm}`);
        }
    });
    
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            alert(`Showing ${btn.textContent} games`);
        });
    });
    
    // Back to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}
// Highlight current page in navigation
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Call this function when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavLink();
    // ... rest of your existing code
});

// Function to load games by category
function loadCategoryGames(category) {
    const gamesGrid = document.getElementById('category-games');
    gamesGrid.innerHTML = '';
    
    // Filter games by category (or show all if category is 'All')
    const filteredGames = category === 'All' 
        ? gameData 
        : gameData.filter(game => game.genre.toLowerCase() === category.toLowerCase());
    
    if (filteredGames.length === 0) {
        gamesGrid.innerHTML = '<p class="no-games">No games found in this category.</p>';
        return;
    }
    
    filteredGames.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.className = 'game-item';
        gameItem.innerHTML = `
            <img src="${game.image}" alt="${game.name}">
            <div class="game-name">${game.name}</div>
        `;
        gameItem.addEventListener('click', () => showGameDetails(game));
        gamesGrid.appendChild(gameItem);
    });
}

