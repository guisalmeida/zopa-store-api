import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../../context/userContext'

import Slider from '../slider'

import { MenuContainer } from './styled'

const MenuMobile = () => {
  const { setIsMobileOpen, isMobileOpen } = useContext(UserContext)

  const toggleMobileMenu = () => {
    setIsMobileOpen(false)
  }

  return (
    <MenuContainer $show={isMobileOpen}>
      <ul>
        <li>
          <Link to="/shop" onClick={toggleMobileMenu}>
            shop
          </Link>
        </li>
        <li>
          <Link to="/auth/sign-in" onClick={toggleMobileMenu}>
            My account
          </Link>
        </li>
      </ul>
    </MenuContainer>
  )
}

export default MenuMobile
