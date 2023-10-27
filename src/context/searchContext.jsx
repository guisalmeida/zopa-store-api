import { createContext, useState } from 'react'

export const SearchContext = createContext({
  search: [],
  setSearch: () => [],
  isSearchOpen: false,
  setIsSearchOpen: () => Boolean,
})

export const SearchProvider = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [search, setSearch] = useState([])
  const value = { search, setSearch, isSearchOpen, setIsSearchOpen }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}
