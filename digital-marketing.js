// Smooth scroll to form
function scrollToForm() {
    const form = document.getElementById('registration-form');
    const offset = 100;
    const elementPosition = form.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// FAQ Toggle
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const allFaqItems = document.querySelectorAll('.faq-item');
    
    // Close all other FAQ items
    allFaqItems.forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current FAQ item
    faqItem.classList.toggle('active');
}

// Form submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value
    };
    
    // Show success message
    alert(`Registration Successful!

Thank you, ${formData.name}!

Your seat has been reserved for the Digital Marketing Workshop.

Confirmation details will be sent to ${formData.email}

Workshop Details:
📅 Date: January 12, 2026
⏰ Time: 10:30 AM - 4:30 PM
💻 Mode: Online (Zoom)
💰 Fee: ₹1000

We'll send you the payment link and joining instructions shortly.`);
    
    // Reset form
    this.reset();
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(30, 30, 47, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(30, 30, 47, 0.95)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.about-card, .advantage-item, .faq-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Countdown timer for seats (optional dynamic feature)
function updateSeatsRemaining() {
    const seatsElement = document.querySelector('.footer-seats span:last-child');
    const seats = Math.floor(Math.random() * 8) + 3; // Random number between 3-10
    
    if (seatsElement) {
        seatsElement.textContent = `Only ${seats} seats remaining!`;
    }
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-left');
    
    if (heroContent && scrolled < 800) {
        heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Phone number validation
document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 10) {
        value = value.slice(0, 10);
    }
    e.target.value = value;
});

// Email validation
document.getElementById('email').addEventListener('blur', function(e) {
    const email = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && !emailRegex.test(email)) {
        e.target.style.borderColor = '#ff4444';
    } else {
        e.target.style.borderColor = 'rgba(232, 69, 69, 0.2)';
    }
});

// Initialize on load
window.addEventListener('load', () => {
    // Add entrance animations
    const heroLeft = document.querySelector('.hero-left');
    const heroRight = document.querySelector('.hero-right');
    
    if (heroLeft) {
        heroLeft.style.animation = 'fadeInLeft 1s ease-out';
    }
    
    if (heroRight) {
        heroRight.style.animation = 'fadeInRight 1s ease-out';
    }
    
    // Update seats periodically (every 30 seconds)
    updateSeatsRemaining();
    setInterval(updateSeatsRemaining, 30000);
});

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
