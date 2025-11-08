


/**
 * ═══════════════════════════════════════════════════════════════
 * VETERINARY CLINIC WEBSITE - JAVASCRIPT
 * ═══════════════════════════════════════════════════════════════
 * 
 * CONFIGURATION - UPDATE THESE VALUES:
 */

// ⚠️ CHANGE THIS: Your WhatsApp number (international format, no + or spaces)
// Example: For +234 801 234 5678, use: 2348012345678
const WHATSAPP_NUMBER = '+2348034866596';

// Message Templates (you can customize these)
const MESSAGES = {
    bookAppointment: `Hi, I want to book an appointment.

Preferred Date: [Please specify]
Preferred Time: [Please specify]
Animal Type: [Pet/Farm Animal]
My Name: [Your name]

Thank you!`,

    getQuote: `Hi, please send a quote.

Item/Service: [Drug/Checkup/Training]
Animal Type: [Dog/Poultry/Fish/Cattle]
Quantity: [Specify quantity]
Preferred Delivery/Pickup: [Your preference]
Deadline: [Date needed]

Thank you!`,

    productQuote: `Hi, I'm interested in one of your products.

Product Name: [Specify product]
Animal Type: [Dog/Poultry/Fish/Cattle]
Quantity: [How many?]
Preferred Delivery: [Delivery or pickup]

Thank you!`,

    generalContact: `Hi, I have a question about your services.

[Type your message here]

Thank you!`
};

/**
 * ═══════════════════════════════════════════════════════════════
 * FUNCTIONS - DO NOT EDIT UNLESS YOU KNOW JAVASCRIPT
 * ═══════════════════════════════════════════════════════════════
 */

// Generate WhatsApp URL
function generateWhatsAppURL(message) {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

// Initialize WhatsApp Links
function initializeWhatsAppLinks() {
    // Book Appointment Button
    const bookBtn = document.getElementById('book-appointment-btn');
    if (bookBtn) {
        bookBtn.href = generateWhatsAppURL(MESSAGES.bookAppointment);
    }

    // Get Quote Button
    const quoteBtn = document.getElementById('get-quote-btn');
    if (quoteBtn) {
        quoteBtn.href = generateWhatsAppURL(MESSAGES.getQuote);
    }

    // Navigation WhatsApp
    const navWhatsApp = document.getElementById('nav-whatsapp');
    if (navWhatsApp) {
        navWhatsApp.href = generateWhatsAppURL(MESSAGES.generalContact);
    }

    // Contact Section WhatsApp
    const contactWhatsApp = document.getElementById('contact-whatsapp');
    if (contactWhatsApp) {
        contactWhatsApp.href = generateWhatsAppURL(MESSAGES.generalContact);
    }

    // Product Quote Buttons
    const productBtns = document.querySelectorAll('.product-quote-btn');
    productBtns.forEach(btn => {
        btn.href = generateWhatsAppURL(MESSAGES.productQuote);
    });
}

// Mobile Menu Toggle
function initializeMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Smooth Scroll for Anchor Links
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Ignore empty anchors or just "#"
            if (href === '#' || href === '') {
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🐾 Veterinary Clinic Website Loaded');
    console.log(`📱 WhatsApp Number: ${WHATSAPP_NUMBER}`);
    console.log('⚠️ Remember to update the WhatsApp number in /js/main.js');

    initializeWhatsAppLinks();
    initializeMobileMenu();
    initializeSmoothScroll();
});

/**
 * ═══════════════════════════════════════════════════════════════
 * ADVANCED: Custom Functions (Optional)
 * Add your own JavaScript functionality below
 * ═══════════════════════════════════════════════════════════════
 */

// Example: Add a scroll-to-top button
window.addEventListener('scroll', () => {
    // You can add a back-to-top button here if needed
});

// Example: Form validation (if you add HTML forms)
// Add your form handling code here

console.log('✅ JavaScript loaded successfully!');

