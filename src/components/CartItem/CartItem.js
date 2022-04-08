import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './CartItem.css';


const CartItem = ({ handleRemoveFromCart, cartItem, cartItem: { name, price, quantity, deliveryCharge } }) => {
    return (
        <tr className='cart-item'>
            <th scope="row">
                <h6 title={name}>
                    {name.length > 30 ? name.slice(0, 30) + '...' : name}
                </h6>
                <div className='item-btn-container'>
                    <button
                        onClick={() => handleRemoveFromCart(cartItem)}
                        className='delete-btn'>
                        <FontAwesomeIcon className='icon' icon={faTrashCan} />
                    </button>
                </div>
            </th>
            <td><h6 style={{ marginLeft: '15px' }}>{price}</h6></td>
            <td><input className='form-control item-quantity' type="number" defaultValue={quantity} /></td>
            <td><h6 style={{ marginLeft: '40px' }}>{deliveryCharge}</h6></td>
            <td><h6 style={{ marginLeft: '15px' }}>{((price * quantity) + (quantity * deliveryCharge)).toFixed(2)}</h6></td>
        </tr >
    );
};

export default CartItem;