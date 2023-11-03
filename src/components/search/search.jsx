import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input'

import {
  setIsSearchOpen,
  setSearchProducts,
} from '../../store/actions/searchActions'
import { selectAllProducts } from '../../store/selectors/productsSelectors'
import {
  selectIsSearchOpen,
  selectSearchProducts,
} from '../../store/selectors/searchSelectors'

import ListItem from '../listItem'
import Slider from '../slider'
import Quantity from '../quantity'

import { CartEmpty } from '../miniCart/styled'

import * as Styled from './styled'

const Search = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const allProducts = useSelector(selectAllProducts)
  const searchProducts = useSelector(selectSearchProducts)
  const isSearchOpen = useSelector(selectIsSearchOpen)

  const handleShowSearch = bool => {
    setQuery('')
    dispatch(setSearchProducts([]))
    dispatch(setIsSearchOpen(bool))
  }

  const handleSearch = event => {
    const searchQuery = event.target.value.trim().toLowerCase()

    if (searchQuery === '') {
      return dispatch(setSearchProducts([]))
    }

    const result = allProducts.filter(({ name }) =>
      name.toLowerCase().includes(query),
    )
    setQuery(searchQuery)
    dispatch(setSearchProducts(result))
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
