import { createSelector } from 'reselect'
import { TProductsState } from '../reducers/productsReducer'
import { TRootState } from '../store'

const selectProductsReducer = (state: TRootState): TProductsState =>
  state.products

export const selectAllProducts = createSelector(
  [selectProductsReducer],
  products => products.allProducts,
)

export const selectIsLoading = createSelector(
  [selectProductsReducer],
  products => products.isLoading,
)
