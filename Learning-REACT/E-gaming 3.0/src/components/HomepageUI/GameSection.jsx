import Card from "../UI/card/Card";
import EmptyCard from "../UI/card/EmptyCard";
import { useSelector } from "react-redux";
const GameSection = () => {
  const GameObj = useSelector((store) => store.games);
  return (
    <>
      <section
        className='game-section'
        style={{
          position: "relative",
          backgroundColor: "transparent",
          zIndex: "2",
          maxHeight: "100vh",
        }}>
        <section
          style={{
            width: "80vw",
            height: "50vh",
            backgroundColor: "white",
            zIndex: "2",
            marginRight: "-80vw",
          }}></section>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            zIndex: "3",
            width: "80vw",
            height: "50vh",
            backgroundColor: "white",
            marginTop: "-100px",
            padding: "40px 56px",
            textAlign: "left",
            backgroundColor: "#fff",
            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
            justifyContent: "space-evenly",
          }}>
          <h1> Available games</h1>
          <div style={{ display: "flex", padding: "20px", flexWrap: "wrap" }}>
            {GameObj.map((game) => (
              <Card
                key={game.id}
                name={game.src}
                background={game.background}
                character={game.character}
              />
            ))}
            <EmptyCard />
            <EmptyCard />
          </div>
        </div>
        <section
          style={{
            width: "80vw",
            height: "50vh",
            backgroundColor: "white",
            marginTop: "-100px",
          }}></section>
      </section>
    </>
  );
};
export default GameSection;
