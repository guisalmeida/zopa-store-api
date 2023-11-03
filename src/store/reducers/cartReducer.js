const INITIAL_STATE = {
  cartProducts: [],
  isCartOpen: false,
}

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_CART_PRODUCTS':
      return {
        ...state,
        cartProducts: payload,
      }
    case 'SET_IS_CART_OPEN':
      return {
        ...state,
        isCartOpen: payload,
      }
    default:
      return state
  }
}
