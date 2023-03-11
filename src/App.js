import'./App.css';
import Navbar from './NavBar/NavBar.js'
import PictureOfMe from './PictureOfMe/PictureOfMe.js'
import Intro from "./Intro/Intro.js"
import About from "./About/About.js"
import Experience from "./Experience/Experience.js"
import Contact from "./Contact/Contact.js"
import Skills from "./Skills/Skills.js"
import Interests from "./Interests/Interests.js"

function App() {
  return (
    <div className="App">
      <div id = "frontPage" className="shadow-bottom">
        <Navbar/>
        <PictureOfMe/>
        <Intro/>
      </div>
        <About/>
      <div id = "secondPage">
        <Experience/>
      </div>
      <div id = "thirdPage">
      <Skills/>
      </div>
      <div id = "fourthPage">
      <Interests/>
      </div>
      <div id = "thirdPage">
      <Contact/>
      </div>
    </div>
  );
}

export default App;
