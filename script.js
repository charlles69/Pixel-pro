// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Category buttons
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Obrigado por entrar em contato! Responderemos em breve.');
            contactForm.reset();
        });
    }
});
// Em scripts.js - Atualize com:
document.addEventListener('DOMContentLoaded', function() {
    // ... código existente ...
    
    // Filtro de cursos
    const categoryBtns = document.querySelectorAll('.category-btn');
    const courseCards = document.querySelectorAll('.course-card');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.textContent.toLowerCase();
            
            courseCards.forEach(card => {
                if (category === 'todos' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Sistema de avaliação
    const ratingStars = document.querySelectorAll('.rating i');
    ratingStars.forEach(star => {
        star.addEventListener('click', function() {
            const ratingContainer = this.parentElement;
            const stars = ratingContainer.querySelectorAll('i');
            const clickedIndex = Array.from(stars).indexOf(this);
            
            stars.forEach((s, index) => {
                if (index <= clickedIndex) {
                    s.classList.remove('far');
                    s.classList.add('fas');
                } else {
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
        });
    });
});