import { Outlet } from "react-router";
import Logo from "../componenets/Logo";

function AuthLayout() {
  return (
    <div>
      <Logo />
      <Outlet />
    </div>
  );
}

export default AuthLayout;
