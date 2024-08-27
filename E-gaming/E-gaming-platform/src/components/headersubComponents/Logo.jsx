import styles from "./Logo.module.css";
import logo from "../../assets/E_logo.png";
const Logo = () => {
  return (
    <div className={styles.headerLogoContainer}>
      <a className={styles.headerlogo} href="#">
        <img src={logo} alt="e-gaming" width="145" height="55px" />
      </a>
    </div>
  );
};
export default Logo;
