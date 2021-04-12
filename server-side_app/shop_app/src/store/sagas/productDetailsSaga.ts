// we actually need to import in certain Effects from Redux-Saga
// This Effects allow us to do different things with either the STORE
// like creating Actions or listening for Actions.
import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import ProductDetailsAPI, { ProductFiltersAPIResponse } from '../../api/productsDetailsAPI';
import ProductDetailsAction, { FetchShopProductsAction } from '../actions/productDetailsAction';

import { ShopProducts } from '../reducers/productDetailsReducer';

// Worker Saga - A Generator Function for Watcher Saga below
// for 'ProductDetailsAction' action creator
function* workerFetchShopProductsSaga(action: FetchShopProductsAction) {
  const productDetailsAPI = new ProductDetailsAPI();
  const productDetailsAction = new ProductDetailsAction();

  // Use this when: You want to call a function or a promise but want to wait for that function or promise
  // to finish running before executing the next line of code.
  try {
    const response: AxiosResponse = yield call(productDetailsAPI.getProducts, action.options);
    const shopProducts = response.data as ShopProducts; // as is 'typeof'

    // Use 'put' when: You want to dispatch a redux action creator from within a redux saga to update our Redux State
    yield put(productDetailsAction.setShopProducts(shopProducts));
  } catch (err) {
    // TODO: Change in the future
    console.log(err);
  }
}

function* workerFetchBestSellerProductsSaga() {
  const productDetailsAPI = new ProductDetailsAPI();
  const shopAction = new ProductDetailsAction();

  try {
    const response: AxiosResponse = yield call(productDetailsAPI.getProducts, {
      // category: ['Best Seller'],
    });
    const { products } = response.data as ShopProducts; // as is 'typeof'
    // console.log(products);

    // Use 'put' when: You want to dispatch a redux action creator from within a redux saga to update our Redux State
    yield put(shopAction.setBestSellerProducts(products));
  } catch (err) {
    // TODO: Change in the future
    console.log('err');
  }
}

function* workerFetchShopProductsAndFilterSaga(action: FetchShopProductsAction) {
  const productDetailsAPI = new ProductDetailsAPI();
  const productDetailsAction = new ProductDetailsAction();

  // Use this when: You want to call a function or a promise but want to wait for that function or promise
  // to finish running before executing the next line of code.
  try {
    // products endpoint
    const productsResponse: AxiosResponse = yield call(productDetailsAPI.getProducts, {});

    // filters endpoint
    const productsFiltersResponse: AxiosResponse = yield call(productDetailsAPI.getProductFilters);

    // products response object
    const shopProducts = productsResponse.data as ShopProducts; // as is 'typeof'

    // filter response object
    const { productFilters } = productsFiltersResponse.data as ProductFiltersAPIResponse;

    // Use 'put' when: You want to dispatch a redux action creator from within a redux saga to update our Redux State
    yield put(productDetailsAction.setShopProductsAndFilters(shopProducts, productFilters));
  } catch (err) {
    // TODO: Change in the future
    console.log(err);
  }
}

// This will watch every time 'ProductDetailsAction' action creator is being dispatch
// & perform operation on this action by calling Worker Saga above.
// NOTE: Unlike takeEvery, takeLatest allows only one fetchData task to run at any moment.
// And it will be the latest started task. If a previous task is still running when
// another fetchData task is started, the previous task will be automatically cancelled.
// NOTE: takes every matching action & run the given Saga, but cancels every previous saga
// that is still running(blocking)

// Use 'takeLatest' when: There's the potential for a redux action to be dispatched multiple times in a short period and
// could potentially initiate the running of multiple instances of the same saga - use takeLatest
// to ONLY take the latest currently running saga for the associated dispatched redux action.

export function* watchProductDetailsSaga() {
  yield takeLatest(ProductDetailsAction.FETCH_SHOP_PRODUCTS, workerFetchShopProductsSaga);
  yield takeLatest(ProductDetailsAction.FETCH_BEST_SELLER_PRODUCTS, workerFetchBestSellerProductsSaga);
  yield takeLatest(
    ProductDetailsAction.FETCH_SHOP_PRODUCTS_AND_FILTERS,
    workerFetchShopProductsAndFilterSaga
  );
}

// If we want to only get the response of the latest request fired
// (e.g. to always display the latest version of data) we can use the 'takeLatest' helper/effect

// import { takeLatest } from 'redux-saga/effects';
// NOTE: Unlike takeEvery, takeLatest allows only one fetchData task to run at any moment.
// And it will be the latest started task. If a previous task is still running when
// another fetchData task is started, the previous task will be automatically cancelled.
// NOTE: takes every matching action & run the given Saga, but cancels every previous saga
// that is still running(blocking)
