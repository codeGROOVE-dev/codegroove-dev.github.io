// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(-5px, 6px)' : '';
            spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(-5px, -6px)' : '';
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navToggle.contains(event.target) || navMenu.contains(event.target);
        
        if (!isClickInside && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});

// Email functionality
function sendEmail() {
    const parts = ["ohai", "codegroove", "dev"];
    const email = parts[0] + "@" + parts[1] + "." + parts[2];
    
    const subject = "Let's talk about making dev life better";
    const body = "Hi codeGROOVE team,\n\nI'm interested in learning how we can reduce our push-to-merge cycle time from 4 days to 3.5 hours and bring back the fun to software development.\n\nThanks!";
    
    const mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    
    showPopup(email, mailtoLink);
}

function showPopup(email, mailtoLink) {
    // Create popup overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;
    
    // Create popup content
    const popup = document.createElement('div');
    popup.className = 'email-popup';
    popup.style.cssText = `
        background: var(--color-primary);
        border: 5px solid var(--color-secondary);
        border-bottom: 10px solid var(--color-secondary);
        border-right: 10px solid var(--color-secondary);
        box-shadow: var(--shadow-large);
        padding: 40px;
        max-width: 500px;
        width: 90%;
        text-align: center;
        font-family: var(--font-body);
        transform: rotate(-1deg);
        animation: popIn 0.3s ease;
    `;
    
    popup.innerHTML = `
        <h3 style="font-family: var(--font-primary); font-size: 2rem; font-weight: 700; margin-bottom: 20px; color: var(--color-secondary);">
            Let's Talk
        </h3>
        <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 25px; color: var(--color-secondary);">
            Email us at <a href="${mailtoLink}" style="color: var(--color-secondary); font-weight: bold;">${email}</a> to learn how we can help you ship faster and have more fun doing it.
        </p>
        <button onclick="closePopup()" class="cta-button-small" style="
            background: var(--color-white);
            color: var(--color-secondary);
        ">
            Got it
        </button>
    `;
    
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    // Close popup when clicking outside
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closePopup();
        }
    });
    
    // Store reference for closing
    window.currentPopup = overlay;
}

function closePopup() {
    if (window.currentPopup) {
        window.currentPopup.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(window.currentPopup);
            window.currentPopup = null;
        }, 300);
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    @keyframes popIn {
        from {
            opacity: 0;
            transform: scale(0.8) rotate(-1deg);
        }
        to {
            opacity: 1;
            transform: scale(1) rotate(-1deg);
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]:not([onclick])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Skip if it's just #
        if (href === '#') {
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});