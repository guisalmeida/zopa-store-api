import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import BottomBar from '../bottomBar'
import Topbar from '../topbar'
import MiniCart from '../miniCart'
import Search from '../search'
import MenuMobile from '../menuMobile'

const Layout = () => {
  return (
    <>
      <ToastContainer />
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
