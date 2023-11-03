const INITIAL_STATE = {
  isSearchOpen: false,
  searchProducts: [],
}

export const searchReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_SEARCH_PRODUCTS':
      return {
        ...state,
        searchProducts: payload,
      }
    case 'SET_IS_SEARCH_OPEN':
      return {
        ...state,
        isSearchOpen: payload,
      }
    default:
      return state
  }
}
