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
      <main>
        <div className='content'>
          <div className='intro'>
            <h1 className='introTitle'>
              Compete on
              <span className='introLogo'>E-Gaming</span>
            </h1>
            <p className='introText'>
              Play the games you love. Compete in free tournaments. Win real
              money & prizes.
            </p>

            <div className='createAccount'>
              <button className='createButton'>

                <img src="/trophy.svg" width="40px" height="40px"/>
                <div className="buttonText">
                  <span>Start playing Now!</span>
                  <span>Create an Account</span>
                </div>
              </button>
            </div>
          </div>
          <section className='sectionFirst'>
            <div className="gamesPanel"> 
              <h2>Available Games</h2>
              <div className=" games">
                <div className="coc">
                <img src="/coc.jpg" width="400px" height="400px"/>
                </div>
                <div className="coc">
                <img src="/coc.jpg" width="400px" height="400px"/>
                </div>
                <div className="coc">
                <img src="/coc.jpg" width="400px" height="400px"/>
                </div>
                <div className="coc">
                <img src="/coc.jpg" width="400px" height="400px"/>
                </div>
                 </div>
              
               </div>
          </section>
        </div>
      </main>

      <footer></footer>
    </>
  );
  none;
}

export default App;
