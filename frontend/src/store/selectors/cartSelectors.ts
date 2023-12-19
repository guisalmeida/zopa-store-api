import { createSelector } from 'reselect'
import { TCartState } from '../reducers/cartReducer'
import { TRootState } from '../store'

const selectCartReducer = (state: TRootState): TCartState => state.cart

export const selectCartProducts = createSelector(
  [selectCartReducer],
  cart => cart.cartProducts,
)

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  cart => cart.isCartOpen,
)

export const selectCartTotal = createSelector(
  [selectCartProducts],
  cartProducts =>
    cartProducts
      ? cartProducts.reduce((total, cartItem) => {
          return total + cartItem.price * cartItem.quantity
        }, 0)
      : [],
)

export const selectCartCount = createSelector(
  [selectCartProducts],
  cartProducts =>
    cartProducts
      ? cartProducts.reduce((total, cartItem) => {
          return (total += cartItem.quantity)
        }, 0)
      : [],
)
