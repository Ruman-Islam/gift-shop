import { useEffect, useState } from "react";
import { getStoredCart } from "../components/Utilities/UtilitiesFunction";

// Getting data from local storage while first time loading website //
const useCart = products => {
    const [cart, setCart] = useState([]); // shopping cart //
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedProduct = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                savedProduct.push(addedProduct);
            }
        }
        setCart(savedProduct);
    }, [products]);

    return [cart, setCart];
}

export default useCart;