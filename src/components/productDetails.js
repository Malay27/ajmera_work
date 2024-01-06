import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'; // CSS file for styling

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProductDetails(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }
    fetchProductDetails();
  }, [id]);

  return (
    <div className='product-details-container'>
      {productDetails && (
        <div className='product-details'>
          <div className='product-image'>
            <img src={productDetails.image} alt={productDetails.title} />
          </div>
          <div className='product-details-text'>
            <p className='product-title'>{productDetails.title}</p>
            <p>{productDetails.description}</p>
            <p>Price: ${productDetails.price}</p>
            <p>Rating: {productDetails.rating.rate}/5 ({productDetails.rating.count} reviews)</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
