import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../cartIcon'
import { UserContext } from '../../context/userContext'
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'
import { ReactComponent as ZopaLogo } from '../../assets/logo-zopa.svg'
import { Menu } from '@styled-icons/ionicons-solid/Menu'
import { signOutUser } from '../../utils/firebase'

import { TopbarContainer } from './styled'

const Topbar = () => {
  const [isShowCart, setIsShowCart] = useState(false)
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const handleMobileMenu = () => console.log('menu')

  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }

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
            onClick={() => handleMobileMenu(true)}
          >
            <Menu />
          </button>
        </div>

        <Link to="/" title="Home">
          <ZopaLogo className="logo" />
        </Link>

        <div className="topbar__icons">
          {currentUser ? (
            <button type="button" onClick={signOutHandler}>
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
            onClick={() => setIsShowCart(!isShowCart)}
          >
            <CartIcon />
          </button>
          <button
            type="button"
            className="topbar__search"
            title="Search"
            onClick={() => console.log('search')}
          >
            <SearchIcon />
          </button>
        </div>
      </div>
    </TopbarContainer>
  )
}

export default Topbar
