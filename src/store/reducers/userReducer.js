const INITIAL_STATE = {
  currentUser: null,
  isMobileOpen: false,
}

export const userReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: payload,
      }
    case 'SET_IS_MOBILE_OPEN':
      return {
        ...state,
        isMobileOpen: payload,
      }
    default:
      return state
  }
}
