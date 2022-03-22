
import "./App.css";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Speakers from "./Components/Speaker/Speakers";
import Sponsors from "./Components/Sponsors/Sponsors";
import Team from "./Components/Team/Team";
import Timeline from "./Components/Timeline/Timeline";

function App() {
  return (
    <div className="app">
      {/* 
      <Faq/>
      <Contact/>
    */}
      {/* <Gallery/> */}
      

      <Navbar />
      <Landing />
      <About />
      <Speakers />
      <Timeline/>
      <Sponsors />
      <Team />
      <Footer />
      <Gallery/>
    </div>
  );
}

export default App;
