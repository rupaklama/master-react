import { all } from 'redux-saga/effects';
import { watchProductDetailsSaga } from './productDetailsSaga';
import { watchUserSaga } from './userSaga';

export default function* startRootSaga() {
  yield all([watchProductDetailsSaga(), watchUserSaga]);
}
