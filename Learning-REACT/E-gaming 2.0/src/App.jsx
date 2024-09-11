import "./App.css";
import Header from "./components/Header";
import Intro from "./components/main/Intro";
import SideBar from "./components/SideBar";
import Games from "./components/main/Games";

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
        <SideBar/>
        <div className='content'>
          <Intro/>
          <Games/>
          
        </div>
      </main>
    </>
  );
}

export default App;
