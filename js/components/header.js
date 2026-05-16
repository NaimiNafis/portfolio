/**
 * Header functionality
 * - Mobile menu toggle
 * - Header hide/show on scroll (debounced)
 * - Active nav item highlight on scroll (debounced)
 */
import { debounce } from '../utils/helpers.js';

export function initHeader() {
    const header          = document.querySelector('header');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu         = document.querySelector('.nav-menu');
    const overlay         = document.querySelector('.overlay');
    const closeMenuBtn    = document.querySelector('.close-menu');
    const navLinks        = document.querySelectorAll('.nav-menu a');
    const sections        = document.querySelectorAll('section[id]');

    let lastScrollTop = 0;

    // --- Mobile menu ---
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', () => {
            navMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    const closeMenu = () => {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeMenuBtn?.addEventListener('click', closeMenu);
    overlay?.addEventListener('click', closeMenu);
    navLinks.forEach(link => link.addEventListener('click', closeMenu));

    // --- Header hide/show ---
    const handleHeaderScroll = debounce(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.classList.add('header-scrolled');
            header.classList.remove('header-visible');
        } else {
            header.classList.remove('header-scrolled');
            header.classList.add('header-visible');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, 50);

    // --- Active section highlight ---
    const highlightActiveSection = debounce(() => {
        const scrollY      = window.pageYOffset;
        const headerHeight = header.offsetHeight;
        const offset       = headerHeight + 10;

        navLinks.forEach(link => link.classList.remove('active'));

        let currentSection = null;

        sections.forEach(section => {
            const sectionTop    = section.offsetTop - offset;
            const sectionHeight = section.offsetHeight;
            const sectionId     = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSection = sectionId;
                document.querySelector(`.nav-menu a[href="#${sectionId}"]`)?.classList.add('active');
            }
        });

        if (!currentSection && window.innerHeight + scrollY >= document.body.offsetHeight - 100) {
            const lastId = sections[sections.length - 1].getAttribute('id');
            document.querySelector(`.nav-menu a[href="#${lastId}"]`)?.classList.add('active');
        }
    }, 50);

    window.addEventListener('scroll', handleHeaderScroll);
    window.addEventListener('scroll', highlightActiveSection);

    // Initial highlight check
    highlightActiveSection();
}
