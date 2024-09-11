import styles from "./PlatformList.module.css";

const PlatformList = () => {
  return (
    <>
      <div className={styles.dropdownContainer}>
        <ul className={styles.dropdown}>
          <li>
            <button className={styles.button}>
              <div>
                <a className={styles.active} href='#'>
                  <img src='/mobile.svg' alt='#' className={styles.logo} />
                  <span className={styles.text}>Mobile</span>
                </a>
              </div>
              <span>
                <img src='/right.svg' alt='#' className={styles.logo} />
              </span>
            </button>
          </li>
          <li>
            <button className={styles.button}>
              <div>
                <a className={styles.active} href='#'>
                  <img src='/playstation.png' alt='#' className={styles.logo} />
                  <span className={styles.text}>Playstation</span>
                </a>
              </div>
              <span>
                <img src='/right.svg' alt='#' className={styles.logo} />
              </span>
            </button>
          </li>
          <li>
            <button className={styles.button}>
              <div>
                <a className={styles.active} href='#'>
                  <img src='/pc.svg' alt='#' className={styles.logo} />
                  <span className={styles.text}>Desktop (PC)</span>
                </a>
              </div>
              <span>
                <img src='/right.svg' alt='#' className={styles.logo} />
              </span>
            </button>
          </li>
          <li>
            <button className={styles.button}>
              <div>
                <a className={styles.active} href='#'>
                  <img src='/xbox.png' alt='#' className={styles.logo} />
                  <span className={styles.text}>X-box</span>
                </a>
              </div>
              <span>
                <img src='/right.svg' alt='#' className={styles.logo} />
              </span>
            </button>
          </li>
          <li>
            <button className={styles.button}>
              <div>
                <a className={styles.active} href='#'>
                  <img src='/steam.png' alt='#' className={styles.logo} />
                  <span className={styles.text}>Steam</span>
                </a>
              </div>
              <span>
                <img src='/right.svg' alt='#' className={styles.logo} />
              </span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
export default PlatformList;
