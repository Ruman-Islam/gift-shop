import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './CartItem.css';


const CartItem = ({ handleRemoveFromCart, cartItem, cartItem: { img, name, price, quantity, deliveryCharge } }) => {
    return (
        <div className='cart-item'>
            <div className='img-container'>
                <img src={img} alt="" />
            </div>
            <div className='name-container'>
                <h6 className='item-name' title={name}>
                    {name.length > 30 ? name.slice(0, 30) + '...' : name}
                </h6>
                <p className='item-name'>Price: $ {price}</p>
                <small className='item-name'>Quantity: {quantity}</small>
                <small className='item-name'>Delivery Charge: $ {deliveryCharge}</small>
            </div>
            <div className='item-btn-container'>
                <button
                    onClick={() => handleRemoveFromCart(cartItem)}
                    className='delete-btn'>
                    <FontAwesomeIcon className='icon' icon={faTrashCan} />
                </button>
            </div>
        </div >
    );
};

export default CartItem;