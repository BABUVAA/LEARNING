import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SideBar from "./component/SideBar";
import CreatePost from "./component/CreatePost";
import PostList from "./component/PostList";

function App() {
  const selectedTab = "Home";
  return (
    <>
      <div className='appContainer'>
        <div className='sideBar'>
          <SideBar />
        </div>
        <div className='mainPart'>
          <Header />
          <div className='content'>
            {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
