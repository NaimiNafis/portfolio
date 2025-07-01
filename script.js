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
        const sections = document.querySelectorAll('.section:not(#hero)');
        
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
    
    // Call once on load to check initial viewport state
    revealOnScroll();
}); 