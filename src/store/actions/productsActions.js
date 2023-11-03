import { getProductsCollection } from '../../utils/firebase'

export const fetchProductsStart = () => ({
  type: 'FETCH_PRODUCTS_START',
})

export const fetchProductsSuccess = products => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  payload: products,
})

export const fetchProductsFailed = error => ({
  type: 'FETCH_PRODUCTS_FAILED',
  payload: error,
})

export const fetchProductsAsync = () => async dispatch => {
  dispatch(fetchProductsStart())

  try {
    const products = await getProductsCollection()
    dispatch(fetchProductsSuccess(products))
  } catch (error) {
    dispatch(fetchProductsFailed(error))
  }
}
