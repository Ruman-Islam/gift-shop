import { deleteShoppingCart, handleRandomization } from '../Utilities/UtilitiesFunction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faRandom, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ isTrue, cart, setCart, children: { props: { children } } }) => {
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
                <h6 className='cart-title'>Items: {quantity}</h6>
                <h5>Total Price: {'$'} {totalPrice.toFixed(2)}</h5>
                <h5>Total Shipping Charge: {'$'} {totalDeliveryCharge}</h5>
                <h5>Tax: {'$'} {tax}</h5>
                <h4>Grand Total: {'$'} {grandTotal.toFixed(2)}</h4>
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
                }} className='primary-button'>
                    {children}
                    <FontAwesomeIcon className='icon' icon={faArrowRight} />
                </button> <br />
                {isTrue && <button onClick={() => handleRandomization(cart, setCart)} className='primary-button'>
                    Choose One
                    <FontAwesomeIcon className="icon" icon={faRandom} />
                </button>}  <br />
                {isTrue && <button
                    onClick={() => navigate('/shop')}
                    className="primary-button">
                    CONTINUE SHOPPING
                </button>}
            </div>
        </div>
    );
};

export default Cart;