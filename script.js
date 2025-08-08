// Language switching functionality
let currentLanguage = 'en';

function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all elements with data attributes
    document.querySelectorAll('[data-en], [data-cs]').forEach(element => {
        const enText = element.getAttribute('data-en');
        const csText = element.getAttribute('data-cs');
        
        if (lang === 'en' && enText) {
            element.textContent = enText;
        } else if (lang === 'cs' && csText) {
            element.textContent = csText;
        }
    });
    
    // Update placeholders
    document.querySelectorAll('input[data-en-placeholder], input[data-cs-placeholder], textarea[data-en-placeholder], textarea[data-cs-placeholder]').forEach(element => {
        const enPlaceholder = element.getAttribute('data-en-placeholder');
        const csPlaceholder = element.getAttribute('data-cs-placeholder');
        
        if (lang === 'en' && enPlaceholder) {
            element.placeholder = enPlaceholder;
        } else if (lang === 'cs' && csPlaceholder) {
            element.placeholder = csPlaceholder;
        }
    });
    
    // Update select options
    document.querySelectorAll('option[data-en], option[data-cs]').forEach(option => {
        const enText = option.getAttribute('data-en');
        const csText = option.getAttribute('data-cs');
        
        if (lang === 'en' && enText) {
            option.textContent = enText;
        } else if (lang === 'cs' && csText) {
            option.textContent = csText;
        }
    });
    
    // Store language preference
    localStorage.setItem('preferred-language', lang);
}

// Initialize language switcher
document.addEventListener('DOMContentLoaded', () => {
    // Set up language button event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            switchLanguage(lang);
        });
    });
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage) {
        switchLanguage(savedLanguage);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const product = this.querySelector('select').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            const errorMsg = currentLanguage === 'cs' ? 'Prosím vyplňte všechna povinná pole.' : 'Please fill in all required fields.';
            alert(errorMsg);
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            const errorMsg = currentLanguage === 'cs' ? 'Prosím zadejte platnou emailovou adresu.' : 'Please enter a valid email address.';
            alert(errorMsg);
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        const sendingText = currentLanguage === 'cs' ? 'Odesílání...' : 'Sending...';
        submitBtn.textContent = sendingText;
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            const successMsg = currentLanguage === 'cs' ? 'Děkujeme za vaši zprávu! Budeme vás kontaktovat brzy.' : 'Thank you for your message! We will get back to you soon.';
            alert(successMsg);
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.product-card, .service-card, .feature');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation to images (if any real images are added later)
function preloadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    preloadImages();
});

// Add hover effects for better interactivity
document.querySelectorAll('.product-card, .service-card, .feature').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add scroll-to-top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #007aff;
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 20px rgba(0, 122, 255, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 