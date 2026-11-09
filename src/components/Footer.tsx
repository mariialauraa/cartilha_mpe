import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h3>Guia Digital MPE</h3>
          <p>
            Cartilha sobre Transformação Digital para Micro e Pequenas Empresas.
          </p>
        </div>

        <div className="footer-project">
          <p>Projeto acadêmico — TCC II</p>
          <p>Instituto Federal de Goiás — Câmpus Luziânia</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Maria Laura Roriz. Desenvolvido como parte do Trabalho de
          Conclusão de Curso de Bacharelado em Sistemas de Informação (BSI).
        </p>
      </div>
    </footer>
  );
}

export default Footer;
