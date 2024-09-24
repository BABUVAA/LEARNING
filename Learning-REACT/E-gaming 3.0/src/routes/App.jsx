import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Login from "../components/Login";
function App() {
  const loginState = useSelector((store) => store.login);
  return (
    <>
      <Header />
      {loginState && <Login />}
      <div
        style={{
          filter: loginState ? "blur(5px)" : "none",
        }}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
