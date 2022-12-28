import React from 'react';
import { Link } from 'react-router-dom';

function ProductDetails({onAdd, match}) {

    const productId = match.params.id;

    return (
        <div className='container'>
          <h6><b>PRODUCT DETAILS PAGE</b></h6>
          <p>Product id: {productId}</p>
          <p>Using the id, we can then get other details about the exact product from the backend</p>
            
          <button  disabled className='btn btn-primary' 
            onClick={() => onAdd({"id": "fi01", title: "Fake Item"})}>
            Add to cart
          </button>
          <div className='back-link'>
            <Link  to="/products">
              Back To Products
            </Link>
          </div>
        </div>
    );
}

export default ProductDetails;