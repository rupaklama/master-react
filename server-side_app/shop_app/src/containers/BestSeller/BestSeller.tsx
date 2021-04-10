import { Component } from 'react';
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToProps,
} from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductDetailsAction from '../../store/actions/productDetailsAction';
import { RootState } from '../../store/reducers';
import { Products } from '../../store/reducers/productDetailsReducer';
import './bestSeller.style.css';

export interface BestSellerStateProps {
  bestSellerProducts: Products[];
}

export interface BestSellerDispatchProps {
  fetchAllBestSellerProducts(): any;
  // addToCart(product: ProductPurchase): any;
}

export type BestSellerProps = BestSellerStateProps & BestSellerDispatchProps;

class BestSeller extends Component<BestSellerProps> {
  componentDidMount() {
    const { bestSellerProducts } = this.props;

    // we already have fetched data in our redux store
    // dispatch an action only when we don't have data in our store
    if (!bestSellerProducts.length) {
      this.props.fetchAllBestSellerProducts();
    }
  }

  renderBestSellerProducts = () => {
    const { bestSellerProducts } = this.props;

    return bestSellerProducts.map(({ id, title, variants }) => (
      <ProductCard key={id} name={title} url={variants[0].image} />
    ));
  };

  render() {
    return (
      <div className='best-seller-container'>
        <h2>Best Seller</h2>
        <div className='best-seller-products'>
          {this.renderBestSellerProducts()}
        </div>
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<
  BestSellerStateProps,
  {},
  RootState
> = state => {
  // console.log(state);

  return {
    bestSellerProducts: state.productDetails.bestSellerProducts,
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<
  BestSellerDispatchProps,
  {}
> = dispatch => {
  const { fetchALLBestSellerProducts } = new ProductDetailsAction();
  return {
    fetchAllBestSellerProducts: () => dispatch(fetchALLBestSellerProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BestSeller);
