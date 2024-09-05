import styles from "./LogButtons.module.css";
const LogButtons = () => {
  return (
    <>
      <div className={styles.headerRight}>
        <button className={styles.login}>Log in</button>
        <button className={styles.signup}>Sign up</button>
      </div>
    </>
  );
};

export default LogButtons;
