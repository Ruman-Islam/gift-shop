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

// Reset whole cart function //
const handleClearCart = (setCart) => {
    setCart([])
}

export {
    handleRandomization,
    handleClearCart
}