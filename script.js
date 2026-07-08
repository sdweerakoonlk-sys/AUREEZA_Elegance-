// ============================================
// AUREEZA - ELEGANCE REDEFINED
// Updated JavaScript with 40 Products & Creative Images
// ============================================

const products = [
    // Clothing - 10 items
    { id: 1, name: "Elegant Maxi Dress (Red)", category: "clothing", price: 45.99, description: "Beautiful red evening dress perfect for special occasions", image: "images/KBPTUc947PaD.jpg" },
    { id: 2, name: "Minimalist White Midi Dress", category: "clothing", price: 38.99, description: "Stunning white dress for elegant parties", image: "images/6bOkk07DPeNi.jpg" },
    { id: 3, name: "Luxury Party Wear Collection", category: "clothing", price: 49.99, description: "Luxurious collection for sophisticated events", image: "images/dBT3zozht3CH.jpg" },
    { id: 4, name: "Kids Designer Studio Outfit", category: "clothing", price: 42.99, description: "Chic studio outfit for kids", image: "images/7GnJ8SC9k6Es.jpg" },
    { id: 5, name: "Designer Handbag & Dress Set", category: "clothing", price: 39.99, description: "Perfectly matched handbag and dress set", image: "images/4LIuxSnPH98o.jpg" },
    { id: 6, name: "Kids Autumn Fashion Collection", category: "clothing", price: 55.99, description: "High-quality autumn fashion for kids", image: "images/Sz1TGVciCOBe.jpg" },
    { id: 7, name: "Premium Accessories & Dress Combo", category: "clothing", price: 89.99, description: "Complete premium look with dress and accessories", image: "images/WRJyoxKe37XK.jpg" },
    { id: 8, name: "Elegant Photoshoot Gown (Blue)", category: "clothing", price: 29.99, description: "Stunning blue gown for professional photoshoots", image: "images/mEcnnfv9AaRP.jpg" },
    { id: 9, name: "Rustic Photoshoot Dress (Brown)", category: "clothing", price: 65.99, description: "Beautiful brown dress for rustic themed shoots", image: "images/MOHEZBaEwVdj.jpg" },
    { id: 10, name: "Sunset Golden Hour Gown", category: "clothing", price: 32.99, description: "Golden hour gown for a magical look", image: "images/9hcK0ZcbT7at.jpg" },
    
    // Jewelry - 10 items
    { id: 11, name: "Minimalist Gold Hoop Earrings", category: "jewelry", price: 59.99, description: "Elegant gold hoop earrings for a minimalist look", image: "images/JbhRGGdXNCHy.jpg" },
    { id: 12, name: "Luxury Diamond Necklace & Perfume", category: "jewelry", price: 45.99, description: "Exquisite diamond necklace paired with premium perfume", image: "images/HNxDXU7Fkiu8.jpg" },
    { id: 13, name: "Versatile Jewelry Props Collection", category: "jewelry", price: 69.99, description: "Diverse jewelry collection for various styles", image: "images/fA9eCcOcsS4k.webp" },
    { id: 14, name: "Real Gold Small Coins Beads", category: "jewelry", price: 25.99, description: "Unique gold coin beads for DIY jewelry", image: "images/rD8a2NfRiSDd.jpg" },
    { id: 15, name: "Rhinestone Finger Ring Bracelet", category: "jewelry", price: 18.99, description: "Crystal finger ring bracelet for weddings", image: "images/On0gSY4dONM3.jpg" },
    { id: 16, name: "Dainty Silver Jewelry Set", category: "jewelry", price: 89.99, description: "Delicate silver jewelry set for a refined look", image: "images/j4SlNIR0i6ug.jpg" },
    { id: 17, name: "Elegant Gold Plated Jewelry Pack", category: "jewelry", price: 149.99, description: "Premium gold plated jewelry collection", image: "images/ER4arpmysQWh.jpg" },
    { id: 18, name: "Multi-Layer Gold Necklace Set", category: "jewelry", price: 65.99, description: "Chic multi-layer gold necklace set", image: "images/IsazV4aaZk6l.jpg" },
    { id: 19, name: "Stackable Knuckle Rings Collection", category: "jewelry", price: 15.99, description: "Trendy stackable knuckle rings", image: "images/j4SlNIR0i6ug.jpg" },
    { id: 20, name: "Premium Jewelry Display Set", category: "jewelry", price: 22.99, description: "Elegant jewelry display for a luxurious feel", image: "images/fA9eCcOcsS4k.webp" },
    
    // Gift Boxes - 10 items
    { id: 21, name: "Teen Girl Trendy Makeup Gift Box", category: "giftboxes", price: 49.99, description: "Trendy makeup set for teen girls", image: "images/yoeb0HvlaEUH.jpg" },
    { id: 22, name: "Pink Graduation Gift Basket Set", category: "giftboxes", price: 35.99, description: "Beautiful pink gift basket for graduation", image: "images/rdIotxkmkUmo.jpeg" },
    { id: 23, name: "Unique Photographer Gift Box", category: "giftboxes", price: 24.99, description: "Specialized gift box for photography enthusiasts", image: "images/5rDjyOY3DLsq.jpg" },
    { id: 24, name: "Subscription Box Insider Preview", category: "giftboxes", price: 29.99, description: "Curated subscription box with premium items", image: "images/RIGGj4NG9Za4.webp" },
    { id: 25, name: "Elegant Curation Gift Box", category: "giftboxes", price: 39.99, description: "Sophisticated curation for special gifting", image: "images/kF4QkOB5b5jK.jpg" },
    { id: 26, name: "Premium Gift Packaging Design", category: "giftboxes", price: 24.99, description: "Elegant packaging for any special occasion", image: "images/atWxI4FqSfWZ.jpg" },
    { id: 27, name: "Surprise Birthday Gift Pack", category: "giftboxes", price: 35.99, description: "Delightful surprise pack for birthdays", image: "images/gANqtPWeWL3n.jpg" },
    { id: 28, name: "Matte Black Luxury Gift Box", category: "giftboxes", price: 45.99, description: "Sleek matte black box for luxury gifts", image: "images/4G2yGAhFeWss.jpg" },
    { id: 29, name: "DIY Scrapbook Surprise Box", category: "giftboxes", price: 32.99, description: "Creative DIY scrapbook for memories", image: "images/dGMmrm52TLSn.jpg" },
    { id: 30, name: "Luxury Personalized Gift Set", category: "giftboxes", price: 28.99, description: "Tailored luxury gift set for a personal touch", image: "images/DzqT2rDEf1pc.jpg" },
    
    // Fancy Items - 10 items
    { id: 31, name: "Mini Camera Keychain with Photo", category: "fancy", price: 9.99, description: "Adorable mini camera keychain that holds a photo", image: "images/j6rQRqkskchT.jpg" },
    { id: 32, name: "Resin Keychain DIY Collection", category: "fancy", price: 12.99, description: "Beautifully crafted resin keychains", image: "images/zMMMUwSg3dL7.jpg" },
    { id: 33, name: "Camera Keychain with Sound", category: "fancy", price: 7.99, description: "Novelty camera keychain with realistic sound", image: "images/FWIyZys6TR1x.jpg" },
    { id: 34, name: "Cute Novelty Bag Pendant", category: "fancy", price: 6.99, description: "Charming pendant for bags and purses", image: "images/8Q5sue2rc8Xe.jpg" },
    { id: 35, name: "Anime Cartoon Figure Keychain", category: "fancy", price: 12.99, description: "Kawaii anime figure keychain", image: "images/3kRu8W7rCShC.jpg" },
    { id: 36, name: "Mini Cake Kawaii Keychain", category: "fancy", price: 8.99, description: "Sweet mini cake charm for accessories", image: "images/oXeDXdGfa3Qe.jpg" },
    { id: 37, name: "Creative Gift Key Chain Set", category: "fancy", price: 10.99, description: "Set of creative keychains for gifting", image: "images/j6rQRqkskchT.jpg" },
    { id: 38, name: "Decorative Car Keychain Accessory", category: "fancy", price: 5.99, description: "Stylish accessory for car keys", image: "images/FWIyZys6TR1x.jpg" },
    { id: 39, name: "Kawaii Food Miniature Charms", category: "fancy", price: 14.99, description: "Cute food-themed miniature charms", image: "images/oXeDXdGfa3Qe.jpg" },
    { id: 40, name: "Novelty Key Ring Collection", category: "fancy", price: 9.99, description: "Collection of unique and fun key rings", image: "images/zMMMUwSg3dL7.jpg" }
];

