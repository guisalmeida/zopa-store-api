const INITIAL_STATE = {
  allProducts: [],
  isLoading: false,
  error: null,
}

export const productsReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action

  switch (type) {
    case 'FETCH_PRODUCTS_START':
      return {
        ...state,
        isLoading: true,
      }
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        allProducts: payload,
        isLoading: false,
      }
    case 'FETCH_PRODUCTS_FAILED':
      return {
        ...state,
        error: payload,
        isLoading: false,
      }
    default:
      return state
  }
}
