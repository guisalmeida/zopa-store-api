import { createSelector } from 'reselect'

const selectSearchReducer = state => state.search

export const selectIsSearchOpen = createSelector(
  [selectSearchReducer],
  search => search.isSearchOpen,
)

export const selectSearchProducts = createSelector(
  [selectSearchReducer],
  search => search.searchProducts,
)
