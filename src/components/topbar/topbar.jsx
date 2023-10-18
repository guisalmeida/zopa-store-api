import { useState } from 'react'
import { Link } from "react-router-dom";
import CartIcon from "../cartIcon";

import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { ReactComponent as ZopaLogo } from "../../assets/logo-zopa.svg";

import { Menu } from "@styled-icons/ionicons-solid/Menu"

import { TopbarContainer } from "./styled";

const Topbar = () => {
  const [isShowCart, setIsShowCart] = useState(false)

  const handleMobileMenu = ()=> console.log("menu");

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
          <Link to="/auth/sign-in" className="topbar__link" title="My Account">
            My account
          </Link>

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
  );
};

export default Topbar;
