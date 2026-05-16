/**
 * Helper utility functions
 */

/**
 * Debounce function for performance optimization
 */
export function debounce(func, wait = 100) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

/**
 * Smooth scroll to element
 */
export function smoothScrollTo(elementId, offset = 0) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const headerHeight = document.querySelector('header').offsetHeight;
    let scrollOffset = headerHeight;

    if (window.innerWidth > 1600) {
        scrollOffset = headerHeight + 20;
    }

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - scrollOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });

    setTimeout(() => {
        history.pushState(null, null, `#${elementId}`);
    }, 500);
}
