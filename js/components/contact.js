/**
 * Contact form — powered by EmailJS
 *
 * Setup (one-time):
 *  1. Sign up at https://www.emailjs.com  (free: 200 emails/month)
 *  2. Add a Gmail service  →  copy the Service ID
 *  3. Create an email template with variables:
 *       {{name}}  {{email}}  {{subject}}  {{message}}
 *     Copy the Template ID
 *  4. Go to Account → API Keys → copy your Public Key
 *  5. Replace the three YOUR_* placeholders below
 */

const EMAILJS_PUBLIC_KEY  = 'I1t_QQVuPJ64Qo0Yr';
const EMAILJS_SERVICE_ID  = 'service_pu2uz2r';
const EMAILJS_TEMPLATE_ID = 'template_vaz4rni';

export function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    const formMessage = document.querySelector('.form-message');

    if (!contactForm) return;

    // Initialise EmailJS once
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }

    const validateForm = () => {
        let isValid = true;
        const nameInput    = contactForm.querySelector('#name');
        const emailInput   = contactForm.querySelector('#email');
        const messageInput = contactForm.querySelector('#message');

        clearValidationStates();

        if (!nameInput.value.trim()) {
            setError(nameInput, 'Name is required');
            isValid = false;
        }

        if (!emailInput.value.trim()) {
            setError(emailInput, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            setError(emailInput, 'Please enter a valid email');
            isValid = false;
        }

        if (!messageInput.value.trim()) {
            setError(messageInput, 'Message is required');
            isValid = false;
        }

        return isValid;
    };

    const setError = (input, errorMessage) => {
        const formGroup = input.closest('.form-group');
        formGroup.classList.add('error');

        const errorElement = document.createElement('p');
        errorElement.className = 'form-error-text';
        errorElement.textContent = errorMessage;
        formGroup.appendChild(errorElement);
    };

    const clearValidationStates = () => {
        contactForm.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
            group.querySelector('.form-error-text')?.remove();
        });
    };

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const showFormMessage = (type, message) => {
        formMessage.className = 'form-message ' + type;
        formMessage.textContent = message;
        formMessage.style.display = 'block';

        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    };

    const submitBtn = contactForm.querySelector('.form-submit');

    const RATE_LIMIT_MS = 60 * 1000; // 1 minute between submissions

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Honeypot check — bots fill the hidden field, humans don't
        const honeypot = contactForm.querySelector('input[name="website"]');
        if (honeypot && honeypot.value) return;

        // Rate limit — prevent rapid repeated submissions
        const lastSent = parseInt(localStorage.getItem('lastFormSubmit') || '0', 10);
        if (Date.now() - lastSent < RATE_LIMIT_MS) {
            const wait = Math.ceil((RATE_LIMIT_MS - (Date.now() - lastSent)) / 1000);
            showFormMessage('error', `Please wait ${wait} seconds before sending another message.`);
            return;
        }

        if (!validateForm()) return;

        const templateParams = {
            name:    contactForm.querySelector('#name').value.trim(),
            email:   contactForm.querySelector('#email').value.trim(),
            subject: contactForm.querySelector('#subject').value.trim(),
            message: contactForm.querySelector('#message').value.trim(),
        };

        // Check if EmailJS credentials are still placeholders
        if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
            showFormMessage('error', 'Contact form not yet configured. Please email me directly at naiminafis@gmail.com');
            return;
        }

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then(() => {
                showFormMessage('success', 'Thank you! Your message has been sent.');
                localStorage.setItem('lastFormSubmit', Date.now().toString());
                contactForm.reset();
            })
            .catch(() => {
                showFormMessage('error', 'Something went wrong. Please try again or email me directly.');
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            });
    });
}
