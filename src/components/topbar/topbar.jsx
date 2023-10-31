import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../cartIcon'
import { UserContext } from '../../context/userContext'
import { CartContext } from '../../context/cartContext'
import { SearchContext } from '../../context/searchContext'
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'
import { ReactComponent as ZopaLogo } from '../../assets/logo-zopa.svg'
import { Menu } from '@styled-icons/zondicons/Menu'
import { signOutUser } from '../../utils/firebase'

import { TopbarContainer } from './styled'

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
          <Link to="/shop" className="topbar__link" title="Shop">
            Shop
          </Link>

          <button
            type="button"
            className="topbar__menu-mobile"
            title="Menu"
            onClick={handleMobileMenu}
          >
            <Menu />
          </button>
        </div>

        <Link to="/" title="Home">
          <ZopaLogo className="logo" />
        </Link>

        <div className="topbar__icons">
          {currentUser ? (
            <button
              type="button"
              className="topbar__link"
              onClick={signOutUser}
            >
              Signout
            </button>
          ) : (
            <Link
              to="/auth/sign-in"
              className="topbar__link"
              title="My Account"
            >
              My account
            </Link>
          )}

          <button
            type="button"
            className="topbar__cart"
            title="My Cart"
            onClick={toggleIsCartOpen}
          >
            <CartIcon />
          </button>
          <button
            type="button"
            className="topbar__search"
            title="Search"
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
