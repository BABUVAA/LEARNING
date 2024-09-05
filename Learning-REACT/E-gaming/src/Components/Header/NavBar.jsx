import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <>
      <ul className={styles.navMenu}>
        <li className={styles.navMenu}>
          <a className={styles.navText} href='#'>
            Compete
          </a>
        </li>
        <li className={styles.navMenu}>
          <a className={styles.navText} href='#'>
            Marketplace
          </a>
        </li>
        <li className={styles.navMenu}>
          <a className={styles.navText} href='#'>
            News
          </a>
        </li>
        <li className={styles.navMenu}>
          <a className={styles.navText} href='#'>
            <img src='/dots.svg' alt='...' />
          </a>
        </li>
      </ul>
    </>
  );
};
export default NavBar;
