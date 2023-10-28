import { createContext, useState, useReducer } from 'react'

export const SearchContext = createContext({
  searchProducts: [],
  setSearchProducts: () => [],
  isSearchOpen: false,
  setIsSearchOpen: () => Boolean,
})

const INITIAL_STATE = {
  isSearchOpen: false,
  searchProducts: [],
}

const searchReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_SEARCH_PRODUCTS':
      return {
        ...state,
        searchProducts: payload,
      }
    case 'SET_IS_SEARCH_OPEN':
      return {
        ...state,
        isSearchOpen: payload,
      }
    default:
      throw new Error(`
        Unhandled type ${type} in searchReducer!
      `)
  }
}

export const SearchProvider = ({ children }) => {
  const [{ isSearchOpen, searchProducts }, dispatch] = useReducer(
    searchReducer,
    INITIAL_STATE,
  )

  const setIsSearchOpen = bool => {
    dispatch({ type: 'SET_IS_SEARCH_OPEN', payload: bool })
  }

  const setSearchProducts = products => {
    dispatch({ type: 'SET_SEARCH_PRODUCTS', payload: products })
  }

  const value = {
    searchProducts,
    setSearchProducts,
    isSearchOpen,
    setIsSearchOpen,
  }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}
