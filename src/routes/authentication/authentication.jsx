import { AuthenticationContainer } from "./styled";
import { Outlet } from "react-router-dom";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <Outlet/>
    </AuthenticationContainer>
  );
};

export default Authentication;
