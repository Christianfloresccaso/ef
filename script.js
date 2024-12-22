// Alternar modo oscuro/claro
const themeToggleBtn = document.getElementById('theme-toggle-btn');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggleBtn.textContent = document.body.classList.contains('dark-mode')
        ? 'Modo Claro'
        : 'Modo Oscuro';
});

// Filtro de precio con restablecer
const priceFilter = document.getElementById('price-filter');
const priceValueDisplay = document.getElementById('price-value');
const resetPriceFilterBtn = document.getElementById('reset-price-filter');
const products = document.querySelectorAll('.product');

priceFilter.addEventListener('input', function () {
    const priceValue = this.value;
    priceValueDisplay.textContent = `$${priceValue}`;
    products.forEach(product => {
        const price = parseFloat(product.dataset.price);
        product.style.display = price <= priceValue ? 'block' : 'none';
    });
});

resetPriceFilterBtn.addEventListener('click', () => {
    priceFilter.value = 1000;
    priceValueDisplay.textContent = '$1000';
    products.forEach(product => (product.style.display = 'block'));
});

// Carrito: añadir y vaciar
const cartItemsContainer = document.getElementById('cart-items');
const clearCartBtn = document.getElementById('clear-cart');
let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.dataset.productName;
        const productPrice = button.dataset.productPrice;
        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

clearCartBtn.addEventListener('click', () => {
    cart = [];
    updateCart();
});

function updateCart() {
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(cartItem);
    });
}

// Popup de promoción
const promoPopup = document.getElementById('promo-popup');
const closePopupButton = document.getElementById('close-popup');
setTimeout(() => (promoPopup.style.display = 'block'), 2000);
closePopupButton.addEventListener('click', () => (promoPopup.style.display = 'none'));
