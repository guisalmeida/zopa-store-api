import { AnyAction } from 'redux'
import { TProduct } from '../../types'
import { setIsSearchOpen, setSearchProducts } from '../actions/searchActions'

export type TSearchState = {
  readonly isSearchOpen: boolean
  readonly searchProducts: TProduct[]
}

const INITIAL_STATE: TSearchState = {
  isSearchOpen: false,
  searchProducts: [],
}

export const searchReducer = (
  state = INITIAL_STATE,
  action: AnyAction,
): TSearchState => {
  if (setIsSearchOpen.match(action)) {
    return {
      ...state,
      isSearchOpen: action.payload,
    }
  }

  if (setSearchProducts.match(action)) {
    return {
      ...state,
      searchProducts: action.payload,
    }
  }

  return state
}
