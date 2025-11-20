# Tic Tac Toe Game

A modern, interactive Tic Tac Toe game built with React, Vite, Tailwind CSS, and GSAP animations.

## Features

-   ✨ Smooth GSAP animations for gameplay
-   🎨 Modern UI with Tailwind CSS
-   🌙 Dark mode support
-   ♻️ Game history with move navigation
-   ⚡ Fast and responsive with Vite
-   📱 Mobile-friendly design

## Tech Stack

-   **React 19** - UI framework
-   **Vite** - Build tool and dev server
-   **Tailwind CSS** - Styling
-   **GSAP** - Animation library
-   **ESLint** - Code quality

## Getting Started

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/novabuster0/X-O.git
cd Calculator
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run preview` - Preview production build locally
-   `npm run lint` - Run ESLint to check code quality
-   `npm start` - Alias for `npm run dev`

## Project Structure

```
src/
├── App.jsx              # Main App component
├── Board.jsx            # Game board component with game logic
├── Square.jsx           # Individual square component
├── winnerCheck.js       # Winner detection logic
├── main.jsx             # React entry point
└── App.css              # Global styles
```

## Deployment on Netlify

This project is configured for easy deployment on Netlify.

### Steps to Deploy

1. **Ensure your code is pushed to GitHub:**

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Go to [Netlify](https://netlify.com) and sign up/login**

3. **Click "Add new site" → "Import an existing project"**

4. **Connect your GitHub account and select the X-O repository**

5. **Configure build settings (should auto-detect):**

    - Build command: `npm run build`
    - Publish directory: `dist`
    - Node version: 18 or higher

6. **Click "Deploy"** - Your site will be live in minutes!

### Environment Configuration

The `netlify.toml` file handles:

-   Build command configuration
-   Publish directory setup
-   SPA routing (redirects all routes to index.html)
-   Context-specific settings for different deployment environments

## How to Play

1. Click on empty squares to make your move
2. Players alternate between X and O
3. First player to get three in a row (horizontally, vertically, or diagonally) wins
4. Use the history panel on the right to navigate through previous moves
5. Click "back to Move 0" to restart the game

## Browser Support

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)

## License

MIT

## Author

novabuster0

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
