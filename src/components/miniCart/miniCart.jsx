import { useNavigate } from "react-router-dom";
import { priceToStringBr } from "../../utils/currency";

import Slider from "../slider";
import Button from "../button";
import ListItem from "../listItem";

import { CartEmpty } from "./styled";

 
const MiniCart = ({ showCart }) => {
  const navigate = useNavigate();

  const cartItems = []
  const cartItemsCount = 0
  const cartItemsTotal = 0

  const pathname = window.location.pathname || undefined;

  const handleCheckout = () => {
    return navigate("checkout");
  };

  return (
    <Slider show={showCart} title={`Cart - ${cartItemsCount} Item(s)`}>
      {cartItems?.length > 0 ? (
        cartItems.map((cartItem, index) => {
          return <ListItem key={index} item={cartItem} />;
        })
      ) : (
        <CartEmpty>Your cart is empty :(</CartEmpty>
      )}
      <p>
        <strong>Subtotal:</strong>{" "}
        {priceToStringBr(cartItemsTotal)}
      </p>
      {cartItems?.length > 0 && pathname !== '/checkout' && (
        <Button buttonType="base" onClick={handleCheckout}>
          Go to Cart
        </Button>
      )}
    </Slider>
  );
};

export default MiniCart;
