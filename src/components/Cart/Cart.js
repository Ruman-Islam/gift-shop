import CartItem from '../CartItem/CartItem';
import { deleteShoppingCart, handleRandomization } from '../Utilities/UtilitiesFunction';
import './Cart.css';

const Cart = ({ cart, setCart, handleRemoveFromCart }) => {

    // Reset whole cart function //
    const handleClearCart = (setCart) => {
        setCart([])
    }

    return (
        <div className='cart'>
            <h5>Selected Gifts: {cart.length}</h5>
            <div className="cart-items-container">
                {
                    cart.map(cartItem =>
                        <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                            handleRemoveFromCart={handleRemoveFromCart}
                        />)
                }
            </div>
            <div className='btn-container'>
                <button onClick={() => handleRandomization(cart, setCart)} className='randomize-btn'>
                    Choose Random
                </button>
                <button onClick={() => handleClearCart(setCart) + deleteShoppingCart()} className='clear-items-btn'>
                    Reset Cart
                </button>
            </div>
        </div>
    );
};

export default Cart;