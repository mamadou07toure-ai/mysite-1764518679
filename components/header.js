class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    transition: all 0.3s ease;
                }

                .header-scrolled {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
                }

                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .logo {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #d97706;
                    text-decoration: none;
                }

                .nav-links {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }

                .nav-link {
                    color: #374151;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s ease;
                }

                .nav-link:hover {
                    color: #d97706;
                }

                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: #374151;
                    cursor: pointer;
                }

                .cta-button {
                    background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
                    color: white;
                    padding: 0.5rem 1.5rem;
                    border-radius: 0.5rem;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .cta-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(217, 119, 6, 0.3);
                }

                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: block;
                    }

                    .nav-links {
                        position: fixed;
                        top: 0;
                        right: -100%;
                        width: 80%;
                        height: 100vh;
                        background: white;
                        flex-direction: column;
                        justify-content: center;
                        gap: 2rem;
                        transition: right 0.3s ease;
                    }

                    .nav-links.active {
                        right: 0;
                    }
                }
            </style>
            <nav>
                <a href="index.html" class="logo">Les Délices en Guinée</a>
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
                <div class="nav-links">
                    <a href="index.html" class="nav-link">Accueil</a>
                    <a href="menu.html" class="nav-link">Menu</a>
                    <a href="galerie.html" class="nav-link">Galerie</a>
                    <a href="apropos.html" class="nav-link">À Propos</a>
                    <a href="contact.html" class="nav-link">Contact</a>
                    <a href="reservation.html" class="cta-button">Réserver</a>
                </div>
            </nav>
        `;

        // Mobile menu functionality
        const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.contains(e.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.shadowRoot.querySelector('nav').classList.add('header-scrolled');
            } else {
                this.shadowRoot.querySelector('nav').classList.remove('header-scrolled');
            }
        });
    }
}

customElements.define('custom-header', CustomHeader);