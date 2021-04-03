import { Component } from 'react';
import Partners from '../../components/Partners/Partners';
import ShopQuality from '../../components/ShopQuality/ShopQuality';
import BestSeller from '../BestSeller/BestSeller';
import './homepage.style.css';

class HomePage extends Component {
  render() {
    return (
      <div className='homepage-container'>
        <div className='cover-image' />
        <ShopQuality />
        <BestSeller />
        <Partners />
      </div>
    );
  }
}

export default HomePage;
