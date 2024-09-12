import styles from "./LogButtons.module.css";
import LoginScreen from "../../pages/LoginScreen";
const LogButtons = () => {
  return (
    <>
      <div className={styles.headerRight}>
        <button className={styles.login} onClick={() => <LoginScreen></LoginScreen>}>
          Log in
        </button>
        <button className={styles.signup}>Sign up</button>
      </div>
    </>
  );
};

export default LogButtons;
