import styles from "./GamingCard.module.css";
import Logo from '../assets/clash_of_clans_logo.png'; // Replace with actual image paths

const GameCard = () => {
  const games = [
    { id: 1, title: "Clash of Clans", image: Logo },
    { id: 2, title: "Game 2", image: Logo }, // Add more games as needed
    // Add more game objects here
  ];

  return (
    <div className={styles.container}>
      {games.map(game => (
        <div key={game.id} className={styles.card}>
          <img src={game.image} alt={`${game.title} logo`} />
          <h3>{game.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default GameCard;
