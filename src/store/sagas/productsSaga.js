import { takeLatest, all, call, put } from 'redux-saga/effects'

import { getProductsCollection } from '../../utils/firebase'
import {
  fetchProductsSuccess,
  fetchProductsFailed,
} from '../actions/productsActions'

export function* fetchProductsAsync() {
  try {
    const products = yield call(getProductsCollection)
    yield put(fetchProductsSuccess(products))
  } catch (error) {
    yield put(fetchProductsFailed(error))
  }
}

export function* onFetchProducts() {
  yield takeLatest('FETCH_PRODUCTS_START', fetchProductsAsync)
}

export function* productsSaga() {
  yield all([call(onFetchProducts)])
}
