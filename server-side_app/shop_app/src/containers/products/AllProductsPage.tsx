import React from 'react';
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToProps,
} from 'react-redux';
import { RouteComponentProps } from 'react-router';
import ProductCard from '../../components/ProductCard/ProductCard';

import { RootState } from '../../store/reducers';
import { ShopProducts } from '../../store/reducers/productDetailsReducer';
import ProductDetailsAction, {
  FetchShopProductsAction,
} from '../../store/actions/productDetailsAction';
import './allProductsPage.style.css';
import { GetProductsOptions } from '../../api/productsDetailsAPI';

export interface AllProductsStateProps {
  shopProducts: ShopProducts;
}

export interface AllProductsOwnProps extends RouteComponentProps {}

export interface AllProductsDispatchToProps {
  fetchShopProducts(options: GetProductsOptions): FetchShopProductsAction;
}

// combining all above interfaces
export type AllProductsPageProps = AllProductsStateProps &
  AllProductsOwnProps &
  AllProductsDispatchToProps;

class AllProductsPage extends React.Component<AllProductsPageProps> {
  componentDidMount() {
    const { shopProducts } = this.props;

    // we already have fetched data in our redux store
    // dispatch an action only when we don't have data in our store
    if (!shopProducts.products.length) {
      this.props.fetchShopProducts({});
    }
  }

  renderAllProducts = () => {
    const { shopProducts } = this.props;
    // console.log(productDetails);

    return shopProducts.products.map(({ title, variants, id }) => (
      <div className='product-item-container' key={id}>
        <ProductCard name={title} url={variants[0].image} />
      </div>
    ));
  };

  render() {
    return (
      <div className='all-products-page-container'>
        <div className='all-products'>{this.renderAllProducts()}</div>
      </div>
    );
  }
}

// mapStateToProps function passes Redux Global State data from Redux Store into react components
// in order to do so, pass mapStateToProps to Connect function
// mapStateToProps, meaning - pass in the data store in Redux Store to this component as PROPS
const mapStateToProps: MapStateToProps<
  AllProductsStateProps,
  AllProductsOwnProps,
  RootState
> = state => {
  // redux store state
  return {
    // accessing 'productDetails' slice of state & assigning to key
    shopProducts: state.productDetails.shopProducts,
  };
};

// to dispatch action
const mapDispatchToProps: MapDispatchToPropsFunction<
  AllProductsDispatchToProps,
  AllProductsOwnProps
> = dispatch => {
  const { fetchShopProducts } = new ProductDetailsAction();

  return {
    fetchShopProducts: options => dispatch(fetchShopProducts(options)),
  };
};

// Even though if there's no state/data, still need to pass in first arg to the connect func
// first arg is always mapStateToProps func, pass null instead if no state/data
// Second arg is the Action Creator object
export default connect(mapStateToProps, mapDispatchToProps)(AllProductsPage);
// To access to the provider, use connect() function & wrap the Component with ()
// Instance of Connect component connects to the Provider component to access Redux store
// Connect component handles Action Creators which is pass as props into this react component
