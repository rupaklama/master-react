// we actually need to import in certain Effects from Redux-Saga
// This Effects allow us to do different things with either the STORE
// like creating Actions or listening for Actions.
import { call, put, takeLatest } from 'redux-saga/effects';
import ProductDetailsAPI from '../../api/productsDetailsAPI';
import ProductDetailsAction from '../actions/productDetailsAction';
import { ProductDetailsReducerState } from '../reducers/productDetailsReducer';

// Worker Saga: is running all the 'Side Effects' it was meant to do
// Worker Saga - A Generator Function for Watcher Saga below
// for 'ProductDetailsAction' action creator
function* workerFetchProductsDetailSaga(): any {
  const productDetailsAPI = new ProductDetailsAPI();
  const productDetailsAction = new ProductDetailsAction();

  // 'call' effect - We can make asynchronous calls using the call Effect like api request
  // It functions as await syntax to wait for function or promise to finish.
  // run a method, Promise or other Sage(blocking)
  try {
    const response = yield call(productDetailsAPI.getProducts);
    const productDetails = response.data as ProductDetailsReducerState; // as is 'typeof'

    // 'put' effect - is to dispatch an action to our reducer(non-blocking)
    yield put(productDetailsAction.set(productDetails));
  } catch (err) {
    // TODO: Change in the future
    console.log('err');
  }
}

// Watcher Saga - A Generator Function
// The Watcher Saga is typically the ROOT Saga to export & mount on the Store
// Watcher Saga sees every action that is dispatched to the redux store.
// If it matches the action it is told to handle, it will assign it to its Worker Saga

// This will watch every time 'ProductDetailsAction' action creator is being dispatch
// & perform operation on this action by calling Worker Saga above.
export function* watchProductDetailsSaga() {
  yield takeLatest(
    ProductDetailsAction.FETCH_PRODUCTS_DETAILS,
    workerFetchProductsDetailSaga
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
