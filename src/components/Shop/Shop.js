import Cart from '../Cart/Cart';
import useProducts from '../../hooks/useProducts';
import OffCanvas from '../OffCanvas/OffCanvas';
import Product from '../Product/Product';
import { addToLocalStorage } from '../Utilities/UtilitiesFunction';
import './Shop.css';
import useCart from '../../hooks/useCart';


const Shop = () => {
    const [products] = useProducts();  // Load from custom hook //
    const [cart, setCart] = useCart(products); // shopping cart /Load from custom hook //

    // Product add to cart function //
    const handleAddToCart = (selectedItem) => {
        let newCart = [];
        const existingItem = cart.find(cartItem => cartItem.id === selectedItem.id);
        if (existingItem) {
            const rest = cart.filter(cartItem => cartItem.id !== selectedItem.id);
            existingItem.quantity += 1;
            newCart = [...rest, existingItem];
        } else {
            selectedItem.quantity = 1;
            newCart = [...cart, selectedItem];
        }
        setCart(newCart);
        addToLocalStorage(selectedItem.id);
    }

    return (
        <div className='shop-container container'>
            <div className="product-container">
                {
                    products.map(product =>
                        <Product key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} setCart={setCart} >
                    <p>Review Order</p>
                </Cart>
            </div>

            <div className="offCanvas">  {/* off canvas for mobile device */}
                <OffCanvas
                    cart={cart}
                    setCart={setCart}
                // handleRemoveFromCart={handleRemoveFromCart}
                > <p>Review Order</p> </OffCanvas>
            </div>
        </div>
    );
};

export default Shop;