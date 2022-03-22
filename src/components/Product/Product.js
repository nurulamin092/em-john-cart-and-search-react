import React from 'react';
import './Product.css'
const Product = ({ handelAddToCart, product }) => {
    // const { handelAddToCart, product } = props;
    const { img, name, price, seller, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>Ratting:{ratings} stars</small></p>
            </div>
            <button onClick={() => handelAddToCart(product)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;