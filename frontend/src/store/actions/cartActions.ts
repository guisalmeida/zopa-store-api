import { TOrder, TProduct } from '../../types'
import { createAction, withMatcher } from '../../utils/actions'
import { CART_ACTION_TYPE, TActionWithPayload } from './actionTypes'

export type TSetIsCartOpen = TActionWithPayload<
  typeof CART_ACTION_TYPE.SET_IS_CART_OPEN,
  boolean
>

export type TSetCartProducts = TActionWithPayload<
  typeof CART_ACTION_TYPE.SET_CART_PRODUCTS,
  TProduct[]
>

export type TCreateOrderStart = TActionWithPayload<
  typeof CART_ACTION_TYPE.CREATE_ORDER_START,
  TOrder
>
export type TCreateOrderSuccess = TActionWithPayload<
  typeof CART_ACTION_TYPE.CREATE_ORDER_SUCCESS,
  TOrder[]
>
export type TCreateOrderFailed = TActionWithPayload<
  typeof CART_ACTION_TYPE.CREATE_ORDER_FAILED,
  Error
>

export const createOrderStart = withMatcher(
  (order: TOrder): TCreateOrderStart =>
    createAction(CART_ACTION_TYPE.CREATE_ORDER_START, order),
)

export const createOrderSuccess = withMatcher(
  (orders: TOrder[]): TCreateOrderSuccess =>
    createAction(CART_ACTION_TYPE.CREATE_ORDER_SUCCESS, orders),
)

export const createOrderFailed = withMatcher(
  (error: Error): TCreateOrderFailed =>
    createAction(CART_ACTION_TYPE.CREATE_ORDER_FAILED, error),
)

export const setIsCartOpen = withMatcher(
  (bool: boolean): TSetIsCartOpen =>
    createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool),
)

export const setCartProducts = withMatcher(
  (newCartItems: TProduct[] = []): TSetCartProducts =>
    createAction(CART_ACTION_TYPE.SET_CART_PRODUCTS, newCartItems),
)

export const addToCart = (
  cartItems: TProduct[] = [],
  productToAdd: TProduct,
) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.selectedSize === productToAdd.selectedSize,
  )

  if (existingCartItem) {
    const newCartItems = cartItems.map(cartItem =>
      cartItem.selectedSize === productToAdd.selectedSize
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    )
    return setCartProducts(newCartItems)
  }

  const newCartItems = [...cartItems, { ...productToAdd, quantity: 1 }]
  return setCartProducts(newCartItems)
}

export const removeFromCart = (
  cartItems: TProduct[] = [],
  productToRemove: TProduct,
) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.selectedSize === productToRemove.selectedSize,
  )

  if (existingCartItem && existingCartItem.quantity === 1) {
    const newCartItems = cartItems.filter(cartItem => {
      return cartItem.selectedSize !== productToRemove.selectedSize
    })
    return setCartProducts(newCartItems)
  }

  const newCartItems = cartItems.map(cartItem =>
    cartItem.selectedSize === productToRemove.selectedSize
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  )
  return setCartProducts(newCartItems)
}

export const clearFromCart = (
  cartItems: TProduct[] = [],
  productToRemove: TProduct,
) => {
  const newCartItems = cartItems.filter(cartItem => {
    return cartItem.selectedSize !== productToRemove.selectedSize
  })
  return setCartProducts(newCartItems)
}
