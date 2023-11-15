import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signOutUser } from '../../utils/firebase'

import { setIsMobileOpen } from '../../store/actions/userActions'
import {
  selectCurrentUser,
  selectIsMobileOpen,
} from '../../store/selectors/userSelectors'

import { MenuContainer } from './styled'

const MenuMobile = (): React.JSX.Element => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const isMobileOpen = useSelector(selectIsMobileOpen)

  const toggleMobileMenu = () => dispatch(setIsMobileOpen(false))

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
