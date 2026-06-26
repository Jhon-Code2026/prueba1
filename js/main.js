// Interactivity for Lumina Neon

document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth Scroll for Navigation and CTA Links
    document.querySelectorAll('.nav-links a, a.cta-button[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Random Flicker Effect for Hero Title
    const heroTitle = document.querySelector('.hero-title');
    
    function randomFlicker() {
        const randomTime = Math.random() * (5000 - 2000) + 2000;
        
        setTimeout(() => {
            heroTitle.style.animation = 'none';
            // Trigger reflow
            void heroTitle.offsetWidth;
            heroTitle.style.animation = 'flicker 3s infinite alternate';
            randomFlicker();
        }, randomTime);
    }

    randomFlicker();

    // Scroll Reveal Animation (Simple Implementation)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .portfolio-item, .contact-form').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    // Form Submission Handling
    const contactForm = document.querySelector('.contact-form');
    
    // Add _next dynamically to redirect back to the page after submission (only if hosted on server)
    if (window.location.protocol !== 'file:') {
        const nextInput = document.createElement('input');
        nextInput.type = 'hidden';
        nextInput.name = '_next';
        nextInput.value = window.location.href;
        contactForm.appendChild(nextInput);
    }

    contactForm.addEventListener('submit', () => {
        const btn = contactForm.querySelector('button');
        btn.innerText = 'Enviando...';
        btn.style.background = 'var(--neon-pink)';
        btn.style.borderColor = 'var(--neon-pink)';
        btn.style.boxShadow = '0 0 20px var(--neon-pink)';
    });

});
