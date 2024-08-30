import "./App.css";
import logo from "../public/logo.png";
import Button from "@mui/material/Button";
function App() {
  return (
    <>
      <header>
        <div className='header-container'>
          <div className='nav-bar'>
            <a className='logo'>
              <div className='hidden'>
                <img className='logo-icon' id="logo-iconid" src={logo} alt='logo' />
              </div>
              <div className='logo-text' id="logo-textid">E Gaming</div>
            </a>
            <div className='platform-selector' id="platform-selectorid">
              <span>PLAYSTATION</span>
            </div>
            <div className='nav-menu' id="nav-menuid">
              <a href='#' className='nav-tab'>
                <div className='text-container'>
                  <span className='nav-Text'> Compete</span>
                </div>
              </a>
              <a href='#' className='nav-tab'>
                <div className='text-container'>
                  <span className='nav-Text'> Marketplace</span>
                </div>
              </a>
              <a href='#' className='nav-tab'>
                <div className='text-container'>
                  <span className='nav-Text'> News</span>
                </div>
              </a>
              <a href='#' className='nav-tab'>
                <div className='text-container'>
                  <span className='nav-Text'> ... </span>
                </div>
              </a>
            </div>
          </div>

          <div className='log-bar'>
            <div className='language-selector'> Eng </div>
            <div className='button-container'>
              <button className='login'>Log in</button>
              <button className='signup'>Sign Up</button>
            </div>
          </div>
        </div>
      </header>
      <main>
      <div className="side-bar-container">
        <div className="side-bar">
        </div>
        <div className="empty-space"></div>
        <div className="content-area">
          <div className="banner">helllo</div>
        </div>
      </div>

      </main>
      <footer></footer>
    </>
  );
}

export default App;
