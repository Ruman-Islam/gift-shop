/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import Cart from '../Cart/Cart';

const OffCanvas = ({ cart, setCart, handleClearCart, handleRemoveFromCart }) => {
    return (
        <div className="offcanvas offcanvas-start w-100" tabIndex="1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <Cart cart={cart} setCart={setCart} handleClearCart={handleClearCart} handleRemoveFromCart={handleRemoveFromCart}>
                    <p>Review Order</p>
                </Cart>
            </div>
        </div>
    );
};

export default OffCanvas;