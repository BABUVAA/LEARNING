import Logo from "./UI/Logo";
import Button from "@mui/joy/Button";
import { loginActions } from "../Store/LoginState";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(loginActions.toggleLogin());
  };
  const handleSignup = () => {
    dispatch(loginActions.getState());
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
            <Button onClick={handleSignup} variant='solid'>
              Signup
            </Button>
          </div>
        </div>
      </header>
      <div className='under-header-container' />
    </>
  );
};
export default Header;
