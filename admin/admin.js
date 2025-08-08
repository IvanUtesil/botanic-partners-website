// Admin Dashboard JavaScript
class AdminDashboard {
    constructor() {
        this.currentSection = 'dashboard';
        this.websiteData = this.loadWebsiteData();
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupFormHandlers();
        this.loadCurrentData();
        this.setupModalHandlers();
    }

    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const section = item.dataset.section;
                this.switchSection(section);
            });
        });
    }

    switchSection(sectionName) {
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

        // Update content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionName).classList.add('active');

        // Update breadcrumb
        document.getElementById('current-section').textContent = this.getSectionTitle(sectionName);
        
        this.currentSection = sectionName;
        this.loadCurrentData();
    }

    getSectionTitle(section) {
        const titles = {
            'dashboard': 'Dashboard',
            'hero': 'Hero Section',
            'about': 'About Section',
            'products': 'Products Management',
            'services': 'Services',
            'contact': 'Contact Information',
            'settings': 'Website Settings'
        };
        return titles[section] || section;
    }

    setupFormHandlers() {
        // Hero form
        const heroForm = document.getElementById('hero-form');
        if (heroForm) {
            heroForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveHeroData();
            });
        }

        // About form
        const aboutForm = document.getElementById('about-form');
        if (aboutForm) {
            aboutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveAboutData();
            });
        }

        // Contact form
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveContactData();
            });
        }

        // Settings form
        const settingsForm = document.getElementById('settings-form');
        if (settingsForm) {
            settingsForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveSettingsData();
            });
        }

        // Product form
        const productForm = document.getElementById('product-form');
        if (productForm) {
            productForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveProductData();
            });
        }
    }

    setupModalHandlers() {
        // Close modal when clicking outside
        const modal = document.getElementById('product-modal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal();
                }
            });
        }
    }

    loadCurrentData() {
        switch (this.currentSection) {
            case 'hero':
                this.loadHeroData();
                break;
            case 'about':
                this.loadAboutData();
                break;
            case 'contact':
                this.loadContactData();
                break;
            case 'settings':
                this.loadSettingsData();
                break;
        }
    }

    loadHeroData() {
        const form = document.getElementById('hero-form');
        if (!form) return;

        const data = this.websiteData.hero || {};
        form.querySelector('[name="hero_title_en"]').value = data.title_en || 'Cherry Laurel.';
        form.querySelector('[name="hero_subtitle_en"]').value = data.subtitle_en || 'Redefined.';
        form.querySelector('[name="hero_title_cs"]').value = data.title_cs || 'Bobkovišeň.';
        form.querySelector('[name="hero_subtitle_cs"]').value = data.subtitle_cs || 'Předefinováno.';
        form.querySelector('[name="hero_description_en"]').value = data.description_en || 'Experience the pinnacle of horticultural excellence. Premium cherry laurel varieties, meticulously cultivated for discerning landscapes.';
        form.querySelector('[name="hero_description_cs"]').value = data.description_cs || 'Zažijte vrchol zahradnické dokonalosti. Prémiové odrůdy bobkovišně, pečlivě pěstované pro náročné krajiny.';
        form.querySelector('[name="hero_image"]').value = data.image || 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80';
    }

    loadAboutData() {
        const form = document.getElementById('about-form');
        if (!form) return;

        const data = this.websiteData.about || {};
        form.querySelector('[name="about_title_en"]').value = data.title_en || 'About Botanic Partners';
        form.querySelector('[name="about_title_cs"]').value = data.title_cs || 'O Botanic Partners';
        form.querySelector('[name="about_subtitle_en"]').value = data.subtitle_en || 'Where nature meets precision engineering';
        form.querySelector('[name="about_subtitle_cs"]').value = data.subtitle_cs || 'Kde se příroda setkává s precizním inženýrstvím';
        form.querySelector('[name="about_lead_en"]').value = data.lead_en || 'Founded with a passion for horticultural excellence, Botanic Partners represents the convergence of traditional cultivation wisdom and modern precision techniques.';
        form.querySelector('[name="about_lead_cs"]').value = data.lead_cs || 'Založena s vášní pro zahradnickou dokonalost, Botanic Partners představuje spojení tradiční moudrosti pěstování a moderních precizních technik.';
        form.querySelector('[name="about_image"]').value = data.image || 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
    }

    loadContactData() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        const data = this.websiteData.contact || {};
        form.querySelector('[name="phone"]').value = data.phone || '+420 123 456 789';
        form.querySelector('[name="email"]').value = data.email || 'info@botanicpartners.cz';
        form.querySelector('[name="address_en"]').value = data.address_en || '123 Garden Lane, Prague, Czech Republic';
        form.querySelector('[name="address_cs"]').value = data.address_cs || 'Zahradní 123, Praha, Česká republika';
        form.querySelector('[name="hours_en"]').value = data.hours_en || 'Mon-Fri: 8AM-6PM | Sat: 9AM-4PM';
        form.querySelector('[name="hours_cs"]').value = data.hours_cs || 'Po-Pá: 8:00-18:00 | So: 9:00-16:00';
    }

    loadSettingsData() {
        const form = document.getElementById('settings-form');
        if (!form) return;

        const data = this.websiteData.settings || {};
        form.querySelector('[name="site_title"]').value = data.site_title || 'Botanic Partners - Premium Cherry Laurel';
        form.querySelector('[name="default_language"]').value = data.default_language || 'en';
        form.querySelector('[name="ga_id"]').value = data.ga_id || '';
        form.querySelector('[name="meta_description"]').value = data.meta_description || '';
    }

    saveHeroData() {
        const form = document.getElementById('hero-form');
        const formData = new FormData(form);
        
        this.websiteData.hero = {
            title_en: formData.get('hero_title_en'),
            subtitle_en: formData.get('hero_subtitle_en'),
            title_cs: formData.get('hero_title_cs'),
            subtitle_cs: formData.get('hero_subtitle_cs'),
            description_en: formData.get('hero_description_en'),
            description_cs: formData.get('hero_description_cs'),
            image: formData.get('hero_image')
        };

        this.saveWebsiteData();
        this.showMessage('Hero section updated successfully!', 'success');
    }

    saveAboutData() {
        const form = document.getElementById('about-form');
        const formData = new FormData(form);
        
        this.websiteData.about = {
            title_en: formData.get('about_title_en'),
            title_cs: formData.get('about_title_cs'),
            subtitle_en: formData.get('about_subtitle_en'),
            subtitle_cs: formData.get('about_subtitle_cs'),
            lead_en: formData.get('about_lead_en'),
            lead_cs: formData.get('about_lead_cs'),
            image: formData.get('about_image')
        };

        this.saveWebsiteData();
        this.showMessage('About section updated successfully!', 'success');
    }

    saveContactData() {
        const form = document.getElementById('contact-form');
        const formData = new FormData(form);
        
        this.websiteData.contact = {
            phone: formData.get('phone'),
            email: formData.get('email'),
            address_en: formData.get('address_en'),
            address_cs: formData.get('address_cs'),
            hours_en: formData.get('hours_en'),
            hours_cs: formData.get('hours_cs')
        };

        this.saveWebsiteData();
        this.showMessage('Contact information updated successfully!', 'success');
    }

    saveSettingsData() {
        const form = document.getElementById('settings-form');
        const formData = new FormData(form);
        
        this.websiteData.settings = {
            site_title: formData.get('site_title'),
            default_language: formData.get('default_language'),
            ga_id: formData.get('ga_id'),
            meta_description: formData.get('meta_description')
        };

        this.saveWebsiteData();
        this.showMessage('Settings updated successfully!', 'success');
    }

    editProduct(productId) {
        const product = this.websiteData.products?.[productId] || this.getDefaultProductData(productId);
        const modal = document.getElementById('product-modal');
        const form = document.getElementById('product-form');
        
        // Populate form with product data
        form.querySelector('[name="product_name_en"]').value = product.name_en || '';
        form.querySelector('[name="product_name_cs"]').value = product.name_cs || '';
        form.querySelector('[name="product_description_en"]').value = product.description_en || '';
        form.querySelector('[name="product_description_cs"]').value = product.description_cs || '';
        form.querySelector('[name="product_image"]').value = product.image || '';
        form.querySelector('[name="height_en"]').value = product.specs?.height_en || '';
        form.querySelector('[name="height_cs"]').value = product.specs?.height_cs || '';
        form.querySelector('[name="spread_en"]').value = product.specs?.spread_en || '';
        form.querySelector('[name="spread_cs"]').value = product.specs?.spread_cs || '';
        form.querySelector('[name="growth_rate_en"]').value = product.specs?.growth_rate_en || '';
        form.querySelector('[name="growth_rate_cs"]').value = product.specs?.growth_rate_cs || '';
        
        // Store current product ID
        form.dataset.productId = productId;
        
        // Update modal title
        document.getElementById('modal-title').textContent = `Edit ${product.name_en || 'Product'}`;
        
        modal.classList.add('active');
    }

    getDefaultProductData(productId) {
        const defaults = {
            'standard': {
                name_en: 'Standard Cherry Laurel',
                name_cs: 'Standardní bobkovišeň',
                description_en: 'The definitive choice for privacy screens and formal hedges. Mature specimens with exceptional density and year-round beauty.',
                description_cs: 'Definitivní volba pro soukromé obrazovky a formální živé ploty. Zralé exempláře s výjimečnou hustotou a celoroční krásou.',
                image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80',
                specs: {
                    height_en: '15-20 feet',
                    height_cs: '4,5-6 metrů',
                    spread_en: '8-12 feet',
                    spread_cs: '2,5-3,5 metrů',
                    growth_rate_en: 'Fast',
                    growth_rate_cs: 'Rychlý'
                }
            },
            'dwarf': {
                name_en: 'Dwarf Cherry Laurel',
                name_cs: 'Trpasličí bobkovišeň',
                description_en: 'Perfect for contemporary gardens and container cultivation. Maintains elegant proportions while delivering maximum impact.',
                description_cs: 'Perfektní pro současné zahrady a pěstování v nádobách. Zachovává elegantní proporce při maximálním účinku.',
                image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                specs: {
                    height_en: '6-8 feet',
                    height_cs: '1,8-2,4 metrů',
                    spread_en: '4-6 feet',
                    spread_cs: '1,2-1,8 metrů',
                    growth_rate_en: 'Moderate',
                    growth_rate_cs: 'Střední'
                }
            },
            'premium': {
                name_en: 'Premium Specimens',
                name_cs: 'Prémiové exempláře',
                description_en: 'Mature, architectural specimens ready for immediate impact. The ultimate statement piece for discerning landscapes.',
                description_cs: 'Zralé, architektonické exempláře připravené pro okamžitý účinek. Ultimátní výrazový prvek pro náročné krajiny.',
                image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
                specs: {
                    height_en: '12-18 feet',
                    height_cs: '3,5-5,5 metrů',
                    spread_en: '8-15 feet',
                    spread_cs: '2,5-4,5 metrů',
                    growth_rate_en: '5-10 years',
                    growth_rate_cs: '5-10 let'
                }
            }
        };
        
        return defaults[productId] || {};
    }

    saveProductData() {
        const form = document.getElementById('product-form');
        const formData = new FormData(form);
        const productId = form.dataset.productId;
        
        if (!this.websiteData.products) {
            this.websiteData.products = {};
        }
        
        this.websiteData.products[productId] = {
            name_en: formData.get('product_name_en'),
            name_cs: formData.get('product_name_cs'),
            description_en: formData.get('product_description_en'),
            description_cs: formData.get('product_description_cs'),
            image: formData.get('product_image'),
            specs: {
                height_en: formData.get('height_en'),
                height_cs: formData.get('height_cs'),
                spread_en: formData.get('spread_en'),
                spread_cs: formData.get('spread_cs'),
                growth_rate_en: formData.get('growth_rate_en'),
                growth_rate_cs: formData.get('growth_rate_cs')
            }
        };

        this.saveWebsiteData();
        this.showMessage('Product updated successfully!', 'success');
        this.closeModal();
    }

    closeModal() {
        const modal = document.getElementById('product-modal');
        modal.classList.remove('active');
    }

    loadWebsiteData() {
        const saved = localStorage.getItem('botanicPartnersData');
        return saved ? JSON.parse(saved) : {};
    }

    saveWebsiteData() {
        localStorage.setItem('botanicPartnersData', JSON.stringify(this.websiteData));
    }

    showMessage(message, type = 'info') {
        // Remove existing messages
        const existingMessages = document.querySelectorAll('.message');
        existingMessages.forEach(msg => msg.remove());

        // Create new message
        const messageEl = document.createElement('div');
        messageEl.className = `message ${type}`;
        messageEl.textContent = message;
        
        // Add to page
        document.body.appendChild(messageEl);
        
        // Remove after 3 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 3000);
    }

    // Method to export data for website generation
    exportWebsiteData() {
        return this.websiteData;
    }
}

// Global functions for HTML onclick handlers
function switchSection(section) {
    if (window.adminDashboard) {
        window.adminDashboard.switchSection(section);
    }
}

function editProduct(productId) {
    if (window.adminDashboard) {
        window.adminDashboard.editProduct(productId);
    }
}

function closeModal() {
    if (window.adminDashboard) {
        window.adminDashboard.closeModal();
    }
}

// Initialize admin dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.adminDashboard = new AdminDashboard();
}); 