import { deleteShoppingCart, handleRandomization } from '../Utilities/UtilitiesFunction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faRandom, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({ isTrue, cart, setCart, handleRemoveFromCart, children: { props: { children } = {} } = {} }) => {
    const navigate = useNavigate();

    let totalPrice = 0;
    let totalDeliveryCharge = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity += product.quantity;
        totalPrice += product.price * product.quantity;
        totalDeliveryCharge += product.deliveryCharge * product.quantity;
    }
    const tax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal = totalPrice + totalDeliveryCharge + tax;

    // Reset whole cart function //
    const handleClearCart = (setCart) => {
        setCart([])
    }

    return (
        <div className='cart'>
            <div>
                <h4>Order Summary</h4>
                <h5 className='cart-title'>Selected Items: {quantity}</h5>
                <p>Total Price: {'$'} {totalPrice}</p>
                <p>Total Shipping Charge: {'$'} {totalDeliveryCharge}</p>
                <p>Tax: {'$'} {tax}</p>
                <h5>Grand Total: {'$'} {grandTotal}</h5>
            </div> <hr />
            <div className='btn-container'>
                <button onClick={() => handleClearCart(setCart) + deleteShoppingCart()} className='clear-items-btn'>
                    Reset Cart
                    <FontAwesomeIcon className="icon" icon={faTrashCan} />
                </button>
                <button onClick={() => {
                    children === 'Review Order' ? (
                        navigate('/orders')
                    ) : (
                        navigate('/inventory')
                    )
                }} className='randomize-btn'>
                    {children}
                    <FontAwesomeIcon className='icon' icon={faArrowRight} />
                </button>
                {isTrue && <button onClick={() => handleRandomization(cart, setCart)} className='randomize-btn'>
                    Choose One
                    <FontAwesomeIcon className="icon" icon={faRandom} />
                </button>}
            </div>
        </div>
    );
};

export default Cart;