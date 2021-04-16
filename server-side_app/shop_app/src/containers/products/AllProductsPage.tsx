import React from 'react';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import ProductCard from '../../components/ProductCard/ProductCard';

import { RootState } from '../../store/reducers';
import { ProductFilters, ShopProducts } from '../../store/reducers/productDetailsReducer';
import ProductDetailsAction, { FetchShopProductsAction } from '../../store/actions/productDetailsAction';
import './allProductsPage.style.css';
import { GetProductsOptions } from '../../api/productsDetailsAPI';
import AllProductsSideBar from '../../components/allProductsSideBar/AllProductsSideBar';
import UserAction from '../../store/actions/userAction';

export interface AllProductsStateProps {
  shopProducts: ShopProducts;
  productFilters: ProductFilters;
  userFilters: ProductFilters;
}

export interface AllProductsOwnProps extends RouteComponentProps {}

export interface AllProductsDispatchToProps {
  fetchShopProducts(options: GetProductsOptions): FetchShopProductsAction;
  fetchShopProductsAndFilters(): any;
}

// combining all above interfaces
export type AllProductsPageProps = AllProductsStateProps & AllProductsOwnProps & AllProductsDispatchToProps;

class AllProductsPage extends React.Component<AllProductsPageProps> {
  componentDidMount() {
    const { shopProducts } = this.props;

    // we already have fetched data in our redux store
    // dispatch an action only when we don't have data in our store
    if (!shopProducts.products.length) {
      this.props.fetchShopProductsAndFilters();
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
    const { productFilters } = this.props;
    console.log(productFilters); // Object with array of strings

    return (
      <div className='all-products-page-container'>
        <AllProductsSideBar productFilters={productFilters} />
        <div className='all-products-container'>
          <div className='all-products'>{this.renderAllProducts()}</div>
        </div>
      </div>
    );
  }
}

// mapStateToProps function passes Redux Global State data from Redux Store into react components
// in order to do so, pass mapStateToProps to Connect function
// mapStateToProps, meaning - pass in the data store in Redux Store to this component as PROPS
const mapStateToProps: MapStateToProps<AllProductsStateProps, AllProductsOwnProps, RootState> = state => {
  const { shopProducts, productFilters } = state.productDetails;
  const { filters } = state.user;

  // redux store state
  return {
    // accessing 'productDetails' slice of state & assigning to key
    shopProducts: shopProducts,
    productFilters: productFilters,
    userFilters: filters,
  };
};

// to dispatch action
const mapDispatchToProps: MapDispatchToPropsFunction<
  AllProductsDispatchToProps,
  AllProductsOwnProps
> = dispatch => {
  const { fetchShopProducts, fetchShopProductsAndFilters } = new ProductDetailsAction();
  const { updateUserFilters } = new UserAction();

  return {
    fetchShopProducts: options => dispatch(fetchShopProducts(options)),
    fetchShopProductsAndFilters: () => dispatch(fetchShopProductsAndFilters()),
  };
};

// Even though if there's no state/data, still need to pass in first arg to the connect func
// first arg is always mapStateToProps func, pass null instead if no state/data
// Second arg is the Action Creator object
export default connect(mapStateToProps, mapDispatchToProps)(AllProductsPage);
// To access to the provider, use connect() function & wrap the Component with ()
// Instance of Connect component connects to the Provider component to access Redux store
// Connect component handles Action Creators which is pass as props into this react component
