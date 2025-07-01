# Personal Portfolio Website

A clean, responsive portfolio website built with modern HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Modular CSS architecture with component-based styling
- Modern JavaScript with ES6 modules
- Smooth animations and transitions
- Contact form with validation
- Optimized for performance and accessibility

## Project Structure

```
portfolio/
├── assets/
│   ├── docs/        # Resume and other documents
│   ├── fonts/       # Custom fonts (if any)
│   └── images/      # Images and icons
│       └── projects/ # Project-specific images
│
├── css/
│   ├── base/        # Base styles
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── typography.css
│   │   └── layout.css
│   │
│   ├── components/  # Component-specific styles
│   │   ├── header.css
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── career.css
│   │   ├── projects.css
│   │   ├── contact.css
│   │   ├── footer.css
│   │   └── buttons.css
│   │
│   ├── utils/       # Utilities
│   │   ├── animations.css
│   │   ├── utilities.css
│   │   └── media-queries.css
│   │
│   └── main.css     # Main CSS file that imports all others
│
├── js/
│   ├── components/  # Component-specific JavaScript
│   │   ├── header.js
│   │   └── contact.js
│   │
│   ├── utils/       # Utility functions
│   │   ├── animations.js
│   │   └── helpers.js
│   │
│   └── main.js      # Main JavaScript file that imports all modules
│
└── index.html       # Main HTML file
```

## Setup

Simply clone the repository and open the `index.html` file in a web browser. No build process is required.

```bash
git clone https://github.com/username/portfolio.git
cd portfolio
```

## Customization

To customize this portfolio for your own use:

1. Edit the `index.html` file to update your personal information
2. Replace placeholder images in the `assets/images/` directory
3. Update the CSS variables in `css/base/variables.css` to change colors and fonts
4. Modify the content in each section to showcase your own work and skills

## Browser Support

The website is compatible with all modern browsers (Chrome, Firefox, Safari, Edge).

## Deployment Options

This site can be easily deployed on serverless platforms:

- **GitHub Pages**: Push to a GitHub repository and enable GitHub Pages
- **Netlify**: Connect your repository or drag and drop the folder
- **Vercel**: Import your Git repository and deploy
- **AWS Amplify**: Connect your repository for continuous deployment

## Assets Checklist

Before deploying, make sure to update:

- [ ] GitHub Profile URL
- [ ] LinkedIn Profile URL
- [ ] resume.pdf file
- [ ] Project "Live Demo" URLs (all 4)
- [ ] Project "View Code" GitHub URLs (all 4)