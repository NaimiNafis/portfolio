/**
 * Animation utilities
 * - Intersection Observer for scroll animations
 */
export function initAnimations() {
    // Add animation classes when elements come into view
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length === 0) return;
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get animation type from data attribute or use default
                const animationType = entry.target.dataset.animation || 'fade-in';
                entry.target.classList.add(animationType);
                
                // Unobserve after animation is triggered
                animationObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });
}

/**
 * Animate counter elements
 */
export function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    if (counters.length === 0) return;
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                let count = 0;
                const speed = target / 100; // Adjust speed based on target value
                
                const updateCount = () => {
                    if (count < target) {
                        count += Math.ceil(speed);
                        counter.textContent = count;
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCount();
                counterObserver.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
} 