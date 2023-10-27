import { createContext, useEffect, useState } from 'react'
import { getProductsCollection } from '../utils/firebase'

export const ProductsContext = createContext({
  products: [],
  setProducts: () => [],
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const value = { products, setProducts }

  useEffect(() => {
    const getProductsMap = async () => {
      const productsMap = await getProductsCollection()
      setProducts(productsMap)
    }

    getProductsMap()
  }, [])

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
