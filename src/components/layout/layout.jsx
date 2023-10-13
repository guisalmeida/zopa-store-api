import { Outlet } from "react-router-dom";
import BottomBar from "../bottomBar";
import Topbar from "../topbar"
import MiniCart from "../miniCart";

const Layout = () => {
  return (
    <>
      <MiniCart showCart={false} />
      <Topbar/>
      <Outlet />
      <BottomBar />
    </>
  );
};

export default Layout;
