import { Link } from "react-router";
import "../styles/Home.css";

function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-tag">Cartilha Digital Interativa</span>

            <h1>Transformação digital ao alcance do seu negócio.</h1>

            <p>
              Descubra como utilizar tecnologias digitais para melhorar a
              gestão, ampliar oportunidades e fortalecer sua micro ou pequena
              empresa.
            </p>

            <div className="hero-actions">
              <a href="#conteudos" className="btn-primary">
                Explorar a cartilha →
              </a>
              <Link to="/autoavaliacao" className="btn-secondary">
                Fazer autoavaliação
              </Link>
            </div>
          </div>

          <div className="hero-illustration">
            <span className="illustration-icon">✦</span>
            <h2>Seu negócio mais digital</h2>
            <p>Aprenda • Avalie • Evolua</p>

            <div className="illustration-bars">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="topics" id="conteudos">
        <div className="container">
          <span className="section-tag">Explore nossa cartilha</span>

          <h2>Por onde começar?</h2>

          <p className="section-description">
            Conteúdos e orientações para apoiar sua jornada digital.
          </p>

          <div className="topics-grid">
            <Link to="/transformacao-digital" className="topic-card">
              <span className="topic-icon">◈</span>

              <h3>Transformação Digital</h3>

              <p>
                Entenda o conceito, os benefícios e os principais desafios para
                pequenos negócios.
              </p>

              <span className="topic-link">Saiba mais →</span>
            </Link>

            <Link to="/ferramentas-digitais" className="topic-card">
              <span className="topic-icon">▦</span>

              <h3>Ferramentas Digitais</h3>

              <p>
                Conheça soluções para presença digital, comércio eletrônico e
                gestão empresarial.
              </p>

              <span className="topic-link">Explorar ferramentas →</span>
            </Link>

            <Link to="/autoavaliacao" className="topic-card">
              <span className="topic-icon">✓</span>

              <h3>Autoavaliação Digital</h3>

              <p>
                Reflita sobre o uso de tecnologias na sua empresa e identifique
                oportunidades.
              </p>

              <span className="topic-link">Começar avaliação →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
