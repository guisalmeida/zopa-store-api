import { TActionWithPayload, SEARCH_ACTION_TYPE } from './actionTypes'
import { TProduct } from '../../types'
import { createAction, withMatcher } from '../../utils/action'

export type TSetIsSearchOpen = TActionWithPayload<
  typeof SEARCH_ACTION_TYPE.SET_IS_SEARCH_OPEN,
  boolean
>

export type TSetSearchProducts = TActionWithPayload<
  typeof SEARCH_ACTION_TYPE.SET_SEARCH_PRODUCTS,
  TProduct[]
>

export const setIsSearchOpen = withMatcher(
  (bool: boolean): TSetIsSearchOpen =>
    createAction(SEARCH_ACTION_TYPE.SET_IS_SEARCH_OPEN, bool),
)

export const setSearchProducts = withMatcher(
  (products: TProduct[]): TSetSearchProducts =>
    createAction(SEARCH_ACTION_TYPE.SET_SEARCH_PRODUCTS, products),
)
