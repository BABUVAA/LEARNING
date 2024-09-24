import styles from "./Card.module.css";
const EmptyCard = () => {
  return (
    <>
      <div className={styles.cardWrapper} style={{ alignItems: "center" }}>
        <span
          style={{
            color: "#C0C6CB",
            fontSize: "20px",
            fontWeight: "600",
          }}>
          Coming soon
        </span>
        <div
          style={{
            color: "#C0C6CB",
            border: "1px solid rgb(240,240,240",
            background: "rgb(255,255,255)",
          }}>
          <h4>Stay Tuned!</h4>
        </div>
      </div>
    </>
  );
};
export default EmptyCard;
