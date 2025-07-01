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
    
    // Initial check on page load
    highlightActiveSection();
    
    // Check on scroll
    window.addEventListener('scroll', highlightActiveSection);
    
    function highlightActiveSection() {
        const scrollY = window.pageYOffset;
        const headerHeight = header.offsetHeight;
        
        // Add a small offset to improve detection
        const offset = headerHeight + 10;
        
        // Remove active class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Find the current section and highlight its nav link
        let currentSection = null;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            // Check if we're inside this section
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSection = sectionId;
                document.querySelector(`.nav-menu a[href="#${sectionId}"]`)?.classList.add('active');
            }
        });
        
        // If at the bottom of page and no section is active, highlight the last one
        if (!currentSection && window.innerHeight + scrollY >= document.body.offsetHeight - 100) {
            const lastSectionId = sections[sections.length - 1].getAttribute('id');
            document.querySelector(`.nav-menu a[href="#${lastSectionId}"]`)?.classList.add('active');
        }
    }
} 