import { useContext, useState } from 'react'
import { DebounceInput } from 'react-debounce-input'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../../context/productsContext'
import { SearchContext } from '../../context/searchContext'
import { CartEmpty } from '../miniCart/styled'

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
    <Slider
      show={isSearchOpen}
      title="Busca por produtos"
      handleShow={handleShowSearch}
    >
      <Styled.SearchContainer>
        <DebounceInput
          name="Search field"
          type="text"
          className="search__input"
          placeholder="Digite nome do produto..."
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
            <CartEmpty>Nenhum produto encontrado :(</CartEmpty>
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
