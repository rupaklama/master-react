import { Link } from 'react-router-dom';
import { ROUTE } from '../../constants/route';
import './headerNavigation.stye.css';

const HeaderNavigation: React.FC = () => {
  return (
    <div className='header-nav-container'>
      <div className='nav-items-left'>
        <Link className='nav-item shopname' to={ROUTE.HOME}>
          Your Shop
        </Link>
        <Link className='nav-item' to={ROUTE.ALL_PRODUCTS}>
          All Products
        </Link>
      </div>
      <div className='nav-items-right'>
        <i className='nav-item fas fa-shopping-cart'></i>
      </div>
    </div>
  );
};

export default HeaderNavigation;
