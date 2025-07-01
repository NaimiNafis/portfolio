/**
 * Header functionality
 * - Mobile menu toggle
 * - Header scroll effect
 */
export function initHeader() {
    // Elements
    const header = document.querySelector('header');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.overlay');
    const closeMenuBtn = document.querySelector('.close-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Track scroll position for header hide/show effect
    let lastScrollTop = 0;
    
    // Mobile menu toggle
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', () => {
            navMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close menu function
    const closeMenu = () => {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    // Close menu when clicking the close button
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', closeMenu);
    }
    
    // Close menu when clicking the overlay
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }
    
    // Close menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            // Scrolling down & past header height
            header.classList.add('header-scrolled');
            header.classList.remove('header-visible');
        } else {
            // Scrolling up
            header.classList.remove('header-scrolled');
            header.classList.add('header-visible');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
    
    // Highlight active nav item based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.nav-menu a[href*=${sectionId}]`)?.classList.add('active');
            } else {
                document.querySelector(`.nav-menu a[href*=${sectionId}]`)?.classList.remove('active');
            }
        });
    });
} 