import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faRepeat, faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { getProduct } from '../../products';
import { handleAddToCart } from '../Utilities/UtilitiesFunction';
import './ProductDetail.css';

const ProductDetail = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();
    const { productId } = useParams();
    const product = getProduct(productId);
    const { name, price, img, deliveryCharge, description } = product;
    return (
        <div className='product-detail-container'>
            <div className='product-detail'>
                <div className='detail-container'>
                    <h1>General Info:</h1>
                    <hr />
                    <h2>{name}</h2>
                    <h4>Price: {'$'}{price}</h4>
                    <h4>Delivery Charge: {'$'}{deliveryCharge}</h4>
                    <h5>
                        <FontAwesomeIcon className="star-icon" icon={faStar} />
                        <FontAwesomeIcon className="star-icon" icon={faStar} />
                        <FontAwesomeIcon className="star-icon" icon={faStar} />
                        <FontAwesomeIcon className="star-icon" icon={faStar} />
                        <FontAwesomeIcon className="star-icon" icon={faStar} />
                    </h5>
                    <hr />
                    <h4>Description: {description}</h4>
                    <div className="button-container">
                        <button
                            className='primary-button'
                            onClick={() => navigate(-1)}>
                            Shop again
                            <FontAwesomeIcon className="icon" icon={faRepeat} />
                        </button>
                        <button
                            className='primary-button'
                            onClick={() => handleAddToCart(cart, setCart, product)}>
                            Add to Cart
                            <FontAwesomeIcon className="icon" icon={faCartPlus} />
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