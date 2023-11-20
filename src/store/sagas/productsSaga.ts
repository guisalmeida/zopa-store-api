import { takeLatest, all, call, put } from 'typed-redux-saga'
import { FirebaseError } from 'firebase/app'

import { getProductsCollection } from '../../utils/firebase'
import {
  fetchProductsSuccess,
  fetchProductsFailed,
} from '../actions/productsActions'

export function* fetchProductsAsync() {
  try {
    const products = yield* call(getProductsCollection)
    yield* put(fetchProductsSuccess(products))
  } catch (error) {
    yield* put(fetchProductsFailed(error as FirebaseError))
  }
}

export function* onFetchProducts() {
  yield* takeLatest('FETCH_PRODUCTS_START', fetchProductsAsync)
}

export function* productsSaga() {
  yield* all([call(onFetchProducts)])
}
