export const setCurrentUser = user => {
  return { type: 'SET_CURRENT_USER', payload: user }
}

export const setIsMobileOpen = bool => {
  return { type: 'SET_IS_MOBILE_OPEN', payload: bool }
}
