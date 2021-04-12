import axios from 'axios';
import { ProductFilters } from '../store/reducers/productDetailsReducer';
// import { ProductFilters } from '../store/reducers/shopReducer';

export interface GetProductsOptions {
  page?: number;
  size?: number;
  category?: string[];
}

export interface ProductFiltersAPIResponse {
  productFilters: ProductFilters;
}

class ProductDetailsAPI {
  getProducts = (options: GetProductsOptions) => {
    const { page, size, category } = options;
    const pageQueryParam = `page=${page || ''}`;
    const sizeQueryParam = `&size=${size || ''}`;
    const categoryQueryParam = `&category=${category ? category.join('&category=') : ''}`;
    return axios.get(
      `http://localhost:1234/products?${pageQueryParam}${sizeQueryParam}${categoryQueryParam}`
    );
  };

  getProductFilters = () => {
    return axios.get('http://localhost:1234/productFilters');
  };
}

export default ProductDetailsAPI;
