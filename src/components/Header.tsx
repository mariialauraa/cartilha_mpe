import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <a href="/" className="logo">
          <span className="logo-icon">✦</span>
          <span>Guia Digital MPE</span>
        </a>

        <nav className="nav" aria-label="Menu principal">
          <a href="/">Início</a>
          <a href="/#conteudos">Conteúdos</a>
          <a href="/#sobre">Sobre</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
