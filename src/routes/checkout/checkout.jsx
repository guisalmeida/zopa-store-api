import CheckoutItem from "../../components/checkoutItem";
import PaymentForm from '../../components/paymentForm'

import { priceToStringBr } from "../../utils/currency";
import { CheckoutContainer } from "./styled";

const Checkout = () => {
  const cartItems = []
  const cartItemsTotal = 0
  
  return (
    <CheckoutContainer>
      <div className="checkout__header">
        <div className="checkout__header--block">
          <span>Product</span>
        </div>
        <div className="checkout__header--block">
          <span>Description</span>
        </div>
        <div className="checkout__header--block">
          <span>Quantity</span>
        </div>
        <div className="checkout__header--block">
          <span>Price</span>
        </div>
        <div className="checkout__header--block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.code_color} cartItem={cartItem} />;
      })}
      <span className="checkout__total">
        Total:{" "}
        <strong>{priceToStringBr(cartItemsTotal)}</strong>
      </span>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
