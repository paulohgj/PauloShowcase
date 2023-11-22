import { useState } from "react";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="logo">
          <h1 className="h1">Paulo</h1>
        </div>
        <div className="nav-list">
          <ul>
            <li className="nav-item">
              <a href="/#main" className="nav-link">
                Início
              </a>
            </li>
            <li className="nav-item">
              <a href="/#about" className="nav-link">
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a href="/#skills" className="nav-link">
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a href="/#projects" className="nav-link">
                Projetos
              </a>
            </li>
          </ul>
        </div>

        <div className="mobile-menu-icon">
          <button onClick={toggleMenu}>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li className="nav-item">
            <a href="/#main" className="nav-link">
              Início
            </a>
          </li>
          <li className="nav-item">
            <a href="/#about" className="nav-link">
              Sobre
            </a>
          </li>
          <li className="nav-item">
            <a href="/#skills" className="nav-link">
              Habilidades
            </a>
          </li>
          <li className="nav-item">
            <a href="/#projects" className="nav-link">
              Projetos
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
