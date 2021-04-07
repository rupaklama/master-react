import React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import ProductCard from '../../components/ProductCard/ProductCard';

import { RootState } from '../../store/reducers';
import { ProductDetailsReducerState } from '../../store/reducers/productDetailsReducer';
import './allProductsPage.style.css';

export interface AllProductsStateProps {
  productDetails: ProductDetailsReducerState;
}

export interface AllProductsOwnProps extends RouteComponentProps {}

export interface AllProductsDispatchToProps {}

// combining all above interfaces
export type AllProductsPageProps = AllProductsStateProps &
  AllProductsOwnProps &
  AllProductsDispatchToProps;

class AllProductsPage extends React.Component<AllProductsPageProps> {
  renderAllProducts = () => {
    const { productDetails } = this.props;
    return productDetails.products.map(({ title, variants, id }) => (
      <div className='product-item-container'>
        <ProductCard key={id} name={title} url={variants[0].image} />
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
    productDetails: state.productDetails,
  };
};

// Even though if there's no state/data, still need to pass in first arg to the connect func
// first arg is always mapStateToProps func, pass null instead if no state/data
// Second arg is the Action Creator object
export default connect(mapStateToProps)(AllProductsPage);
// To access to the provider, use connect() function & wrap the Component with ()
// Instance of Connect component connects to the Provider component to access Redux store
// Connect component handles Action Creators which is pass as props into this react component
