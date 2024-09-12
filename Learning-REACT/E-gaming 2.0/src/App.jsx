import "./App.css";
import Header from "./components/Header";
import Intro from "./components/main/Intro";
import SideBar from "./components/SideBar";
import Games from "./components/main/Games";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <video
          className='backgroundVideo'
          src='/video.mp4'
          muted
          autoPlay
          loop
        />
      </div>
      <header>
        <Header />
      </header>
      <div className='headerGap' />
      <main>
        <SideBar />
        <div className='content'>
          <Intro />
          <Games />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
      <div className='footerNote'>
        <p>
          E-Gaming is not endorsed by, directly affiliated with, maintained or
          sponsored by Apple Inc, Electronic Arts, Activision Blizzard, Take-Two
          Interactive, Riot Games, Microsoft, Xbox or Epic Games. All content,
          games titles, trade names and/or trade dress, trademarks, artwork and
          associated imagery are trademarks and/or copyright material of their
          respective owners.
        </p>
      </div>
    </>
  );
}

export default App;
