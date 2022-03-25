import React, { useEffect, useState } from 'react';
import GiftCard from '../GiftCard/GiftCard';
import './Shop.css';

const Shop = () => {
    const [gifts, setGifts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setGifts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="gift-container container">
                {
                    gifts.map(gift => <GiftCard key={gift.id} gift={gift} />)
                }
            </div>
            <div className="cart-container">
                <h3>cart</h3>
            </div>
        </div>
    );
};

export default Shop;