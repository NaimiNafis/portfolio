/**
 * Animation utilities
 * - Intersection Observer for scroll animations
 * - Reads data-delay attribute to stagger animations
 */
export function initAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if (animatedElements.length === 0) return;

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationType = entry.target.dataset.animation || 'fade-in';
                const delay = entry.target.dataset.delay;

                if (delay) {
                    entry.target.style.animationDelay = `${delay}ms`;
                }

                entry.target.classList.add(animationType);
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
                const speed = target / 100;

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
