import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { setIsMobileOpen, signOutStart } from '../../store/actions/userActions'
import { setIsSearchOpen } from '../../store/actions/searchActions'
import { setIsCartOpen } from '../../store/actions/cartActions'

import { selectIsSearchOpen } from '../../store/selectors/searchSelectors'
import { selectIsCartOpen } from '../../store/selectors/cartSelectors'
import {
  selectCurrentUser,
  selectIsMobileOpen,
} from '../../store/selectors/userSelectors'

import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'
import { ReactComponent as ZopaLogo } from '../../assets/logo-zopa.svg'
import CartIcon from '../cartIcon'

import { TopbarContainer, MenuMobileIcon, UserIcon } from './styled'

const Topbar = (): React.JSX.Element => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const isMobileOpen = useSelector(selectIsMobileOpen)
  const isSearchOpen = useSelector(selectIsSearchOpen)
  const isCartOpen = useSelector(selectIsCartOpen)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))
  const toggleIsSearchOpen = () => dispatch(setIsSearchOpen(!isSearchOpen))
  const handleMobileMenu = () => dispatch(setIsMobileOpen(!isMobileOpen))
  const signOutUser = () => dispatch(signOutStart())

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
            <Link
              to="/auth/user"
              className="topbar__link"
              title="Ver meu perfil"
            >
              <UserIcon />
            </Link>
          ) : (
            <Link
              to="/auth/sign-in"
              className="topbar__link"
              title="Entrar na sua conta"
            >
              <UserIcon />
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
