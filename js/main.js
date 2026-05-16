import { initHeader } from './components/header.js';
import { initContactForm } from './components/contact.js';
import { initAnimations, initCounters } from './utils/animations.js';
import { smoothScrollTo } from './utils/helpers.js';

function domReady(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        callback();
    }
}

// --- Typewriter effect ---
function initTypewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;

    const strings = [
        'M1 Researcher @ KIT.',
        'Software Engineer.',
        'Full-Stack Developer.',
    ];

    let stringIndex  = 0;
    let charIndex    = 0;
    let isDeleting   = false;
    const typeSpeed  = 55;
    const deleteSpeed = 28;
    const pauseAfterType = 2500;
    const pauseAfterDelete = 400;

    function tick() {
        const current = strings[stringIndex];

        if (!isDeleting) {
            el.textContent = current.slice(0, charIndex + 1);
            charIndex++;

            if (charIndex === current.length) {
                isDeleting = true;
                setTimeout(tick, pauseAfterType);
                return;
            }
            setTimeout(tick, typeSpeed);
        } else {
            el.textContent = current.slice(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                stringIndex = (stringIndex + 1) % strings.length;
                setTimeout(tick, pauseAfterDelete);
                return;
            }
            setTimeout(tick, deleteSpeed);
        }
    }

    tick();
}

// --- Scroll progress bar ---
function initScrollProgress() {
    const bar = document.querySelector('.scroll-progress');
    if (!bar) return;

    window.addEventListener('scroll', () => {
        const scrollTop  = window.scrollY;
        const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
        const progress   = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width  = progress + '%';
    }, { passive: true });
}

// --- Back to top button ---
function initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- Bootstrap ---
domReady(() => {
    if (window.location.hash) {
        history.replaceState(null, null, ' ');
    }
    window.scrollTo(0, 0);

    initHeader();
    initContactForm();
    initAnimations();
    initCounters();
    initTypewriter();
    initScrollProgress();
    initBackToTop();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScrollTo(link.getAttribute('href').substring(1), 80);
        });
    });

    // Handle direct URL hash access
    if (window.location.hash && window.location.hash !== '#') {
        setTimeout(() => {
            smoothScrollTo(window.location.hash.substring(1), 80);
        }, 1000);
    }
});
