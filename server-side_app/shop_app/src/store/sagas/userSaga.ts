import { call, put, takeLatest } from 'redux-saga/effects';
import UserAction, { UpdateUserFiltersAction } from '../actions/userAction';
import ProductDetailsAPI from '../../api/productsDetailsAPI';
import ProductDetailsAction from '../actions/productDetailsAction';
import { AxiosResponse } from 'axios';
import { convertFiltersToCategories } from '../../utils/helper';
import { ShopProducts } from '../reducers/productDetailsReducer';

function* workerUpdateUserFiltersSaga(action: UpdateUserFiltersAction) {
  const productDetailsAPI = new ProductDetailsAPI();
  const productDetailsAction = new ProductDetailsAction();

  try {
    const response: AxiosResponse = yield call(productDetailsAPI.getProducts, {
      category: convertFiltersToCategories(action.filters),
    });
    const shopProducts = response.data as ShopProducts; // as is 'typeof'

    // Use 'put' when: You want to dispatch a redux action creator from within a redux saga to update our Redux State
    yield put(productDetailsAction.setShopProducts(shopProducts));
  } catch (err) {
    // TODO: Change in the future
    console.log(err);
  }
}
export function* watchUserSaga() {
  yield takeLatest(UserAction.UPDATE_USER_FILTERS, workerUpdateUserFiltersSaga);
}
