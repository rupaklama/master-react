import { Reducer } from 'redux';
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
  isBestSeller?: boolean;
  variants: ProductVariant[];
}

// reducer state interface
export interface ProductDetailsReducerState {
  products: Products[];
  page?: number;
  nextPage?: boolean;
  productsCount: number;
}

// reducer initial state
const initialState: ProductDetailsReducerState = {
  products: [],
  productsCount: 0,
};

export const productDetailsReducer: Reducer<
  ProductDetailsReducerState,
  ProductDetailsReducerAction
> = (state = initialState, action): ProductDetailsReducerState => {
  switch (action.type) {
    case ProductDetailsAction.SET_PRODUCT_DETAILS:
      return action.productDetails;
    default:
      return state;
  }
};
