import Footer from "./components/Footer.jsx";
import GameBar from "./components/GameBar.jsx";
import Header from "./components/Header.jsx";
import { Button, Flex } from 'antd';

const App = () => {
  
  return (
    <> 
    <header className="bg-dark text-white text-center py-3">
      <div className="mainHeaderContainer ">
        <Header/>
      </div>
    </header>
       <main className="mainContainer  py-3" id="container">
        <div className="gameBar" id="gameBar" ><GameBar/></div>
      <section className="contentContainer">
      <div className="contentArea"><p>This is content Area</p></div>
      <Flex gap="small" wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Flex>
      <div className="contentArea"><p>This is content Area</p></div>
      <div className="contentArea"><p>This is content Area</p></div>
      <div className="contentArea"><p>This is content Area</p></div>
      <div className="contentArea"><p>This is content Area</p></div>
      <div className="contentArea"><p>This is content Area</p></div>
      <div className="contentArea"><p>This is content Area</p></div>
      <div className="contentArea"><p>This is content Area</p></div>
      <div className="contentArea"><p>This is content Area</p></div>
      <div className="contentArea"><p>This is content Area</p></div>
      <div className="contentArea"><p>This is content Area</p></div>
      <div className="contentArea"><p>This is content Area</p></div>
      <div className="contentArea"><p>This is content Area</p></div>
      <div className="contentArea"><p>This is content Area</p></div>
      <div className="contentArea"><p>This is content Area</p></div>
      <div className="contentArea"><p>This is content Area</p></div>
      <div className="contentArea"><p>This is content Area</p></div>
      <div className="contentArea"><p>This is content Area</p></div>
      <div className="contentArea"><p>This is content Area</p></div>
      <div className="contentArea"><p>This is content Area</p></div>
      </section>
       </main>
      
       <footer>
     <div>
        <Footer/>
     </div>
       </footer>
    </> 
  );
};

export default App;
