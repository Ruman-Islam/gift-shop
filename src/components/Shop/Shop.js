/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { handleClearCart } from '../Utilities/UtilitiesFunction';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }

    const handleRemoveFromCart = (selectedItem) => {
        const restItems = cart.filter(cartItem => cartItem.id !== selectedItem.id);
        setCart(restItems);
    }

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='shop-container container'>
            <div className="product-container">
                {
                    products.map(product =>
                        <Product key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    setCart={setCart}
                    handleClearCart={handleClearCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                />
            </div>
            <div className="offCanvas">
                <div className="offcanvas offcanvas-start w-100" tabIndex="1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <Cart cart={cart}
                            setCart={setCart}
                            handleClearCart={handleClearCart}
                            handleRemoveFromCart={handleRemoveFromCart}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;