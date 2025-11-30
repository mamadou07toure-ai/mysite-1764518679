class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                :host {
                    display: block;
                    background: #1f2937;
                    color: #f9fafb;
                }

                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 3rem 2rem;
                }

                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    margin-bottom: 2rem;
                }

                .footer-section h3 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    color: #f59e0b;
                }

                .footer-section p,
                .footer-section a {
                    color: #d1d5db;
                    line-height: 1.6;
                }

                .footer-section a {
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .footer-section a:hover {
                    color: #f59e0b;
                }

                .contact-info {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 0.5rem;
                }

                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }

                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    background: #374151;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                }

                .social-link:hover {
                    background: #f59e0b;
                    transform: translateY(-2px);
                }

                .footer-bottom {
                    border-top: 1px solid #374151;
                    padding-top: 2rem;
                    text-align: center;
                    color: #9ca3af;
                }

                @media (max-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <div class="footer-content">
                <div class="footer-grid">
                    <div class="footer-section">
                        <h3>Les Délices en Guinée</h3>
                        <p>Une expérience culinaire authentique où les saveurs de la Guinée rencontrent l'élégance moderne.</p>
                        <div class="social-links">
                            <a href="#" class="social-link">
                                <i data-feather="facebook"></i>
                            </a>
                            <a href="#" class="social-link">
                                <i data-feather="instagram"></i>
                            </a>
                            <a href="#" class="social-link">
                                <i data-feather="phone"></i>
                            </a>
                            <a href="#" class="social-link">
                                <i data-feather="map-pin"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Horaires</h3>
                        <p>Lundi - Dimanche: 11h - 23h</p>
                        <p>Service continu</p>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Contact</h3>
                        <div class="contact-info">
                            <i data-feather="phone"></i>
                            <span>+224 620 67 07 58</span>
                        </div>
                        <div class="contact-info">
                            <i data-feather="mail"></i>
                            <span>contact@lesdelicesguinee.com</span>
                        </div>
                        <div class="contact-info">
                            <i data-feather="map-pin"></i>
                            <span>Centre Ville, Conakry, Guinée</span>
                        </div>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Liens Rapides</h3>
                        <p><a href="index.html">Accueil</a></p>
                        <p><a href="menu.html">Notre Menu</a></p>
                        <p><a href="reservation.html">Réserver</a></p>
                        <p><a href="contact.html">Nous Contacter</a></p>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; 2024 Les Délices en Guinée. Tous droits réservés.</p>
                </div>
            </div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);