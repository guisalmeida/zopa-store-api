import {useState} from 'react'
import { Link, Outlet } from "react-router-dom";

import BottomBar from "../bottomBar";
import CartIcon from "../cartIcon";
import MiniCart from "../miniCart";

import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { ReactComponent as ZopaLogo } from "../../assets/logo-zopa.svg";

import { TopbarContainer } from "./styled";

const Topbar = () => {
  const [isShowCart, setIsShowCart] = useState(false)

  return (
    <>
      <MiniCart showCart={isShowCart} />

      <TopbarContainer>
        <div className="container">
          <div className="topbar__links">
            <Link to="/shop" className="topbar__link">
              Shop
            </Link>
          </div>

          <Link to="/">
            <ZopaLogo className="logo" />
          </Link>

          <div className="topbar__icons">
            <Link to="/auth" className="topbar__link">
              My account
            </Link>

            <button
              type="button"
              className="topbar__cart"
              onClick={()=> setIsShowCart(!isShowCart)}
            >
              <CartIcon />
            </button>
            <button
              type="button"
              className="topbar__search"
              onClick={() => console.log('search')}
            >
              <SearchIcon />
            </button>
          </div>
        </div>
      </TopbarContainer>
      <Outlet />
      <BottomBar />
    </>
  );
};

export default Topbar;
