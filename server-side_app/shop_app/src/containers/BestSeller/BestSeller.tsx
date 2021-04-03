import { Component } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './bestSeller.style.css';

class BestSeller extends Component {
  render() {
    return (
      <div className='best-seller-container'>
        <h2>Best Seller</h2>
        <div className='best-seller-products'>
          <ProductCard
            name='Formal Dress Shirts Casual Long Sleeve Slim Fit'
            url='http://localhost:1234/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Blue.png'
          />
          <ProductCard
            name='Formal Dress Shirts Casual Long Sleeve Slim Fit'
            url='http://localhost:1234/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Blue.png'
          />
          <ProductCard
            name='Formal Dress Shirts Casual Long Sleeve Slim Fit'
            url='http://localhost:1234/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Blue.png'
          />
        </div>
      </div>
    );
  }
}

export default BestSeller;
