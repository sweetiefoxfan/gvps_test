# Gustavvasas Pluggsida 🎮

A customizable game portal website featuring open-source HTML5 games from GitHub. Host your own game collection with beautiful themes and easy customization!

## Features

- 🎨 **Highly Customizable** - Change themes, layouts, backgrounds, and more
- 🎮 **Open Source Games** - Curated collection of fun HTML5 games from GitHub
- 🔍 **Search & Filter** - Find games by name or category
- 📱 **Fully Responsive** - Works on mobile, tablet, and desktop
- 💾 **Persistent Settings** - Your customizations are saved locally
- 🚀 **GitHub Pages Ready** - Easy to deploy for free
- 🌓 **Dark/Light Mode** - Multiple theme options including neon and retro
- ⚡ **Fast Loading** - Optimized for performance

## Games Included

- 2048 - Addictive number puzzle game
- Tetris - Classic block stacking
- Snake Game - Retro arcade fun
- Pac-Man - Maze chasing classic
- Memory Match - Brain training game
- Chess - Strategy board game
- Sudoku - Logic number puzzles
- Platformer - Side-scrolling action
- Multiplayer Quiz - Trivia battles with friends
- Flappy Bird - Infamously difficult tap game

## Customization Options

### Themes
- **Dark** - Default dark theme with purple accents
- **Light** - Clean light theme
- **Neon** - Vibrant cyberpunk colors
- **Retro** - 80s inspired color scheme

### Layouts
- **Grid** - Card-based game display
- **List** - Vertical list view

### Sizes
- **Small** - Compact game cards
- **Medium** - Balanced size (default)
- **Large** - Emphasized game cards

### Backgrounds
- **Gradient** - Animated gradient background
- **Dark** - Solid dark background
- **Space** - Starfield space background
- **Abstract** - Moving abstract shapes

## How to Host on GitHub Pages

1. **Fork this repository** (or create a new repo and copy the files)
2. **Go to Settings → Pages** in your GitHub repository
3. **Under "Source"**, select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
4. **Click Save** - GitHub will provide your site URL
5. **Wait a few minutes** for your site to be published

## Local Development

To test locally:
1. Clone/download this repository
2. Open `index.html` in your browser
3. No build tools or dependencies required!

## Adding More Games

To add new games to your portal:

1. Find open-source HTML5 games on GitHub (search for "html5 game", "javascript game", etc.)
2. Add them to the `games-data.js` file:
   ```javascript
   {
     id: [unique number],
     title: "Game Name",
     description: "Brief description",
     thumbnail: "URL to screenshot/placeholder",
     category: "puzzle|arcade|strategy|multiplayer",
     tags: ["tag1", "tag2"],
     githubUrl: "https://github.com/username/repo",
     playUrl: "https://username.github.io/repo", // Where to play
     iframeUrl: "https://username.github.io/repo" // For embedding (if supported)
   }
   ```
3. Many GitHub-hosted games can be played directly via GitHub Pages

## Browser Support

Works in all modern browsers:
- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile browsers ✅

## Credits

- Game thumbnails sourced from respective game repositories
- Icons from Font Awesome
- Inspired by various open-source game collections

## License

MIT License - Feel free to modify and use for personal or commercial purposes.

---

**Gustavvasas Pluggsida** - Your customizable game portal to the wonderful world of open-source HTML5 games! 🎮✨