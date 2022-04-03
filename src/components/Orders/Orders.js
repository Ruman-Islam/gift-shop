import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';
import { removeFromLocalStorage } from '../Utilities/UtilitiesFunction';
import './Orders.css';

const Orders = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const isTrue = true;

    const handleRemoveFromCart = (selectedItem) => {
        const restItems = cart.filter(cartItem => cartItem.id !== selectedItem.id);
        setCart(restItems);
        removeFromLocalStorage(selectedItem.id);
    }

    return (
        <div className='orders-container container'>
            <table className="cart-items-container table">
                <thead>
                    <tr>
                        <th scope="col"><h4>Product Title</h4></th>
                        <th scope="col"><h4>Unit Price</h4></th>
                        <th scope="col"><h4>Quantity</h4></th>
                        <th scope="col"><h4>Shipping</h4></th>
                        <th scope="col"><h4>Subtotal</h4></th>
                    </tr>
                </thead>
                <tbody>
                    {isTrue &&
                        cart.map(cartItem =>
                            <CartItem
                                key={cartItem.id}
                                cartItem={cartItem}
                                handleRemoveFromCart={handleRemoveFromCart}
                            />)
                    }
                </tbody>
            </table>
            <div className='cart-calculation-container'>
                <Cart isTrue cart={cart} setCart={setCart}>
                    <p>Proceed Order</p>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;