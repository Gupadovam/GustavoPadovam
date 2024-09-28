import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Import the slim version for smaller bundle size

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // Initialize the particles engine once
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load only the required features
    }).then(() => {
      setInit(true); // Set the initialization state to true
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container); // Optional: Log the container once particles are loaded
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#3C3D37", // Background color
        },
      },
      fpsLimit: 120, // Limit the frame rate
      interactivity: {
        events: {
          onClick: {
            enable: true, // Enable particles push on click
            mode: "push",
          },
          onHover: {
            enable: true, // Enable particles repulse on hover
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4, // Number of particles added on click
          },
          repulse: {
            distance: 200, // Distance of repulsion on hover
            duration: 0.4, // Duration of repulsion effect
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff", // Particle color
        },
        links: {
          color: "#ffffff", // Link color
          distance: 150, // Distance between linked particles
          enable: true, // Enable particle links
          opacity: 0.5, // Link opacity
          width: 1, // Link width
        },
        move: {
          direction: MoveDirection.none, // Particle movement direction
          enable: true, // Enable particle movement
          outModes: {
            default: OutMode.out, // Particle goes out of the canvas when it exits the boundary
          },
          random: false, // No random movement
          speed: 6, // Particle movement speed
          straight: false, // No straight movement
        },
        number: {
          density: {
            enable: true, // Enable density calculation
          },
          value: 80, // Number of particles
        },
        opacity: {
          value: 0.5, // Particle opacity
        },
        shape: {
          type: "circle", // Particle shape
        },
        size: {
          value: { min: 1, max: 5 }, // Particle size range
        },
      },
      detectRetina: true, // Enable retina support
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles" // ID for the particle component
        particlesLoaded={particlesLoaded} // Function called when particles are loaded
        options={options} // Particle options defined above
      />
    );
  }

  return <></>; // Return an empty fragment until particles are initialized
};

export default App;
