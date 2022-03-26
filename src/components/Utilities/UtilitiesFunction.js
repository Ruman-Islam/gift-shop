//  Random number generator //
const getRandomIndex = (cartLength) => {
    const randomNumber = Math.floor(Math.random() * cartLength);
    return randomNumber;
}

// Random number generator starter //
const handleRandomization = (cart, setCart) => {
    let newCart = [];
    if (cart.length > 0) {
        const index = getRandomIndex(cart.length);
        if (index < cart.length) {
            newCart.push(cart[index]);
            setCart(newCart);
        } else {
            handleRandomization();
        }
    }
}


// Add product to local storage, if exists product increase quantity //
const addToLocalStorage = (id) => {
    const shoppingCart = getStoredCart();

    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

// Load product from local storage //
const getStoredCart = () => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

// Remove individual product from local storage //
const removeFromLocalStorage = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

// Delete all product from local storage //
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    handleRandomization,
    addToLocalStorage,
    getStoredCart,
    removeFromLocalStorage,
    deleteShoppingCart
}