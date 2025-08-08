// Website Generator - Converts admin data to website HTML
class WebsiteGenerator {
    constructor() {
        this.templatePath = '../index.html';
        this.outputPath = '../index.html';
    }

    async generateWebsite() {
        try {
            // Load admin data
            const adminData = this.loadAdminData();
            
            // Load website template
            const template = await this.loadTemplate();
            
            // Generate updated HTML
            const updatedHTML = this.updateHTML(template, adminData);
            
            // Save updated website
            await this.saveWebsite(updatedHTML);
            
            console.log('Website generated successfully!');
            return true;
        } catch (error) {
            console.error('Error generating website:', error);
            return false;
        }
    }

    loadAdminData() {
        const saved = localStorage.getItem('botanicPartnersData');
        return saved ? JSON.parse(saved) : {};
    }

    async loadTemplate() {
        try {
            const response = await fetch(this.templatePath);
            return await response.text();
        } catch (error) {
            throw new Error('Could not load website template');
        }
    }

    updateHTML(template, data) {
        let html = template;

        // Update hero section
        if (data.hero) {
            html = this.updateHeroSection(html, data.hero);
        }

        // Update about section
        if (data.about) {
            html = this.updateAboutSection(html, data.about);
        }

        // Update contact section
        if (data.contact) {
            html = this.updateContactSection(html, data.contact);
        }

        // Update products section
        if (data.products) {
            html = this.updateProductsSection(html, data.products);
        }

        // Update settings
        if (data.settings) {
            html = this.updateSettings(html, data.settings);
        }

        return html;
    }

    updateHeroSection(html, heroData) {
        // Update hero title
        if (heroData.title_en) {
            html = html.replace(
                /<span data-en="Cherry Laurel\." data-cs="Bobkovišeň\.">Cherry Laurel\.<\/span>/,
                `<span data-en="${heroData.title_en}" data-cs="${heroData.title_cs || 'Bobkovišeň.'}">${heroData.title_en}</span>`
            );
        }

        if (heroData.subtitle_en) {
            html = html.replace(
                /<span class="hero-subtitle" data-en="Redefined\." data-cs="Předefinováno\.">Redefined\.<\/span>/,
                `<span class="hero-subtitle" data-en="${heroData.subtitle_en}" data-cs="${heroData.subtitle_cs || 'Předefinováno.'}">${heroData.subtitle_en}</span>`
            );
        }

        if (heroData.description_en) {
            html = html.replace(
                /<p class="hero-description" data-en="Experience the pinnacle of horticultural excellence\. Premium cherry laurel varieties, meticulously cultivated for discerning landscapes\." data-cs="Zažijte vrchol zahradnické dokonalosti\. Prémiové odrůdy bobkovišně, pečlivě pěstované pro náročné krajiny\.">Experience the pinnacle of horticultural excellence\. Premium cherry laurel varieties, meticulously cultivated for discerning landscapes\.<\/p>/,
                `<p class="hero-description" data-en="${heroData.description_en}" data-cs="${heroData.description_cs || 'Zažijte vrchol zahradnické dokonalosti. Prémiové odrůdy bobkovišně, pečlivě pěstované pro náročné krajiny.'}">${heroData.description_en}</p>`
            );
        }

        if (heroData.image) {
            html = html.replace(
                /src="https:\/\/images\.unsplash\.com\/photo-1441974231531-c6227db76b6e\?ixlib=rb-4\.0\.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"/,
                `src="${heroData.image}"`
            );
        }

        return html;
    }

    updateAboutSection(html, aboutData) {
        if (aboutData.title_en) {
            html = html.replace(
                /<h2 data-en="About Botanic Partners" data-cs="O Botanic Partners">About Botanic Partners<\/h2>/,
                `<h2 data-en="${aboutData.title_en}" data-cs="${aboutData.title_cs || 'O Botanic Partners'}">${aboutData.title_en}</h2>`
            );
        }

        if (aboutData.subtitle_en) {
            html = html.replace(
                /<p class="section-subtitle" data-en="Where nature meets precision engineering" data-cs="Kde se příroda setkává s precizním inženýrstvím">Where nature meets precision engineering<\/p>/,
                `<p class="section-subtitle" data-en="${aboutData.subtitle_en}" data-cs="${aboutData.subtitle_cs || 'Kde se příroda setkává s precizním inženýrstvím'}">${aboutData.subtitle_en}</p>`
            );
        }

        if (aboutData.lead_en) {
            html = html.replace(
                /<p class="lead-text" data-en="Founded with a passion for horticultural excellence, Botanic Partners represents the convergence of traditional cultivation wisdom and modern precision techniques\." data-cs="Založena s vášní pro zahradnickou dokonalost, Botanic Partners představuje spojení tradiční moudrosti pěstování a moderních precizních technik\.">Founded with a passion for horticultural excellence, Botanic Partners represents the convergence of traditional cultivation wisdom and modern precision techniques\.<\/p>/,
                `<p class="lead-text" data-en="${aboutData.lead_en}" data-cs="${aboutData.lead_cs || 'Založena s vášní pro zahradnickou dokonalost, Botanic Partners představuje spojení tradiční moudrosti pěstování a moderních precizních technik.'}">${aboutData.lead_en}</p>`
            );
        }

        if (aboutData.image) {
            html = html.replace(
                /src="https:\/\/images\.unsplash\.com\/photo-1466692476868-aef1dfb1e735\?ixlib=rb-4\.0\.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"/,
                `src="${aboutData.image}"`
            );
        }

        return html;
    }

