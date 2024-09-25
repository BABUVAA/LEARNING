import SideBar from "../components/SideBar";
import { CiSearch } from "react-icons/ci";
import Card from "../components/UI/card/Card";
import AddGameCard from "../components/UI/card/AddGameCard";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const GameObj = useSelector((store) => store.games);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}>
        <SideBar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "24px",
            height: "100vh",
            width: "calc(90% - 68px)",
            padding: "20px",
            fontSize: "24px",
            margin: "0 10%",
          }}>
          <h3 style={{ padding: "16px" }}>Compete</h3>
          <section
            style={{
              boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 8px 1px",
              padding: "16px",
              marginTop: "16px",
            }}>
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                padding: "16px",
                borderBottom: "1px solid rgb(240,240,240)",
              }}>
              <CiSearch />
              <input
                type='search'
                placeholder='Search...'
                style={{
                  width: "90%",
                  outline: "none",
                  borderColor: "transparent",
                  marginLeft: "16px",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: "16px",
              }}>
              <h6 style={{ padding: "16px" }}> Connected games</h6>
              <div>
                <AddGameCard />
              </div>
              <h6 style={{ padding: "16px" }}> Available games</h6>
              <div style={{ display: "flex" }}>
                {GameObj.map((game) => (
                  <Card
                    key={game.id}
                    name={game.src}
                    background={game.background}
                    character={game.character}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
