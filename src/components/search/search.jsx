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
  const { search, setSearch, isSearchOpen, setIsSearchOpen } =
    useContext(SearchContext)

  const handleShowSearch = bool => {
    console.log('search')
    setSearch([])
    setQuery('')
    setIsSearchOpen(bool)
  }

  const handleSearch = event => {
    const searchQuery = event.target.value.trim().toLowerCase()

    if (searchQuery === '') {
      return setSearch([])
    }

    const result = products.filter(({ name }) =>
      name.toLowerCase().includes(query),
    )
    setQuery(searchQuery)
    setSearch(result)
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
        {search.length > 0 && <Quantity length={search.length} />}

        <div className="search__list">
          {search && search.length === 0 ? (
            <p className="search__empty">Product not found :\</p>
          ) : (
            search.map((prod, index) => (
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
