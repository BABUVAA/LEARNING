import "./App.css";
import Logo from "./Components/Header/Logo";
import PlatformSelector from "./Components/Header/PlatformSelector";
import PlatformList from "./Components/PlatformList";

function App() {
  return (
    <>
      <header>
        <div className='headerContainer'>
          <div className='headerLeft'>
            <Logo />
            <div className='plaformSelector'>
              <PlatformSelector />
              <PlatformList className='platList'/>
            </div>
            <ul className='navMenu'>
              <li className='navMenulist'>
                <a className='navText' href='#'>
                  Compete
                </a>
              </li>
              <li className='navMenulist'>
                <a className='navText' href='#'>
                  Marketplace
                </a>
              </li>
              <li className='navMenulist'>
                <a className='navText' href='#'>
                  News
                </a>
              </li>
              <li className='navMenulist'>
                <a className='navText' href='#'>
                  <img src='/dots.svg' alt='...' />
                </a>
              </li>
            </ul>
          </div>
          <div className='headerCenter'>
            <button className='joinNow'>
              <span> Join E-gaming Now</span>
            </button>
          </div>
          <button className='menu'>
            <img src='/menu.svg' alt='MENU' className='menuImg' />
          </button>
          <div className='headerRight'>
            <button className='login'>Log in</button>
            <button className='signup'>Sign up</button>
          </div>
        </div>
      </header>
      {/* <main>
        <div className='content'>
          <video className='vid' src='/video.mp4' width='100%' autoPlay muted loop></video>
        
        </div>
      </main> */}
      <footer></footer>
      {/* <div className="footerNote">
        <p>E-gaming is not endorsed by, directly affiliated with, maintained or sponsored by Apple Inc, Electronic Arts, Activision Blizzard, Take-Two Interactive, Riot Games, Microsoft, Xbox or Epic Games. All content, games titles, trade names and/or trade dress, trademarks, artwork and associated imagery are trademarks and/or copyright material of their respective owners.</p>
      </div> */}
    </>
  );