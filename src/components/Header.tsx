import { Link, NavLink } from "react-router";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <span className="logo-icon">✦</span>
          <span>Guia Digital MPE</span>
        </Link>

        <nav className="nav" aria-label="Menu principal">
          <NavLink to="/" end>
            Início
          </NavLink>

          <NavLink to="/transformacao-digital">Transformação Digital</NavLink>

          <NavLink to="/ferramentas-digitais">Ferramentas Digitais</NavLink>

          <NavLink to="/autoavaliacao">Autoavaliação</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
