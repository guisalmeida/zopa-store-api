import { AnyAction } from 'redux'
import { TProduct } from '../../types'
import { setCartProducts, setIsCartOpen } from '../actions/cartActions'

export type TCartState = {
  readonly cartProducts: TProduct[]
  readonly isCartOpen: boolean
}

const INITIAL_STATE: TCartState = {
  cartProducts: [],
  isCartOpen: false,
}

export const cartReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (setCartProducts.match(action)) {
    return {
      ...state,
      cartProducts: action.payload,
    }
  }
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    }
  }

  return state
}
