const getRandomIndex = (cartLength) => {
    const randomNumber = Math.floor(Math.random() * cartLength);
    return randomNumber;
}

const handleRandomization = (cart, setIndex) => {
    if (cart.length > 0) {
        const pin = getRandomIndex(cart.length);
        if (pin < cart.length) {
            setIndex(pin);
        } else {
            handleRandomization();
        }
    }
}

const handleClearCart = (setCart) => {
    setCart([]);
}

export {
    handleRandomization,
    handleClearCart
}