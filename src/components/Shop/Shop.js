import Cart from '../Cart/Cart';
import useProducts from '../../hooks/useProducts';
// import OffCanvas from '../OffCanvas/OffCanvas';
import Product from '../Product/Product';
// import { addToLocalStorage, handleAddToCart } from '../Utilities/UtilitiesFunction';
import useCart from '../../hooks/useCart';
import './Shop.css';
import { createContext, useContext } from 'react';
import { UseCartIcon } from '../../App';

export const UseCart = createContext();

const Shop = () => {
    const [isCartOpen,] = useContext(UseCartIcon);
    const [products] = useProducts();  // Load from custom hook //
    const [cart, setCart] = useCart(products); // shopping cart /Load from custom hook //

    return (
        <UseCart.Provider value={[cart, setCart]}>
            <div className='shop-container container'>
                <div className="product-container">
                    {
                        products.map(product =>
                            <Product key={product.id}
                                product={product}
                            />)
                    }
                </div>
                <div
                    className="cart-container"
                    style={isCartOpen ? { transform: 'translateY(0)' } : { transform: 'translateY(-450px)' }}>
                    <Cart cart={cart} setCart={setCart} >
                        <p>Review Order</p>
                    </Cart>
                </div>

                {/* <div className="offCanvas">
                    <OffCanvas cart={cart} setCart={setCart}> </OffCanvas>
                </div> */}
            </div>
        </UseCart.Provider>
    );
};

export default Shop;