let cart = JSON.parse(localStorage.getItem('aureezaCart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    if (document.getElementById('products-grid')) {
        displayProducts('all');
    }
});

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) cartCountElement.textContent = count;
}

function displayProducts(category) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = category === 'all' ? products : products.filter(p => p.category === category);
    
    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${p.image}" alt="${p.name}" class="product-image" onclick="location.href='product-details.html?id=${p.id}'">
            <div class="product-info">
                <p class="product-cat">${p.category}</p>
                <h3 class="product-name">${p.name}</h3>
                <p class="product-price">$${p.price.toFixed(2)}</p>
                <button class="btn btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
        grid.appendChild(card);
    });

    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().replace(' ', '') === category) {
            btn.classList.add('active');
        }
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('aureezaCart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

function loadProductDetailsPage(id) {
    const p = products.find(item => item.id === id);
    const container = document.getElementById('product-detail-container');
    if (!p || !container) return;

    container.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;">
            <img src="${p.image}" alt="${p.name}" style="width: 100%; border-radius: 8px;">
            <div>
                <p style="color: var(--secondary-color); text-transform: uppercase;">${p.category}</p>
                <h1 style="font-size: 3rem; margin-bottom: 1rem;">${p.name}</h1>
                <p style="font-size: 1.5rem; color: var(--secondary-color); font-weight: bold; margin-bottom: 2rem;">$${p.price.toFixed(2)}</p>
                <p style="margin-bottom: 2rem; color: #ccc; line-height: 1.8;">${p.description}</p>
                <button class="btn btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        </div>
    `;
}

function displayCartPage() {
    const container = document.getElementById('cart-page-items');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '<h2>Your cart is empty</h2>';
        document.getElementById('cart-page-total').textContent = '$0.00';
        return;
    }

    container.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const div = document.createElement('div');
        div.className = 'cart-page-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <div style="margin: 0 2rem;">
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)" style="width: 60px; padding: 5px;">
            </div>
            <button class="btn btn-secondary" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        container.appendChild(div);
    });
    document.getElementById('cart-page-total').textContent = `$${total.toFixed(2)}`;
}

function updateQuantity(id, val) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity = parseInt(val);
        localStorage.setItem('aureezaCart', JSON.stringify(cart));
        displayCartPage();
        updateCartCount();
    }
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    localStorage.setItem('aureezaCart', JSON.stringify(cart));
    displayCartPage();
    updateCartCount();
}

function displayCheckoutSummary() {
    const container = document.getElementById('checkout-items');
    if (!container) return;
    
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.marginBottom = '10px';
        div.innerHTML = `<span>${item.name} x ${item.quantity}</span> <span>$${(item.price * item.quantity).toFixed(2)}</span>`;
        container.appendChild(div);
    });
    document.getElementById('checkout-total').textContent = `$${total.toFixed(2)}`;
}

function handleCheckout(e) {
    e.preventDefault();
    alert('Thank you for your order! We will contact you soon.');
    cart = [];
    localStorage.setItem('aureezaCart', JSON.stringify(cart));
    location.href = 'index.html';
}

function handleContactForm(e) {
    e.preventDefault();
    alert('Message sent successfully!');
    e.target.reset();
}
