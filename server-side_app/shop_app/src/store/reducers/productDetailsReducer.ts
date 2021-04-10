import { Reducer } from 'redux';
import update from 'immutability-helper';

import ProductDetailsAction, {
  ProductDetailsReducerAction,
} from '../actions/productDetailsAction';

// product variant interface
export interface ProductVariant {
  id: string;
  size: string;
  color: string;
  price: string;
  stock: number;
  discount?: string;
  image: string;
}

// product interface
export interface Products {
  id: string;
  category: string[];
  title: string;

  variants: ProductVariant[];
}

export interface ShopProducts {
  products: Products[];
  page?: number;
  nextPage?: boolean;
  productsCount: number;
  totalPages?: number;
}

// reducer state interface
export interface ProductDetailsReducerState {
  shopProducts: ShopProducts;
  bestSellerProducts: Products[];
}

// reducer initial state
const initialState: ProductDetailsReducerState = {
  shopProducts: {
    products: [],
    productsCount: 0,
  },
  bestSellerProducts: [],
};

export const productDetailsReducer: Reducer<
  ProductDetailsReducerState,
  ProductDetailsReducerAction
> = (state = initialState, action) => {
  switch (action.type) {
    case ProductDetailsAction.SET_SHOP_PRODUCTS:
      // creating nested objects by setting key to the action object
      return update(state, { shopProducts: { $set: action.shopProducts } });
    case ProductDetailsAction.SET_BEST_SELLER_PRODUCTS:
      return update(state, {
        bestSellerProducts: { $set: action.bestSellerProducts },
      });
    default:
      return state;
  }
};
