import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SiCplusplus, SiJavascript, SiTypescript, SiReact, SiPython, SiHtml5, SiCss3, SiSass } from "react-icons/si";
import "../styles/components/projects.sass";
import gif1 from "../img/GIF.gif";
import gif2 from "../img/scannerGIF.gif";
import gif3 from "../img/RichText-Editor.png";

// Interface para os projetos
interface Project {
  title: string;
  description: string;
  gif?: string; // Campo opcional para o gif
  github: string;
  languages: string[];
}

const projectsData: Project[] = [
  {
    title: "Game-Gangster",
    description: "A C++ Object Oriented game made using the SFML library, for Programming Techniques (Técnicas de Programação) course at UTFPR.",
    gif: gif1,
    github: "https://github.com/Gupadovam/Game-Gangster",
    languages: ["C++"], 
  },
  {
    title: "Scanner-3D",
    description: "Development of a 3D Scanner system aimed at determining the most effective methodology for calculating the volume of objects.",
    gif: gif2,
    github: "https://github.com/Gupadovam/Scanner-3D",
    languages: ["Python", "C++"], 
  },
  {
    title: "gupadovam.github.io",
    description: "Welcome to my portfolio website, where I showcase a selection of my projects and share insights about my journey as a developer.",
    github: "https://github.com/Gupadovam/GustavoPadovam",
    languages: ["TypeScript", "React", "HTML", "SAAS"],
  },
  {
    title: "APS-PendulumFis2",
    description: "Project that analyzes a physical pendulum using video data, fitting it to a damped oscillation model to calculate parameters like the quality factor.",
    github: "https://github.com/Gupadovam/APS-PendulumFis2",
    languages: ["Python"], 
  },
  {
    title: "RichText-Editor",
    description: "RichText-Editor project is a fun little learning project where I explore creating a text editor with rich text features.",
    gif: gif3,
    github: "https://github.com/Gupadovam/RichText-Editor",
    languages: ["HTML", "JavaScript", "CSS"], 
  }
];

// Mapeamento das linguagens para ícones
const languageIcons: { [key: string]: JSX.Element } = {
  "C++": <SiCplusplus className="language-icon" />,
  "TypeScript": <SiTypescript className="language-icon" />,
  "React": <SiReact className="language-icon" />,
  "Python": <SiPython className="language-icon" />,
  "JavaScript": <SiJavascript className="language-icon" />,
  "HTML": <SiHtml5 className="language-icon"/>,
  "CSS": <SiCss3 className="language-icon"/>,
  "SAAS": <SiSass className="language-icon"/>,
};

const Projects: React.FC = () => {
  return (
    <div id="projects" className="projects">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-languages">
                {project.languages.map((language, langIndex) => (
                  <span key={langIndex} className="language-item" title={language}>
                    {languageIcons[language] || null}
                    {language}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  View on GitHub <FontAwesomeIcon icon={faGithub} className="github-icon" /> 
                </a>
              </div>
            </div>
            {project.gif && ( // Renderiza o GIF apenas se ele existir
              <img src={project.gif} alt={project.title} className="project-gif" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
