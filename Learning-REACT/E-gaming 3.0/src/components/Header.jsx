import Logo from "./UI/Logo";
import Button from "@mui/joy/Button";

const Header = () => {
  return (
    <>
      <header>
        <div className='header-container'>
          <Logo />
          <div className='log-buttons'>
            <Button variant='outlined' style={{ marginRight: "4px" }}>
              Login
            </Button>
            <Button variant='solid'>Signup</Button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
