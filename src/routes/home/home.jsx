import { useContext } from 'react'
import { ProductsContext } from '../../context/productsContext'

import { Carousel } from '../../components/carousel/carousel'
import ProductsList from '../../components/productsList'
import Spinner from '../../components/spinner/spinner'

const Home = () => {
  const { products } = useContext(ProductsContext)
  const isLoading = false

  return (
    <>
      <Carousel />

      {isLoading ? (
        <Spinner />
      ) : (
        <ProductsList products={products} category={undefined} />
      )}
    </>
  )
}

export default Home
