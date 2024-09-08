import "./App.css";
// import Card from "./components/ui/Card";
import TournamentRow from "./components/ui/TournamentRow";

function App() {
  const games = [
    {
      id: 1,
      src: "/CocName.png",
      background: "/CocBackground.jpg",
      character: "/CocChar.png",
    },
    {
      id: 2,
      src: "/PubgName.png",
      background: "/PubgBackground.jpg",
      character: "/PubgChar.png",
    },
    // Add more games here if needed
  ];

  const tournament = [
    {
      id: 1,
      gameLogo: "/CocChar.png",
      logo: "/logo.png",
      tags: [
        "Featured",
        "Leaderboard",
        "All Regions",
        "All servers",
        "Trophy Events Only",
        "mobile",
      ],
      count: "1,000",
      prize: "500",
      entry: "Free entry",
    },
  ];
  return (
    <>
      {/* <div className='cards'>
        {games.map((game) => (
          <Card
            key={game.id}
            name={game.src}
            background={game.background}
            character={game.character}
          />
        ) 
        )}
      </div> */}
      {/* <div className='tournament'>
        {tournament.map((item) => (
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
      </div> */}
    </>
  );
}

export default App;
