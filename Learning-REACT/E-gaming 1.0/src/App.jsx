import "./App.css";

import MainBody from "./Components/main/MainBody";
import Header from "./Components/Header";


function App() {
  const [platformMenu, setPlatformMenu] = useState(false);

  return (
    <><Header />
    
      <div>
        <video className='vdo' src='/video.mp4' autoPlay loop muted></video>
      </div>

      {/* <main> */}
      {/* <LoginPage /> */}
      <div className='headerGap'>
        <h1>Bhupesh</h1>
      </div>
      <div className='headerGap'>
        <MainBody />
      </div>

      {/* </main> */}

      <footer></footer>
    </>
  );
}

export default App;
