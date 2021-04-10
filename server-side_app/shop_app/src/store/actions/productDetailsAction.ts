import { GetProductsOptions } from '../../api/productsDetailsAPI';
import { Products, ShopProducts } from './../reducers/productDetailsReducer';

// Action Types Interfaces
export interface SetShopProductsAction {
  // TypeScript adds a 'typeof' operator you can use in a type context to refer to the type of a variable or property
  type: typeof ProductDetailsAction.SET_SHOP_PRODUCTS;
  shopProducts: ShopProducts;
}

export interface FetchShopProductsAction {
  type: typeof ProductDetailsAction.FETCH_SHOP_PRODUCTS;
  options: GetProductsOptions;
}

export interface SetBestSellerProductsAction {
  // TypeScript adds a 'typeof' operator you can use in a type context to refer to the type of a variable or property
  type: typeof ProductDetailsAction.SET_BEST_SELLER_PRODUCTS;
  bestSellerProducts: Products[];
}

export interface FetchBestSellerProductsAction {
  type: typeof ProductDetailsAction.FETCH_BEST_SELLER_PRODUCTS;
}

// NOTE: 'Type union' can be very long, we can use 'Type Alias' if we want instead.
// 'Type Alias' is just a name that represents another Type, similar to variable but for type.
// 'Type Alias' is to create New Name for another Type.
export type ProductDetailsReducerAction =
  | SetShopProductsAction
  | FetchShopProductsAction
  | SetBestSellerProductsAction
  | FetchBestSellerProductsAction;

class ProductDetailsAction {
  // TypeScript includes the readonly keyword that makes a property as read-only in the class, type or interface.
  // Prefix readonly is used to make a property as read-only.
  // Read-only members can be accessed outside the class, but their value cannot be changed like CONST

  // Static properties and methods are shared by all instances of a class.
  // Use the static keyword before a property or a method to make it static.

  // TWO Action Types
  // When Redux Saga dispatches an Action, it will do everything for us
  // dispatch an Action to fetch the products
  static readonly FETCH_SHOP_PRODUCTS = 'FETCH_SHOP_PRODUCTS'; // same as Constant

  // to fetch best seller products
  static readonly FETCH_BEST_SELLER_PRODUCTS = 'FETCH_BEST_SELLER_PRODUCTS';

  // to add fetched data into our store
  static readonly SET_SHOP_PRODUCTS = 'SET_SHOP_PRODUCTS';

  // to add fetched best seller products in our store
  static readonly SET_BEST_SELLER_PRODUCTS = 'SET_BEST_SELLER_PRODUCTS';

  // NOTE - A class can include an arrow function as a property

  // Action Creators as a Class methods
  // action creator to fetch data
  fetchShopProducts = (
    options: GetProductsOptions
  ): FetchShopProductsAction => {
    return {
      type: ProductDetailsAction.FETCH_SHOP_PRODUCTS,
      options,
    };
  };

  // action creator to add fetch data 'payload' into our store
  setShopProducts = (shopProducts: ShopProducts): SetShopProductsAction => {
    return {
      type: ProductDetailsAction.SET_SHOP_PRODUCTS,
      shopProducts, // payload
    };
  };

  fetchALLBestSellerProducts = (): FetchBestSellerProductsAction => {
    return {
      type: ProductDetailsAction.FETCH_BEST_SELLER_PRODUCTS,
    };
  };

  setBestSellerProducts = (
    bestSellerProducts: Products[]
  ): SetBestSellerProductsAction => {
    return {
      type: ProductDetailsAction.SET_BEST_SELLER_PRODUCTS,
      bestSellerProducts,
    };
  };
}

export default ProductDetailsAction;
