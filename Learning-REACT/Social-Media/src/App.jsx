import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SideBar from "./component/SideBar";
import StateContextProvider from "./store/StateContext";
import Main from "./component/Main";

function App() {
    
  return (
    <StateContextProvider>
      <div className='appContainer'>
        <div className='sideBar'>
          <SideBar />
        </div>
        <div className='mainPart'>
          <Header />
          <div className='content'>
            <Main />
          </div>
          <Footer />
        </div>
      </div>
    </StateContextProvider>
  );
}

export default App;
