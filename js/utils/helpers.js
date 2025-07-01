/**
 * Helper utility functions
 */

/**
 * Debounce function for performance optimization
 * 
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
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
 * 
 * @param {string} elementId - Target element ID
 * @param {number} offset - Offset in pixels
 */
export function smoothScrollTo(elementId, offset = 0) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

/**
 * Format date for display
 * 
 * @param {string|Date} date - Date to format
 * @param {string} format - Format string (default: 'MMM YYYY')
 * @returns {string} - Formatted date string
 */
export function formatDate(date, format = 'MMM YYYY') {
    const d = new Date(date);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const year = d.getFullYear();
    const month = months[d.getMonth()];
    const day = d.getDate().toString().padStart(2, '0');
    
    switch (format) {
        case 'MMM DD, YYYY':
            return `${month} ${day}, ${year}`;
        case 'DD/MM/YYYY':
            return `${day}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${year}`;
        case 'YYYY-MM-DD':
            return `${year}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${day}`;
        case 'MMM YYYY':
        default:
            return `${month} ${year}`;
    }
}

/**
 * Add event listeners to multiple elements
 * 
 * @param {NodeList|Array} elements - Elements to add listeners to
 * @param {string} event - Event name
 * @param {Function} callback - Event callback
 */
export function addEventListenerToAll(elements, event, callback) {
    elements.forEach(element => {
        element.addEventListener(event, callback);
    });
} 