    updateContactSection(html, contactData) {
        if (contactData.phone) {
            html = html.replace(
                /<span class="contact-value">\+420 123 456 789<\/span>/,
                `<span class="contact-value">${contactData.phone}</span>`
            );
        }

        if (contactData.email) {
            html = html.replace(
                /<span class="contact-value">info@botanicpartners\.cz<\/span>/,
                `<span class="contact-value">${contactData.email}</span>`
            );
        }

        if (contactData.address_en) {
            html = html.replace(
                /<span class="contact-value" data-en="123 Garden Lane, Prague, Czech Republic" data-cs="Zahradní 123, Praha, Česká republika">123 Garden Lane, Prague, Czech Republic<\/span>/,
                `<span class="contact-value" data-en="${contactData.address_en}" data-cs="${contactData.address_cs || 'Zahradní 123, Praha, Česká republika'}">${contactData.address_en}</span>`
            );
        }

        if (contactData.hours_en) {
            html = html.replace(
                /<span class="contact-value" data-en="Mon-Fri: 8AM-6PM \| Sat: 9AM-4PM" data-cs="Po-Pá: 8:00-18:00 \| So: 9:00-16:00">Mon-Fri: 8AM-6PM \| Sat: 9AM-4PM<\/span>/,
                `<span class="contact-value" data-en="${contactData.hours_en}" data-cs="${contactData.hours_cs || 'Po-Pá: 8:00-18:00 | So: 9:00-16:00'}">${contactData.hours_en}</span>`
            );
        }

        return html;
    }

    updateProductsSection(html, productsData) {
        // Update each product
        Object.keys(productsData).forEach(productId => {
            const product = productsData[productId];
            html = this.updateProduct(html, productId, product);
        });

        return html;
    }

    updateProduct(html, productId, product) {
        const productSelectors = {
            'standard': {
                nameSelector: 'Standard Cherry Laurel',
                imageSelector: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80'
            },
            'dwarf': {
                nameSelector: 'Dwarf Cherry Laurel',
                imageSelector: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
            },
            'premium': {
                nameSelector: 'Premium Specimens',
                imageSelector: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
            }
        };

        const selector = productSelectors[productId];
        if (!selector) return html;

        // Update product name
        if (product.name_en) {
            const nameRegex = new RegExp(`<h3 data-en="${selector.nameSelector}" data-cs="[^"]*">${selector.nameSelector}</h3>`, 'g');
            html = html.replace(nameRegex, `<h3 data-en="${product.name_en}" data-cs="${product.name_cs || ''}">${product.name_en}</h3>`);
        }

        // Update product description
        if (product.description_en) {
            const descRegex = new RegExp(`<p class="product-description" data-en="[^"]*" data-cs="[^"]*">[^<]*</p>`, 'g');
            html = html.replace(descRegex, `<p class="product-description" data-en="${product.description_en}" data-cs="${product.description_cs || ''}">${product.description_en}</p>`);
        }

        // Update product image
        if (product.image) {
            html = html.replace(
                new RegExp(`src="${selector.imageSelector}"`, 'g'),
                `src="${product.image}"`
            );
        }

        // Update product specifications
        if (product.specs) {
            if (product.specs.height_en) {
                html = html.replace(
                    /<span class="spec-value" data-en="15-20 feet" data-cs="4,5-6 metrů">15-20 feet<\/span>/,
                    `<span class="spec-value" data-en="${product.specs.height_en}" data-cs="${product.specs.height_cs || ''}">${product.specs.height_en}</span>`
                );
            }

            if (product.specs.spread_en) {
                html = html.replace(
                    /<span class="spec-value" data-en="8-12 feet" data-cs="2,5-3,5 metrů">8-12 feet<\/span>/,
                    `<span class="spec-value" data-en="${product.specs.spread_en}" data-cs="${product.specs.spread_cs || ''}">${product.specs.spread_en}</span>`
                );
            }

            if (product.specs.growth_rate_en) {
                html = html.replace(
                    /<span class="spec-value" data-en="Fast" data-cs="Rychlý">Fast<\/span>/,
                    `<span class="spec-value" data-en="${product.specs.growth_rate_en}" data-cs="${product.specs.growth_rate_cs || ''}">${product.specs.growth_rate_en}</span>`
                );
            }
        }

        return html;
    }

    updateSettings(html, settingsData) {
        if (settingsData.site_title) {
            html = html.replace(
                /<title>Botanic Partners - Premium Cherry Laurel<\/title>/,
                `<title>${settingsData.site_title}</title>`
            );
        }

        if (settingsData.meta_description) {
            html = html.replace(
                /<meta name="viewport" content="width=device-width, initial-scale=1\.0">/,
                `<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${settingsData.meta_description}">`
            );
        }

        return html;
    }

    async saveWebsite(html) {
        // In a real implementation, this would save to the server
        // For now, we'll create a download link
        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = 'index.html';
        link.click();
        
        URL.revokeObjectURL(url);
    }
}

// Global function to generate website
function generateWebsite() {
    const generator = new WebsiteGenerator();
    return generator.generateWebsite();
}

// Add generate button to admin interface
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.createElement('button');
    generateBtn.className = 'btn btn-primary';
    generateBtn.innerHTML = '<i class="fas fa-download"></i> Generate Website';
    generateBtn.onclick = generateWebsite;
    
    // Add to dashboard quick actions
    const actionButtons = document.querySelector('.action-buttons');
    if (actionButtons) {
        actionButtons.appendChild(generateBtn);
    }
}); 