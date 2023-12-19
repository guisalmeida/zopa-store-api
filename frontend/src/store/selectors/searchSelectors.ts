import { createSelector } from 'reselect'
import { TSearchState } from '../reducers/searchReducer'
import { TRootState } from '../store'

const selectSearchReducer = (state: TRootState): TSearchState => state.search

export const selectIsSearchOpen = createSelector(
  [selectSearchReducer],
  search => search.isSearchOpen,
)

export const selectSearchProducts = createSelector(
  [selectSearchReducer],
  search => search.searchProducts,
)
