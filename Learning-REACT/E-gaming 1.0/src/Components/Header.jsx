import Logo from "./Header/Logo";
import PlatformSelector from "./Header/PlatformSelector";
import PlatformList from "./PlatformList";
import NavBar from "./Header/NavBar";
import LogButtons from "./LogButtons";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <Logo />
          <div className={styles.plaformSelector}>
            <PlatformSelector />
            <PlatformList />
          </div>
          <NavBar />
        </div>

        <div className={styles.headerCenter}>
          <button className={styles.joinNow}>
            <span> Join E-gaming Now</span>
          </button>
        </div>

        <button className={styles.menu}>
          <img src='/menu.svg' alt='MENU' className={styles.menuImg} />
        </button>
        <LogButtons />
      </div>
    </>
  );
};
export default Header;
