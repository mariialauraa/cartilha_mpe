import { Lightbulb } from "lucide-react";
import "../styles/TransformacaoDigital.css";

function TransformacaoDigital() {
  return (
    <main>
      <section className="transformacao-hero">
        <div className="container">
          <h1>Entenda a Transformação Digital</h1>

          <p>
            Conheça o conceito de transformação digital, seus benefícios e os
            principais desafios para micro e pequenas empresas.
          </p>
        </div>
      </section>

      <section className="transformacao-conceito">
        <div className="container">
          <h2>O que é Transformação Digital?</h2>

          <p>
            A transformação digital é o processo de integrar tecnologias
            digitais às atividades de uma empresa, buscando melhorar sua
            organização, seus processos e o relacionamento com os clientes.
          </p>

          <div className="exemplo-pratico">
            <div className="exemplo-titulo">
              <Lightbulb className="exemplo-icone" size={22} />
              <h3>Na prática</h3>
            </div>

            <p>
              Uma pequena loja pode utilizar ferramentas digitais para controlar
              seu estoque, atender clientes pelo WhatsApp e divulgar produtos
              nas redes sociais.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TransformacaoDigital;
