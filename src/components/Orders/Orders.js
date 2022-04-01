import React, { useState } from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';
import { removeFromLocalStorage } from '../Utilities/UtilitiesFunction';

const Orders = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const [isTrue, setIsTrue] = useState(true);
    const handleRemoveFromCart = (selectedItem) => {
        const restItems = cart.filter(cartItem => cartItem.id !== selectedItem.id);
        setCart(restItems);
        removeFromLocalStorage(selectedItem.id);
    }
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', width: '80%', margin: '50px auto', padding: '100px', backgroundColor: 'orange' }}>
            <div className="cart-items-container">
                {isTrue &&
                    cart.map(cartItem =>
                        <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                            handleRemoveFromCart={handleRemoveFromCart}
                        />)
                }
            </div>
            <div>
                <Cart isTrue cart={cart} setCart={setCart}>
                    <p>Proceed Order</p>
                </Cart>
            </div>
        </div>
    );
};

export default Orders; <h2>this is orser</h2>