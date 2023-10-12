import { useState } from "react";
import { BackdropContainer } from "./styled";

 
const Backdrop = () => {
  const [isShowCart, setIsShowCart] = useState(false);

  return (
    <BackdropContainer
      $isShowCart={isShowCart}
      onClick={() => setIsShowCart(!isShowCart)}
    ></BackdropContainer>
  );
};

export default Backdrop;