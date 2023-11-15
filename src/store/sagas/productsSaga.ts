import { takeLatest, all, call, put } from 'typed-redux-saga'

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
    yield* put(fetchProductsFailed(error as Error))
  }
}

export function* onFetchProducts() {
  yield* takeLatest('FETCH_PRODUCTS_START', fetchProductsAsync)
}

export function* productsSaga() {
  yield* all([call(onFetchProducts)])
}
