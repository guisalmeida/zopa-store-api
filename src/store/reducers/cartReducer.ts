import { AnyAction } from 'redux'
import { TOrder, TProduct } from '../../types'
import {
  createOrderFailed,
  createOrderSuccess,
  setCartProducts,
  setIsCartOpen,
} from '../actions/cartActions'

export type TCartState = {
  readonly cartProducts: TProduct[]
  readonly cartOrders: TOrder[]
  readonly isCartOpen: boolean
}

const INITIAL_STATE: TCartState = {
  cartProducts: [],
  cartOrders: [],
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
  if (createOrderSuccess.match(action)) {
    return {
      ...state,
      cartOrders: state.cartOrders.concat(action.payload),
    }
  }
  if (createOrderFailed.match(action)) {
    return {
      ...state,
      error: action.payload,
    }
  }

  return state
}
