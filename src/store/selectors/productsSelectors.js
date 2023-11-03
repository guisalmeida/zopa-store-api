import { createSelector } from 'reselect'

const selectProductsReducer = state => state.products

export const selectAllProducts = createSelector(
  [selectProductsReducer],
  products => products.allProducts,
)

export const selectIsLoading = createSelector(
  [selectProductsReducer],
  products => products.isLoading,
)
