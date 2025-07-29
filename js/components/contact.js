/**
 * Contact form functionality
 * - Form validation
 * - Form submission
 */
export function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    const formMessage = document.querySelector('.form-message');
    
    if (!contactForm) return;
    
    // Form validation
    const validateForm = () => {
        let isValid = true;
        const nameInput = contactForm.querySelector('#name');
        const emailInput = contactForm.querySelector('#email');
        const messageInput = contactForm.querySelector('#message');
        
        // Reset validation states
        clearValidationStates();
        
        // Check name
        if (!nameInput.value.trim()) {
            setError(nameInput, 'Name is required');
            isValid = false;
        }
        
        // Check email
        if (!emailInput.value.trim()) {
            setError(emailInput, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            setError(emailInput, 'Please enter a valid email');
            isValid = false;
        }
        
        // Check message
        if (!messageInput.value.trim()) {
            setError(messageInput, 'Message is required');
            isValid = false;
        }
        
        return isValid;
    };
    
    // Set error state and message
    const setError = (input, errorMessage) => {
        const formGroup = input.closest('.form-group');
        formGroup.classList.add('error');
        
        const errorElement = document.createElement('p');
        errorElement.className = 'form-error-text';
        errorElement.textContent = errorMessage;
        
        formGroup.appendChild(errorElement);
    };
    
    // Clear validation states
    const clearValidationStates = () => {
        contactForm.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
            const errorElement = group.querySelector('.form-error-text');
            if (errorElement) {
                errorElement.remove();
            }
        });
    };
    
    // Validate email format
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    
    // Show form message
    const showFormMessage = (type, message) => {
        formMessage.className = 'form-message';
        formMessage.classList.add(type);
        formMessage.textContent = message;
        formMessage.style.display = 'block';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    };
    
    // Form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const message = contactForm.querySelector('#message').value.trim();

            fetch('https://naimis-portfolio.onrender.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showFormMessage('success', 'Thank you! Your message has been sent.');
                    contactForm.reset();
                } else {
                    showFormMessage('error', data.message || 'Something went wrong. Please try again.');
                }
            })
            .catch(error => {
                showFormMessage('error', 'An error occurred. Please try again later.');
            });
        }
    });
} 