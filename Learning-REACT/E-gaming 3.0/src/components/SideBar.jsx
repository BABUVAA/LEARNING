import { useSelector } from "react-redux";
import AddGameBox from "./SideBar/AddGameBox";
import GameBox from "./SideBar/GameBox";

const SideBar = () => {
  const gameObj = useSelector((store) => store.games);

  return (
    <>
      <div
        className='sidebar-container'
        style={{
          display: "flex",
          flexDirection: "column",
          width: "68px",
          height: "100vh",
          boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 8px 1px",
          position: "sticky",
          padding: "8px",
          margin: "8px 0px",
        }}>
        <AddGameBox />
        <hr style={{ margin: "8px 0px" }} />
        {gameObj.map((game) => (
          <GameBox key={game.id} character={game.character} />
        ))}
      </div>
    </>
  );
};
export default SideBar;
