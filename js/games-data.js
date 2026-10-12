// Game data for Gustavvasas Pluggsida
// In a real implementation, you would fetch these from actual GitHub repositories
// For now, we're using placeholder data with links to actual open-source game repositories

const gamesData = [
    {
        id: 1,
        title: "2048",
        description: "Slide and merge tiles to reach the 2048 tile in this addictive puzzle game!",
        thumbnail: "https://via.placeholder.com/300x200/6366f1/ffffff?text=2048",
        category: "puzzle",
        tags: ["puzzle", "numbers", "addictive"],
        githubUrl: "https://github.com/gabrielecirulli/2048",
        playUrl: "https://gabrielecirulli.github.io/2048/",
        iframeUrl: "https://gabrielecirulli.github.io/2048/"
    },
    {
        id: 2,
        title: "Tetris",
        description: "Classic Tetris gameplay - rotate and place falling blocks to clear lines!",
        thumbnail: "https://via.placeholder.com/300x200/ec4899/ffffff?text=Tetris",
        category: "arcade",
        tags: ["arcade", "classic", "blocks"],
        githubUrl: "https://github.com/jakesgordon/javascript-tetris",
        playUrl: "https://jakesgordon.com/javascript-tetris/",
        iframeUrl: "https://jakesgordon.com/javascript-tetris/"
    },
    {
        id: 3,
        title: "Snake Game",
        description: "Guide the snake to eat food and grow longer without hitting walls or yourself!",
        thumbnail: "https://via.placeholder.com/300x200/10b981/ffffff?text=Snake",
        category: "arcade",
        tags: ["arcade", "snake", "retro"],
        githubUrl: "https://github.com/borismus/snake.js",
        playUrl: "https://borismus.github.io/snake.js/",
        iframeUrl: "https://borismus.github.io/snake.js/"
    },
    {
        id: 4,
        title: "Pac-Man",
        description: "Navigate the maze, eat pellets, and avoid ghosts in this iconic arcade classic!",
        thumbnail: "https://via.placeholder.com/300x200/f59e0b/ffffff?text=Pac-Man",
        category: "arcade",
        tags: ["arcade", "maze", "retro"],
        githubUrl: "https://github.com/Submersive/pacman",
        playUrl: "https://submersive.github.io/pacman/",
        iframeUrl: "https://submersive.github.io/pacman/"
    },
    {
        id: 5,
        title: "Memory Match",
        description: "Flip cards to find matching pairs in this classic memory training game!",
        thumbnail: "https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Memory",
        category: "puzzle",
        tags: ["puzzle", "memory", "brain"],
        githubUrl: "https://github.com/lorenbrisque/memory-game",
        playUrl: "https://lorenbrisque.github.io/memory-game/",
        iframeUrl: "https://lorenbrisque.github.io/memory-game/"
    },
    {
        id: 6,
        title: "Chess",
        description: "Play chess against the computer or a friend with this beautiful implementation!",
        thumbnail: "https://via.placeholder.com/300x200/6366f1/ffffff?text=Chess",
        category: "strategy",
        tags: ["strategy", "board", "multiplayer"],
        githubUrl: "https://github.com/chrissicoll/chessboardjs",
        playUrl: "https://chessboardjs.com/examples.html#5000",
        iframeUrl: "https://chessboardjs.com/examples.html#5000"
    },
    {
        id: 7,
        title: "Sudoku",
        description: "Challenge your logic with number placement puzzles in various difficulty levels!",
        thumbnail: "https://via.placeholder.com/300x200/ec4899/ffffff?text=Sudoku",
        category: "puzzle",
        tags: ["puzzle", "numbers", "logic"],
        githubUrl: "https://github.com/CoolKenau/JS-Sudoku-Solver",
        playUrl: "https://coolkenau.github.io/JS-Sudoku-Solver/",
        iframeUrl: "https://coolkenau.github.io/JS-Sudoku-Solver/"
    },
    {
        id: 8,
        title: "Platformer",
        description: "Run, jump, and navigate through challenging levels in this side-scrolling platformer!",
        thumbnail: "https://via.placeholder.com/300x200/10b981/ffffff?text=Platformer",
        category: "arcade",
        tags: ["arcade", "platformer", "action"],
        githubUrl: "https://github.com/bflint/platformer",
        playUrl: "https://bflint.github.io/platformer/",
        iframeUrl: "https://bflint.github.io/platformer/"
    },
    {
        id: 9,
        title: "Multiplayer Quiz",
        description: "Challenge friends to trivia battles in this real-time multiplayer quiz game!",
        thumbnail: "https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Quiz",
        category: "multiplayer",
        tags: ["multiplayer", "trivia", "social"],
        githubUrl: "https://github.com/websanova/quiz",
        playUrl: "https://raw.githack.com/websanova/quiz/master/demo/index.html",
        iframeUrl: "https://raw.githack.com/websanova/quiz/master/demo/index.html"
    },
    {
        id: 10,
        title: "Flappy Bird",
        description: "Tap to keep the bird flying between pipes in this infamously difficult game!",
        thumbnail: "https://via.placeholder.com/300x200/f59e0b/ffffff?text=Flappy",
        category: "arcade",
        tags: ["arcade", "tap", "difficult"],
        githubUrl: "https://github.com/mourner/flappybird",
        playUrl: "https://mourner.github.io/flappybird/",
        iframeUrl: "https://mourner.github.io/flappybird/"
    }
];

// Function to get games by category
function getGamesByCategory(category) {
    if (category === 'all') return gamesData;
    return gamesData.filter(game => game.category === category);
}

// Function to search games
function searchGames(query) {
    const lowerQuery = query.toLowerCase();
    return gamesData.filter(game =>
        game.title.toLowerCase().includes(lowerQuery) ||
        game.description.toLowerCase().includes(lowerQuery) ||
        game.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
}