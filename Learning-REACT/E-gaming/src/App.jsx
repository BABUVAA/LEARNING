import "./App.css";
import Logo from "./Components/Header/Logo";
import PlatformSelector from "./Components/Header/PlatformSelector";
import PlatformList from "./Components/PlatformList";
import NavBar from "./Components/Header/NavBar";
import LogButtons from "./Components/LogButtons";

function App() {
  return (
    <>
      <header>
        <div className='headerContainer'>
          <div className='headerLeft'>
            <Logo />
            <div className='plaformSelector'>
              <PlatformSelector />
              <PlatformList />
            </div>
            <NavBar />
          </div>

          <div className='headerCenter'>
            <button className='joinNow'>
              <span> Join E-gaming Now</span>
            </button>
          </div>

          <button className='menu'>
            <img src='/menu.svg' alt='MENU' className='menuImg' />
          </button>

          <LogButtons />
        </div>
      </header>
      <div>
        <video className='vdo' src='/video.mp4' autoPlay loop muted></video>
      </div>
      <main></main>

      <footer></footer>
    </>
  );
}

export default App;
