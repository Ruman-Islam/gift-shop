import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import GiftCard from '../GiftCard/GiftCard';
import './Shop.css';

const Shop = () => {
    const [gifts, setGifts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (gift) => {
        const newCart = [...cart, gift]
        setCart(newCart);
        console.log(newCart);
    }

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setGifts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="gift-container container">
                {
                    gifts.map(gift =>
                        <GiftCard key={gift.id}
                            gift={gift}
                            handleAddToCart={handleAddToCart}
                        />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;