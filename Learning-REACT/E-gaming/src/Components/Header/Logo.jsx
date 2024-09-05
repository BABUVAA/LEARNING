import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <>
      <div className={styles.logoContainer}>
        <a className={styles.logo}>
          <img className={styles.logoImg} src='/logo.png' alt='logo' />
          <img className={styles.logoText} src='/E.svg' alt='logo' />
          <img className={styles.logoText} src='/G.svg' alt='logo' />
          <img className={styles.logoText} src='/A.svg' alt='logo' />
          <img className={styles.logoText} src='/M.svg' alt='logo' />
          <img className={styles.logoText} src='/I.svg' alt='logo' />
          <img className={styles.logoText} src='/N.svg' alt='logo' />
          <img className={styles.logoText} src='/G.svg' alt='logo' />
        </a>
      </div>
    </>
  );
};

export default Logo;
