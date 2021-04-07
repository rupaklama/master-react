import { ProductDetailsReducerState } from './../reducers/productDetailsReducer';

// Action Types Interfaces
export interface ProductDetailsSetAction {
  // TypeScript adds a 'typeof' operator you can use in a type context to refer to the type of a variable or property
  type: typeof ProductDetailsAction.SET_PRODUCT_DETAILS;
  productDetails: ProductDetailsReducerState;
}

export interface ProductDetailsFetchAction {
  type: typeof ProductDetailsAction.FETCH_PRODUCTS_DETAILS;
}

// NOTE: 'Type union' can be very long, we can use 'Type Alias' if we want instead.
// 'Type Alias' is just a name that represents another Type, similar to variable but for type.
// 'Type Alias' is to create New Name for another Type.
export type ProductDetailsReducerAction =
  | ProductDetailsSetAction
  | ProductDetailsFetchAction;

class ProductDetailsAction {
  // TypeScript includes the readonly keyword that makes a property as read-only in the class, type or interface.
  // Prefix readonly is used to make a property as read-only.
  // Read-only members can be accessed outside the class, but their value cannot be changed like CONST

  // Static properties and methods are shared by all instances of a class.
  // Use the static keyword before a property or a method to make it static.

  // TWO Action Types
  // When Redux Saga dispatches an Action, it will do everything for us
  // dispatch an Action to fetch the products
  static readonly FETCH_PRODUCTS_DETAILS = 'FETCH_PRODUCTS_DETAILS'; // same as Constant

  // to add fetch data into our store
  static readonly SET_PRODUCT_DETAILS = 'SET_PRODUCT_DETAILS';

  // NOTE - A class can include an arrow function as a property

  // Action Creators as a Class methods
  // action creator to fetch data
  fetch = (): ProductDetailsFetchAction => {
    return {
      type: ProductDetailsAction.FETCH_PRODUCTS_DETAILS,
    };
  };

  // action creator to add fetch data 'payload' into our store
  set = (
    productDetails: ProductDetailsReducerState
  ): ProductDetailsSetAction => {
    return {
      type: ProductDetailsAction.SET_PRODUCT_DETAILS,
      productDetails, // payload
    };
  };
}

export default ProductDetailsAction;
