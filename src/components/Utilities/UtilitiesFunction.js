const getRandomIndex = (cartLength) => {
    const randomNumber = Math.floor(Math.random() * cartLength);
    return randomNumber;
}

const handleRandomization = (cart, setCart) => {
    let newCart = [];
    if (cart.length > 0) {
        const pin = getRandomIndex(cart.length);
        if (pin < cart.length) {
            newCart.push(cart[pin]);
            setCart(newCart);
        } else {
            handleRandomization();
        }
    }
}

const handleClearCart = (setCart) => {
    setCart([])
}

export {
    handleRandomization,
    handleClearCart
}