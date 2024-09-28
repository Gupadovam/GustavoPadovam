import "../styles/components/nav.sass";

const NavContainer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="nav-container">
      <h1 className="nav-title">
        Web <span className="nav-title-accent">Dev</span>
      </h1>
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
    </div>
  );
};

export default NavContainer;
