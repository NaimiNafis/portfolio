// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Update links with actual URLs when you have them
    const updateLinks = () => {
        // GitHub profile link - Replace "yourusername" with your actual GitHub username
        const githubLinks = document.querySelectorAll('#github, #github-contact');
        githubLinks.forEach(link => {
            link.href = "https://github.com/NaimiNafis";
            link.setAttribute('target', '_blank'); // Open in new tab
        });

        // LinkedIn profile link
        const linkedinLinks = document.querySelectorAll('#linkedin, #linkedin-contact');
        linkedinLinks.forEach(link => {
            link.href = "https://www.linkedin.com/in/naimi-nafis-83845a274/";
            link.setAttribute('target', '_blank'); // Open in new tab
        });

        // Resume download link
        const resumeLink = document.querySelector('#resume');
        resumeLink.href = "resume.pdf";
        resumeLink.setAttribute('download', 'Naimi_Resume.pdf');

        // Project links
        // Update these with actual URLs when available
        const projectLinks = {
            "Custom C Compiler": {
                demo: "https://github.com/NaimiNafis/language-processing",
                code: "https://github.com/NaimiNafis/language-processing"
            },
            "Readoku - AI Translator Extension": {
                demo: "https://github.com/NaimiNafis/readoku",
                code: "https://github.com/NaimiNafis/readoku"
            },
            "TOP Calculator": {
                demo: "https://naiminafis.github.io/calculator/",
                code: "https://github.com/NaimiNafis/calculator"
            },
            "Etch-A-Sketch": {
                demo: "https://naiminafis.github.io/etch-a-sketch/",
                code: "https://github.com/NaimiNafis/etch-a-sketch"
            }
        };

        // Get all project cards
        const projectCards = document.querySelectorAll('.project-card');
        
        // Update each project card with appropriate links
        projectCards.forEach(card => {
            const title = card.querySelector('h3').textContent;
            const links = card.querySelectorAll('.project-link');
            
            if (projectLinks[title]) {
                links[0].href = projectLinks[title].demo;
                links[0].setAttribute('target', '_blank'); // Open in new tab
                links[1].href = projectLinks[title].code;
                links[1].setAttribute('target', '_blank'); // Open in new tab
            }
        });
    };

    // Initialize links
    updateLinks();

    // Add mobile menu toggle functionality
    const setupMobileMenu = () => {
        // Add mobile menu toggle button to the DOM if it doesn't exist
        const header = document.querySelector('.header .section-content');
        if (!document.querySelector('.mobile-menu-toggle')) {
            const menuToggle = document.createElement('div');
            menuToggle.className = 'mobile-menu-toggle';
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            header.appendChild(menuToggle);
        }
        
        // Get the toggle button and nav links
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        // Toggle menu when button is clicked
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = mobileMenuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // Close menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
            });
        });
    };
    
    // Call the mobile menu setup function
    setupMobileMenu();
    
    // Add smooth scrolling to all links
    const setupSmoothScrolling = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (!targetElement) return;
                
                // Calculate header height to offset scroll position
                const headerHeight = document.querySelector('.header').offsetHeight;
                
                // Scroll to target with header offset
                const yOffset = -headerHeight;
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                
                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });
            });
        });
    };
    
    // Call the smooth scrolling setup function
    setupSmoothScrolling();

    // Setup contact form validation and submission
    const setupContactForm = () => {
        const contactForm = document.querySelector('.contact-form');
        if (!contactForm) return;
        
        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const subjectInput = contactForm.querySelectorAll('input[type="text"]')[1];
        const messageTextarea = contactForm.querySelector('textarea');
        const sendButton = contactForm.querySelector('.send-btn');
        
        // Basic validation function
        const validateForm = () => {
            let isValid = true;
            
            // Reset validation styles
            [nameInput, emailInput, subjectInput, messageTextarea].forEach(field => {
                field.style.borderColor = '#333';
            });
            
            // Check required fields
            if (!nameInput.value.trim()) {
                nameInput.style.borderColor = '#ff4d4d';
                isValid = false;
            }
            
            if (!emailInput.value.trim()) {
                emailInput.style.borderColor = '#ff4d4d';
                isValid = false;
            } else {
                // Simple email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value.trim())) {
                    emailInput.style.borderColor = '#ff4d4d';
                    isValid = false;
                }
            }
            
            if (!messageTextarea.value.trim()) {
                messageTextarea.style.borderColor = '#ff4d4d';
                isValid = false;
            }
            
            return isValid;
        };
        
        // Handle form submission
        sendButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (validateForm()) {
                // Show success message (in production, you'd send this to a server)
                const formData = {
                    name: nameInput.value.trim(),
                    email: emailInput.value.trim(),
                    subject: subjectInput.value.trim(),
                    message: messageTextarea.value.trim()
                };
                
                // For demo purposes - log the data and show success message
                console.log('Form submitted:', formData);
                
                // Show success message (you can enhance this with a proper notification)
                sendButton.innerHTML = '<span class="btn-icon"><i class="fas fa-check"></i></span> Sent!';
                sendButton.style.backgroundColor = '#4CAF50';
                sendButton.disabled = true;
                
                // Reset the form after a delay
                setTimeout(() => {
                    nameInput.value = '';
                    emailInput.value = '';
                    subjectInput.value = '';
                    messageTextarea.value = '';
                    
                    sendButton.innerHTML = '<span class="btn-icon"><i class="fas fa-paper-plane"></i></span> Send Message';
                    sendButton.style.backgroundColor = '';
                    sendButton.disabled = false;
                }, 3000);
            }
        });
    };
    
    // Call the contact form setup function
    setupContactForm();

    // Simple scroll reveal animation
    const revealOnScroll = () => {
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for sections
    const initializeSections = () => {
        const sections = document.querySelectorAll('.section:not(#home)');
        
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'all 0.6s ease';
        });
    };

    // Initialize section animations
    initializeSections();

    // Add scroll event listener
    window.addEventListener('scroll', revealOnScroll);
    
    // Handle active menu items
    const updateActiveNavLink = () => {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        // Get current scroll position
        const scrollPosition = window.scrollY;
        
        // Loop through sections to find current section
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to corresponding link
                const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };
    
    // Add scroll event listener for active nav updates
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Call once on load to check initial viewport state
    revealOnScroll();
    updateActiveNavLink();
}); 