import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../cartIcon'
import { UserContext } from '../../context/userContext'
import { CartContext } from '../../context/cartContext'
import { SearchContext } from '../../context/searchContext'
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'
import { ReactComponent as ZopaLogo } from '../../assets/logo-zopa.svg'
import { signOutUser } from '../../utils/firebase'

import { TopbarContainer, MenuMobileIcon } from './styled'

const Topbar = () => {
  const { currentUser, setIsMobileOpen, isMobileOpen } = useContext(UserContext)
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)
  const { isSearchOpen, setIsSearchOpen } = useContext(SearchContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  const toggleIsSearchOpen = () => setIsSearchOpen(!isSearchOpen)
  const handleMobileMenu = () => setIsMobileOpen(!isMobileOpen)

  return (
    <TopbarContainer>
      <div className="container">
        <div className="topbar__links">
          <Link to="/shop" className="topbar__link" title="Ir para loja">
            Loja
          </Link>

          <button
            type="button"
            className="topbar__menu-mobile"
            title="Abrir menu"
            onClick={handleMobileMenu}
          >
            <MenuMobileIcon />
          </button>
        </div>

        <Link to="/" title="Página inicial">
          <ZopaLogo className="logo" />
        </Link>

        <div className="topbar__icons">
          {currentUser ? (
            <button
              type="button"
              className="topbar__link"
              onClick={signOutUser}
            >
              Sair
            </button>
          ) : (
            <Link
              to="/auth/sign-in"
              className="topbar__link"
              title="Entrar na sua conta"
            >
              Entrar
            </Link>
          )}

          <button
            type="button"
            className="topbar__cart"
            title="Carrinho de compras"
            onClick={toggleIsCartOpen}
          >
            <CartIcon />
          </button>
          <button
            type="button"
            className="topbar__search"
            title="Busca por produtos"
            onClick={toggleIsSearchOpen}
          >
            <SearchIcon />
          </button>
        </div>
      </div>
    </TopbarContainer>
  )
}

export default Topbar
