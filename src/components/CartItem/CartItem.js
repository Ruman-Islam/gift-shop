import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './CartItem.css';


const CartItem = ({ handleRemoveFromCart, cartItem, cartItem: { img, name, price, quantity, deliveryCharge } }) => {
    return (
        <tr className='cart-item'>
            <th scope="row">
                <h4 title={name}>
                    {name.length > 30 ? name.slice(0, 30) + '...' : name}
                </h4>
                <div className='item-btn-container'>
                    <button
                        onClick={() => handleRemoveFromCart(cartItem)}
                        className='delete-btn'>
                        <FontAwesomeIcon className='icon' icon={faTrashCan} />
                    </button>
                </div>
            </th>
            <td><h3 className='item-name'>{price}</h3></td>
            <td><input className='form-control item-quantity' type="number" defaultValue={quantity} /></td>
            <td><h4 className='item-name'>{deliveryCharge}</h4></td>
            <td><h4 className='item-name'>{((price * quantity) + (quantity * deliveryCharge)).toFixed(2)}</h4></td>
        </tr >
    );
};

export default CartItem;