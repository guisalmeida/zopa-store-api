import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../../context/productsContext'
import ProductsList from '../../components/productsList'
import Spinner from '../../components/spinner/spinner'

const Products = () => {
  const { category } = useParams()
  const { products } = useContext(ProductsContext)
  const isLoading = false

  return isLoading ? (
    <Spinner />
  ) : (
    <ProductsList products={products} category={category} />
  )
}

export default Products
