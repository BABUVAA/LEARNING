import styles from "./Header.module.css";
import Logo from "./headersubComponents/Logo";
import PlatformDropdown from "./headersubComponents/PlatformDropdown";


const Header = () => {
 

  return (
    <>
    <header>
    <div className={styles.headerContainer}>
       <Logo/>
       <PlatformDropdown/>
            
      </div>
    </header>
    <main>main</main>
    <footer>footer</footer>
    </>
  );
};

export default Header;
