import "./App.css";
import Logo from "./Components/Header/Logo";
import PlatformSelector from "./Components/Header/platformSelector";
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
              <PlatformList className='platformList' />
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
            <div className='navMenu'></div>
          </div>
          <div className='headerRight'></div>
        </div>
      </header>
      {/* <main></main>
      <footer></footer> */}
    </>
  );
  none;
}

export default App;
