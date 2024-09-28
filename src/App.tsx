import NavContainer from "./components/NavContainer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/components/app.sass";


function App() {
  return (
    <div id="portfolio">
      <NavContainer/>
      <Hero/>
      <div className="extras">
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
