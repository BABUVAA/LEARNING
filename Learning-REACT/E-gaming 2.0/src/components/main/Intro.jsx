import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <>
      <div className={styles.intro}>
        <h1>
          Compete on <span> E Gaming</span>
        </h1>
        <p>
          Play the games you love. Compete in free tournaments. Win real money &
          prizes.
        </p>
        <div className={styles.join}>
          <button>
            <div>
              <img src='/trophy.svg' width='50px' height='50px'></img>
            </div>
            <span> Start Playing Now</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Intro;
