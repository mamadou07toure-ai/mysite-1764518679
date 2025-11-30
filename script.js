// Main JavaScript for Les Délices en Guinée

// Form handling for WhatsApp integration
function handleFormSubmission(formData, formType) {
    const phoneNumber = '+224620670758';
    let message = '';
    
    switch(formType) {
        case 'reservation':
            message = `📅 NOUVELLE RÉSERVATION\n\n` +
                     `👤 Nom: ${formData.name}\n` +
                     `📞 Téléphone: ${formData.phone}\n` +
                     `📧 Email: ${formData.email}\n` +
                     `👥 Nombre de personnes: ${formData.guests}\n` +
                     `📅 Date: ${formData.date}\n` +
                     `⏰ Heure: ${formData.time}\n` +
                     `💬 Message: ${formData.message || 'Aucun'}`;
            break;
            
        case 'contact':
            message = `📧 NOUVEAU MESSAGE DE CONTACT\n\n` +
                     `👤 Nom: ${formData.name}\n` +
                     `📞 Téléphone: ${formData.phone}\n` +
                     `📧 Email: ${formData.email}\n` +
                     `📝 Sujet: ${formData.subject}\n` +
                     `💬 Message: ${formData.message}`;
            break;
            
        case 'commande':
            message = `🛒 NOUVELLE COMMANDE\n\n` +
                     `👤 Nom: ${formData.name}\n` +
                     `📞 Téléphone: ${formData.phone}\n` +
                     `📍 Adresse: ${formData.address}\n` +
                     `🍽️ Commande: ${formData.order}\n` +
                     `💬 Instructions: ${formData.instructions || 'Aucune'}`;
            break;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// Initialize all forms
document.addEventListener('DOMContentLoaded', function() {
    // Reservation form
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = {
                name: this.querySelector('[name="name"]').value,
                phone: this.querySelector('[name="phone"]').value,
                email: this.querySelector('[name="email"]').value,
                guests: this.querySelector('[name="guests"]').value,
                date: this.querySelector('[name="date"]').value,
                time: this.querySelector('[name="time"]').value,
                message: this.querySelector('[name="message"]').value
            };
            handleFormSubmission(formData, 'reservation');
        });
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = {
                name: this.querySelector('[name="name"]').value,
                phone: this.querySelector('[name="phone"]').value,
                email: this.querySelector('[name="email"]').value,
                subject: this.querySelector('[name="subject"]').value,
                message: this.querySelector('[name="message"]').value
            };
            handleFormSubmission(formData, 'contact');
        });
    }

    // Order form
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = {
                name: this.querySelector('[name="name"]').value,
                phone: this.querySelector('[name="phone"]').value,
                address: this.querySelector('[name="address"]').value,
                order: this.querySelector('[name="order"]').value,
                instructions: this.querySelector('[name="instructions"]').value
            };
            handleFormSubmission(formData, 'commande');
        });
    }

    // Smooth scroll for anchor links
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

    // Add loading states to buttons
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function() {
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.innerHTML = '<div class="loading-spinner mx-auto"></div>';
                submitBtn.disabled = true;
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animation class
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
});

// Utility function for currency formatting
function formatCurrency(amount) {
    return new Intl.NumberFormat('fr-GN', {
        style: 'currency',
        currency: 'GNF'
    }).format(amount);
}