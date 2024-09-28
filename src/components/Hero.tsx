import "../styles/components/hero.sass"; 
import Particle from "./Particles";
import TextEffect from "./TextEffect";
import Avatar from "../img/eu.jpg"; 

const Hero = () => {
    return (
      <div id= "hero" className="hero-container"> 
        <Particle />
        <div className="name">
            <div className="text-container">
                <h1>HI, I'M <span className="name-accent">GUSTAVO!</span></h1>
                <TextEffect />
                <p className="description">
                I’m a Computer Engineering student at the Technological Federal University of Paraná, deeply passionate about competitions, especially in sports. This enthusiasm has fueled my interest in programming challenges as well. Currently, I'm working on a project called LASSIP and engaged in research and development on Ultrasound at AUSPEX 2. In my free time, I’m also diving into web development to expand my skill set.
                </p>
            </div>
            <img className="img" src={Avatar} alt="Gustavo Padovam" />
        </div>
      </div>
    );
};
  
export default Hero;