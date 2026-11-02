import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h3>Guia Digital MPE</h3>
          <p>
            Cartilha digital sobre transformação digital para micro e pequenas
            empresas.
          </p>
        </div>

        <div className="footer-project">
          <p>Projeto acadêmico — TCC II</p>
          <p>Instituto Federal de Goiás — Câmpus Luziânia</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Desenvolvido como parte do Trabalho de Conclusão de Curso em Sistemas
          de Informação.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
