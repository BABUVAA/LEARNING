import Cards from "../Cards";
import styles from "./MainBody.module.css";
const MainBody = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.intro}>
          <h1 className={styles.introTitle}>
            Compete on
            <span className={styles.introLogo}>E-Gaming</span>
          </h1>
          <p className={styles.introText}>
            Play the games you love. Compete in free tournaments. Win real money
            & prizes.
          </p>

          <div className={styles.createAccount}>
            <button className={styles.createButton}>
              <img src='/trophy.svg' width='40px' height='40px' />
              <div className={styles.buttonText}>
                <span>Start playing Now!</span>
                <span>Create an Account</span>
              </div>
            </button>
          </div>
        </div>
        <section className={styles.sectionFirst}>
          <div className={styles.gamesPanel}>
            <h2>Available Games</h2>
            <div className={styles.games}>
              <Cards/>
              <Cards/>  
                                               
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default MainBody;
