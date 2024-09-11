import styles from "./Games.module.css";
import Card from "../ui/Card";
import AvailableGames from "../../services/AvailableGames";

const Games = () => {
  return (
    <>
      <div className={styles.container}>
        <h1> Available Games</h1>

        <div className={styles.game}>
        {AvailableGames.map((game)=>   <Card key={AvailableGames.id}
            name={game.src}
            background={game.background}
            character={game.character}
          />)}
        </div>
      </div>
    </>
  );
};
export default Games;
