  import styles from "./HeaderNavBar.module.css";

  const HeaderNavBar = () =>{
return <>
      <div className={styles.navBarContainer}>
      <a  className={styles.navTab} href="#"><span className={styles.navTAbContext}>COMPETE</span></a>
      <a  className={styles.navTab} href="#"><span className={styles.navTAbContext}>MARKETPLACE</span></a>
      <a  className={styles.navTab} href="#"><span className={styles.navTAbContext}>NEWS</span></a>
      </div>
      
</>


  }

  export default HeaderNavBar