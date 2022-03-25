import About from "./Component/About/";
import Banner from "./Component/Banner/";
import Footer from "./Component/Footer";
import Header from "./Component/Header/"
import Skill from "./Component/MySkill";
import Project from "./Component/Project";
import Resume from "./Component/Resume";

function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Resume/>
      <Skill/>
      <Project/>
      <Footer/>
    </>
  );
}

export default App;
