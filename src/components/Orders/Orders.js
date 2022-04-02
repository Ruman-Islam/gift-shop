import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';
import { removeFromLocalStorage } from '../Utilities/UtilitiesFunction';
import './Orders.css';

const Orders = () => {
    const navigate = useNavigate();
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
            <div className="cart-items-container">
                {isTrue &&
                    cart.map(cartItem =>
                        <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                            handleRemoveFromCart={handleRemoveFromCart}
                        />)
                }
                <button
                    onClick={() => navigate(-1)}
                    style={{ marginTop: '20px' }}
                    className="btn btn-primary">
                    Shop again
                </button>
            </div>
            <div className='cart-calculation-container'>
                <Cart isTrue cart={cart} setCart={setCart}>
                    <p>Proceed Order</p>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;