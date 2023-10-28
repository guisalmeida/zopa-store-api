import { createContext, useEffect, useReducer, useState } from 'react'
import { getProductsCollection } from '../utils/firebase'

export const ProductsContext = createContext({
  products: [],
  setProducts: () => [],
})

const INITIAL_STATE = {
  products: [],
}

const productsReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: payload,
      }
    default:
      throw new Error(`
        Unhandled type ${type} in productsReducer!
      `)
  }
}

export const ProductsProvider = ({ children }) => {
  const [{ products }, dispatch] = useReducer(productsReducer, INITIAL_STATE)

  const setProducts = prods => {
    dispatch({ type: 'SET_PRODUCTS', payload: prods })
  }

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
