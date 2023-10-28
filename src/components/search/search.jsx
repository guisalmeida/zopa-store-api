import { useContext, useState } from 'react'
import { DebounceInput } from 'react-debounce-input'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../../context/productsContext'
import { SearchContext } from '../../context/searchContext'

import ListItem from '../listItem'

import Slider from '../slider'
import Quantity from '../quantity'

import * as Styled from './styled'

const Search = () => {
  const [query, setQuery] = useState('')
  const { products } = useContext(ProductsContext)
  const { searchProducts, setSearchProducts, isSearchOpen, setIsSearchOpen } =
    useContext(SearchContext)

  const handleShowSearch = bool => {
    setSearchProducts([])
    setQuery('')
    setIsSearchOpen(bool)
  }

  const handleSearch = event => {
    const searchQuery = event.target.value.trim().toLowerCase()

    if (searchQuery === '') {
      return setSearchProducts([])
    }

    const result = products.filter(({ name }) =>
      name.toLowerCase().includes(query),
    )
    setQuery(searchQuery)
    setSearchProducts(result)
  }

  return (
    <Slider show={isSearchOpen} title="Search" handleShow={handleShowSearch}>
      <Styled.SearchContainer>
        <DebounceInput
          type="text"
          className="search__input"
          placeholder="Buscar..."
          debounceTimeout={400}
          onChange={event => handleSearch(event)}
          value={query}
        />
      </Styled.SearchContainer>

      <Styled.SearchContent>
        {searchProducts.length > 0 && (
          <Quantity length={searchProducts.length} />
        )}

        <div className="search__list">
          {searchProducts && searchProducts.length === 0 ? (
            <p className="search__empty">Product not found :\</p>
          ) : (
            searchProducts.map((prod, index) => (
              <Link
                className="search__link"
                to={`product/${prod.code_color}`}
                key={index}
                onClick={() => handleShowSearch(false)}
              >
                <ListItem item={prod} mode="search" />
              </Link>
            ))
          )}
        </div>
      </Styled.SearchContent>
    </Slider>
  )
}

export default Search
