import styles from "./GameCard.module.css";
import Logo from "../assets/clash_of_clans_logo.png";
const GameCard = () => {
  return (
    <>
      <div className={styles.container}>
        <img src={Logo} alt="COC_logo" width="200" height="200" />
      </div>
    </>
  );
};
export default GameCard;
