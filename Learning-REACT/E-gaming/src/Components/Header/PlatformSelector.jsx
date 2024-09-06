import styles from "./PlatformSelector.module.css";
const PlatformSelector = (setPlatformMenu, platformMenu) => {
  return (
    <>
      <div
        className={styles.platform}
        onClick={() => {
          setPlatformMenu(!platformMenu);
        }}>
        <button className={styles.button}>
          <div>
            <a className={styles.active} href='#'>
              <img src='/mobile.svg' alt='#' className={styles.logo} />
              <span className={styles.text}>Mobile</span>
            </a>
          </div>
          <span>
            <img src='/down.svg' alt='#' className={styles.logo} />
          </span>
        </button>
      </div>
    </>
  );
};
export default PlatformSelector;
