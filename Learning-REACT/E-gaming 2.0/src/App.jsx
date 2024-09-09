import "./App.css";
import Card from "./components/ui/Card";
import AvailableGames from "./services/AvailableGames";
import TournamentRow from "./components/ui/TournamentRow";
import TournamentRows from "./services/TournamentRow";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className='cards'>
        {AvailableGames.map((game) => (
          <Card
            key={game.id}
            name={game.src}
            background={game.background}
            character={game.character}
          />
        ))}
      </div>
      <div className='tournament'>
        {TournamentRows.map((item) => (
          <TournamentRow
            id={item.id}
            gameLogo={item.gameLogo}
            logo={item.logo}
            tags={item.tags}
            count={item.count}
            prize={item.prize}
            entry={item.entry}
          />
        ))}
      </div>
    </>
  );
}

export default App;
