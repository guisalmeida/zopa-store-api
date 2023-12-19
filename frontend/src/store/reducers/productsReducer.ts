import { AnyAction } from 'redux'
import { TProduct } from '../../types'
import {
  fetchProductsFailed,
  fetchProductsStart,
  fetchProductsSuccess,
} from '../actions/productsActions'

export type TProductsState = {
  readonly allProducts: TProduct[]
  readonly isLoading: boolean
  readonly error: Error | null
}

const INITIAL_STATE: TProductsState = {
  allProducts: [],
  isLoading: false,
  error: null,
}

export const productsReducer = (
  state = INITIAL_STATE,
  action: AnyAction,
): TProductsState => {
  if (fetchProductsStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    }
  } else if (fetchProductsSuccess.match(action)) {
    return {
      ...state,
      allProducts: action.payload,
      isLoading: false,
    }
  } else if (fetchProductsFailed.match(action)) {
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    }
  }
  return state
}
