import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import OffCanvas from '../OffCanvas/OffCanvas';
import Product from '../Product/Product';
import { handleClearCart } from '../Utilities/UtilitiesFunction';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);  // Initial products loading //
    const [cart, setCart] = useState([]); // shopping cart //

    // Product add to cart function //
    const handleAddToCart = (selectedItem) => {
        if (cart.length >= 4) {
            alert('You have already selected 4 items');
        } else {
            const existingItem = cart.find(product => product.id === selectedItem.id);
            if (existingItem) {
                alert("Same item can't be added twice");
            } else {
                const newCart = [...cart, selectedItem];
                setCart(newCart);
            }
        }
    }

    // single product remove function from cart //
    const handleRemoveFromCart = (selectedItem) => {
        const restItems = cart.filter(cartItem => cartItem.id !== selectedItem.id);
        setCart(restItems);
    }

    useEffect(() => {  // data loading //
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

            <div className="offCanvas">  {/* off canvas for mobile device */}
                <OffCanvas
                    cart={cart}
                    setCart={setCart}
                    handleClearCart={handleClearCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                />
            </div>
        </div>
    );
};

export default Shop;