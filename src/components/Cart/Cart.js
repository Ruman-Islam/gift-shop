import CartItem from '../CartItem/CartItem';
import { deleteShoppingCart, handleRandomization } from '../Utilities/UtilitiesFunction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faRandom } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = ({ cart, setCart, handleRemoveFromCart }) => {

    // Reset whole cart function //
    const handleClearCart = (setCart) => {
        setCart([])
    }

    return (
        <div className='cart'>
            <h5 className='cart-title'>Selected Gifts: {cart.length}</h5>
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
                    Choose One
                    <FontAwesomeIcon className="icon" icon={faRandom} />
                </button>
                <button onClick={() => handleClearCart(setCart) + deleteShoppingCart()} className='clear-items-btn'>
                    Reset Cart
                    <FontAwesomeIcon className="icon" icon={faTrashCan} />
                </button>
            </div>
        </div>
    );
};

export default Cart;