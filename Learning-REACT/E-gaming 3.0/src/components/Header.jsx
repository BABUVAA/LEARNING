import { useNavigate } from "react-router-dom";
import Logo from "./UI/Logo";
import Button from "@mui/joy/Button";
import { loginActions } from "../Store/LoginState";
import { useSelector } from "react-redux";

const Header = () => {
  const handleLogin = () => {
    loginActions.toggleLogin();
  };
  return (
    <>
      <header>
        <div className='header-container'>
          <Logo />
          <div className='log-buttons'>
            <Button
              variant='outlined'
              onClick={handleLogin}
              style={{ marginRight: "4px" }}>
              Login
            </Button>
            <Button variant='solid'>Signup</Button>
          </div>
        </div>
      </header>
      <div className='under-header-container' />
    </>
  );
};
export default Header;
