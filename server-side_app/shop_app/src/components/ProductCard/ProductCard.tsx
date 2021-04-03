import React from 'react';
import './productCard.style.css';

interface ProductCardProps {
  url: string;
  name: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ url, name }) => {
  return (
    <div className='product-card-container'>
      <div
        style={{ backgroundImage: `url(${url})` }}
        className='product-image'
      />
      <div className='product-details'>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default ProductCard;
