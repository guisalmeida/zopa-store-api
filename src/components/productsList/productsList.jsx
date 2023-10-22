import PropTypes from 'prop-types'
import ProductCard from '../productCard'
import { ProductsContainer } from './styled'

const ProductsList = ({ products, category }) => {
  const categoryProducts = category
    ? products.filter(product => {
        return product.categories.includes(category)
      })
    : null

  const prodsArray = categoryProducts || products || []

  return (
    <ProductsContainer>
      {prodsArray.map((product, index) => {
        return <ProductCard key={index} product={product} />
      })}
    </ProductsContainer>
  )
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      categories: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
  category: PropTypes.string,
}

export default ProductsList
