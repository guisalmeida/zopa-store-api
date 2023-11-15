import { TProduct } from '../../types'
import { createAction, withMatcher } from '../../utils/action'
import {
  PRODUCTS_ACTION_TYPE,
  TAction,
  TActionWithPayload,
} from './actionTypes'

export type TFetchProductsStart = TAction<
  typeof PRODUCTS_ACTION_TYPE.FETCH_PRODUCTS_START
>

export type TFetchProductsSuccess = TActionWithPayload<
  typeof PRODUCTS_ACTION_TYPE.FETCH_PRODUCTS_SUCCESS,
  TProduct[]
>

export type TFetchProductsFailed = TActionWithPayload<
  typeof PRODUCTS_ACTION_TYPE.FETCH_PRODUCTS_FAILED,
  Error
>

export const fetchProductsStart = withMatcher(
  (): TFetchProductsStart =>
    createAction(PRODUCTS_ACTION_TYPE.FETCH_PRODUCTS_START),
)

export const fetchProductsSuccess = withMatcher(
  (products: TProduct[]): TFetchProductsSuccess =>
    createAction(PRODUCTS_ACTION_TYPE.FETCH_PRODUCTS_SUCCESS, products),
)

export const fetchProductsFailed = withMatcher(
  (error: Error): TFetchProductsFailed =>
    createAction(PRODUCTS_ACTION_TYPE.FETCH_PRODUCTS_FAILED, error),
)
