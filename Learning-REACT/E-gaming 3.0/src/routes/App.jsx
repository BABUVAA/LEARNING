import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import Login from "../components/Login";
function App() {
  const loginState = useSelector((store) => store.login);
  return (
    <>
      <Header />
      {loginState === true && <Login />}
      <Outlet />
    </>
  );
}

export default App;
