import { createSelector } from 'reselect'
import { priceToNumber } from '../../utils/currency'

const selectCartReducer = state => state.cart

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
    cartProducts.reduce((total, cartItem) => {
      return total + priceToNumber(cartItem.actual_price) * cartItem.quantity
    }, 0),
)

export const selectCartCount = createSelector(
  [selectCartProducts],
  cartProducts =>
    cartProducts.reduce((total, cartItem) => {
      return (total += cartItem.quantity)
    }, 0),
)
