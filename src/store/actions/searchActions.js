export const setIsSearchOpen = bool => {
  return { type: 'SET_IS_SEARCH_OPEN', payload: bool }
}

export const setSearchProducts = products => {
  return { type: 'SET_SEARCH_PRODUCTS', payload: products }
}
