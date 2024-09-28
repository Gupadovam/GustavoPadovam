import { useState } from 'react';
import "../styles/components/nav.sass";

const NavContainer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className="nav-container">
      <h1 className="nav-title">
        Web<span className="nav-title-accent">Dev</span>
      </h1>
      
      {/* Botão Hamburger */}
      <div
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu de Navegação Padrão */}
      <div className="nav-sections">
        <div className="nav-section" onClick={() => scrollToSection('hero')}>
          HOME
        </div>
        <div className="nav-section" onClick={() => scrollToSection('projects')}>
          PROJECTS
        </div>
        <div className="nav-section" onClick={() => scrollToSection('contact')}>
          CONTACT
        </div>
      </div>

      {/* Menu de Navegação Mobile */}
      <div className={`nav-sections-mobile ${menuOpen ? 'show' : ''}`}>
        <div className="nav-section" onClick={() => scrollToSection('hero')}>
          HOME
        </div>
        <div className="nav-section" onClick={() => scrollToSection('projects')}>
          PROJECTS
        </div>
        <div className="nav-section" onClick={() => scrollToSection('contact')}>
          CONTACT
        </div>
      </div>
    </div>
  );
};

export default NavContainer;
