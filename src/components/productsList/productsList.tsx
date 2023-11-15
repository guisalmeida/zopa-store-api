import ProductCard from '../productCard'
import { TProduct } from '../../types'
import { ProductsContainer } from './styled'

type ProductsListProps = {
  products: TProduct[]
  category: string
}

const ProductsList = ({
  products,
  category,
}: ProductsListProps): React.JSX.Element => {
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

export default ProductsList
