import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { getProduct } from '../../products';
import { UseCart } from '../Shop/Shop';
import { handleAddToCart } from '../Utilities/UtilitiesFunction';
import './ProductDetail.css';

const ProductDetail = () => {
    // const [cart, setCart] = useContext(UseCart);
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();
    const { productId } = useParams();
    const product = getProduct(productId);
    const { name, price, ratings, img, deliveryCharge } = product;
    return (
        <div className='product-detail-container'>
            <div className='product-detail'>
                <div className='detail-container'>
                    <h1>General Info:</h1>
                    <hr />
                    <h2>{name}</h2>
                    <h3>Price: {'$'}{price}</h3>
                    <h3>Ratings: {ratings} Star</h3>
                    <h3>Delivery Charge: {'$'}{deliveryCharge}</h3>
                    <hr />
                    {/* <h4>Description: {description}</h4> */}
                    <div className="button-container">
                        <button
                            className='add-to-cart'
                            onClick={() => navigate(-1)}>
                            Shop again
                        </button>
                        <button
                            className='add-to-cart'
                            onClick={() => handleAddToCart(cart, setCart, product)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div>
                    <img src={img} alt='' />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;