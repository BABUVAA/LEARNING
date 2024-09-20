import Typography from "@mui/joy/Typography";
import Intro from "../components/HomepageUI/Intro";
import Footer from "../components/Footer";
import GameSection from "../components/HomepageUI/GameSection";
import FooterNote from "../components/FooterNote";

const HomePage = () => {
  return (
    <>
      <div className='home-page-container'>
        <Intro />
        <GameSection />
        <section
          style={{
            height: "50vh",
            padding: "20vh",
            width: "100%",
            backgroundColor: "black",
            marginTop: "-100px",
          }}></section>
        <section></section>
      </div>
      <Footer />
      <FooterNote />
    </>
  );
};
export default HomePage;
