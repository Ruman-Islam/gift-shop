import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProduct } from '../../products';
import './ProductDetail.css';

const ProductDetail = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const product = getProduct(productId);
    const { name, price, ratings, img, deliveryCharge, } = product;
    return (
        <div className='product-containerr container'>
            <div>
                <h1>{name}</h1>
                <h3>Price: {'$'}{price}</h3>
                <h4>Delivery Charge: {deliveryCharge}</h4>
                <h5>Ratings: {ratings} star</h5>
                <button
                    onClick={() => navigate(-1)}
                    className='btn btn-primary'>
                    Back
                </button>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default ProductDetail;