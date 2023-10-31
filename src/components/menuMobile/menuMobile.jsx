import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/userContext'
import { signOutUser } from '../../utils/firebase'

import { MenuContainer } from './styled'

const MenuMobile = () => {
  const { currentUser, setIsMobileOpen, isMobileOpen } = useContext(UserContext)

  const toggleMobileMenu = () => {
    setIsMobileOpen(false)
  }

  return (
    <MenuContainer $show={isMobileOpen}>
      <ul>
        <li>
          <Link to="/shop" onClick={toggleMobileMenu}>
            Loja
          </Link>
        </li>
        <li>
          {currentUser ? (
            <button type="button" onClick={signOutUser}>
              Sair
            </button>
          ) : (
            <Link to="/auth/sign-in" title="Entrar na sua conta">
              Entrar
            </Link>
          )}
        </li>
      </ul>
    </MenuContainer>
  )
}

export default MenuMobile
