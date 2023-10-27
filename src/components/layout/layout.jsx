import { Outlet } from 'react-router-dom'
import BottomBar from '../bottomBar'
import Topbar from '../topbar'
import MiniCart from '../miniCart'
import Search from '../search'

const Layout = () => {
  return (
    <>
      <MiniCart />
      <Search />
      <Topbar />
      <Outlet />
      <BottomBar />
    </>
  )
}

export default Layout
