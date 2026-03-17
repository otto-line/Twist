const CART_KEY = 'twst_cart';

function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(product) {
    const cart = getCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    saveCart(cart);
    updateCartCount();
}

function removeFromCart(id) {
    const cart = getCart().filter(item => item.id !== id);
    saveCart(cart);
    updateCartCount();
}

function updateQty(id, qty) {
    const cart = getCart();
    const item = cart.find(item => item.id === id);
    if (!item) return;
    if (qty < 1) {
        removeFromCart(id);
        return;
    }
    item.qty = qty;
    saveCart(cart);
    updateCartCount();
}

function getCartCount() {
    return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
    return getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function clearCart() {
    localStorage.removeItem(CART_KEY);
    updateCartCount();
}

function updateCartCount() {
    const badge = document.getElementById('cart-count');
    if (badge) {
        const count = getCartCount();
        badge.textContent = count > 0 ? `[${String(count).padStart(2, '0')}.]` : '';
    }
}

document.addEventListener('DOMContentLoaded', updateCartCount);
