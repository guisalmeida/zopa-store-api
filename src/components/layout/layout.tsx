import { Outlet } from 'react-router-dom'
import BottomBar from '../bottomBar'
import Topbar from '../topbar'
import MiniCart from '../miniCart'
import Search from '../search'
import MenuMobile from '../menuMobile'

const Layout = () => {
  return (
    <>
      <MiniCart />
      <Search />
      <MenuMobile />
      <Topbar />
      <Outlet />
      <BottomBar />
    </>
  )
}

export default Layout
