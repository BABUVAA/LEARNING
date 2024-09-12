import styles from "../components/Display.module.css";
const display = ({ displayVal }) => {
  return (
    <input className={styles.display} value={displayVal} type='text' readOnly />
  );
};
export default display;
