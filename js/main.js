// Interactivity for Lumina Neon

document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth Scroll for Navigation Links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
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

    // Form Submission Handling (Mockup)
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = '¡Enviado!';
        btn.style.background = 'var(--neon-pink)';
        btn.style.borderColor = 'var(--neon-pink)';
        btn.style.boxShadow = '0 0 20px var(--neon-pink)';
        
        contactForm.reset();
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = 'transparent';
            btn.style.borderColor = 'var(--neon-cyan)';
            btn.style.boxShadow = '0 0 10px rgba(0, 243, 255, 0.2)';
        }, 3000);
    });

});
