import styles from "./SideBar.module.css";
import AvailableGames from "../services/AvailableGames";
const SideBar = () => {
  return (
    <>
      <div className={styles.sideBarContainer}>
        {AvailableGames.map((game) => (
          <a>
            <div className={styles.gameBox}>
              <img
                src={game.character}
                alt='GAMES'
                width='44px'
                height='44px'
              />
            </div>
          </a>
        ))}
      </div>
    </>
  );
};
export default SideBar;
