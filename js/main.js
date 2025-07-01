/**
 * Main JavaScript entry point
 */
import { initHeader } from './components/header.js';
import { initContactForm } from './components/contact.js';
import { initAnimations, initCounters } from './utils/animations.js';
import { smoothScrollTo } from './utils/helpers.js';

// Document ready function
function domReady(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        callback();
    }
}

// Initialize application
domReady(() => {
    // Initialize components
    initHeader();
    initContactForm();
    
    // Initialize animations
    initAnimations();
    initCounters();
    
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            smoothScrollTo(targetId, 80); // 80px offset for fixed header
        });
    });
    
    // Handle URL hash for direct section access
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        setTimeout(() => {
            smoothScrollTo(targetId, 80);
        }, 500);
    }
}); 