import { takeLatest, all, call, put } from 'typed-redux-saga'
import axios, { AxiosError } from 'axios'

import { getProductsCollection } from '../../utils/api'

import {
  fetchProductsSuccess,
  fetchProductsFailed,
} from '../actions/productsActions'
import { TProduct } from '../../types'

export function* fetchProductsSaga() {
  try {
    const products = yield* call(getProductsCollection)

    if (axios.isAxiosError(products)) {
      yield* put(fetchProductsFailed(products.response?.data as AxiosError))
    } else if (products) {
      yield* put(fetchProductsSuccess(products as TProduct[]))
    }
  } catch (error) {
    yield* put(fetchProductsFailed(error as AxiosError))
  }
}

export function* onFetchProducts() {
  yield* takeLatest('FETCH_PRODUCTS_START', fetchProductsSaga)
}

export function* productsSaga() {
  yield* all([call(onFetchProducts)])
}
