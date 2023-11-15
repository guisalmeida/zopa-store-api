import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import {
  selectAllProducts,
  selectIsLoading,
} from '../../store/selectors/productsSelectors'
import ProductsList from '../../components/productsList'
import Spinner from '../../components/spinner/spinner'
import { TProduct } from '../../types'

type TProductsRouteParams = {
  category: string
}

const Products = () => {
  const { category } = useParams<
    keyof TProductsRouteParams
  >() as TProductsRouteParams

  const allProducts: TProduct[] = useSelector(selectAllProducts)
  const isLoading: boolean = useSelector(selectIsLoading)

  return isLoading ? (
    <Spinner />
  ) : (
    <ProductsList products={allProducts} category={category} />
  )
}

export default Products
