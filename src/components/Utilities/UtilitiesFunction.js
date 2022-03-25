const getRandomIndex = (cart) => {
    const randomNumber = Math.round(Math.random() * cart.length);
    return randomNumber;
}

const handleRandomization = (cart, setIndex) => {
    if (cart.length > 0) {
        const pin = getRandomIndex(cart);
        if (pin < cart.length) {
            setIndex(pin);
        } else {
            handleRandomization();
        }
    }
}

export {
    handleRandomization
}