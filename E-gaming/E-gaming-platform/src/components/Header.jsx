import styles from "./Header.module.css";
import LanguageDropDown from "./headersubComponents/LanguageDropDown.jsx";
import Logo from "./headersubComponents/Logo";
import PlatformDropdown from "./headersubComponents/PlatformDropdown";
import HeaderNavBar from "./headersubComponents/headerNavBar";
import Login from "./headersubComponents/Login.jsx";
import SignUp from "./headersubComponents/SignUp.jsx";
const Header = () => {
  return (
    <>
      <header>
        <div className={styles.headerContainer}>
          <div className={styles.elogoContainer}>
            <Logo />
            <div className={styles.headerNavDrop}>
              <PlatformDropdown />
              <HeaderNavBar />
            </div>
          </div>

          <div className={styles.LogConatiner}>
            <LanguageDropDown />
            <Login />
            <SignUp />
          </div>
        </div>
      </header>
      <main>main</main>
      <footer>footer</footer>
    </>
  );
};

export default Header;
