import "./App.css";
import Card from "./components/ui/Card";

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
  return (
    <>
      <div className='cards'>
        {games.map((game) => (
          <Card
            key={game.id}
            name={game.src}
            background={game.background}
            character={game.character}
          />
        ) 
        )}
      </div>
    </>
  );
}

export default App;
