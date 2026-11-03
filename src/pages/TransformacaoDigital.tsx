import {
  Lightbulb,
  ChartNoAxesColumnIncreasing,
  Users,
  ChartPie,
  Globe,
} from "lucide-react";

import "../styles/TransformacaoDigital.css";

function TransformacaoDigital() {
  return (
    <main>
      {/* Apresentação */}
      <section className="transformacao-hero">
        <div className="container">
          <h1>Entenda a Transformação Digital</h1>

          <p>
            Conheça o conceito de transformação digital, seus benefícios e os
            principais desafios para micro e pequenas empresas.
          </p>
        </div>
      </section>

      {/* Conceito */}
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

      {/* Benefícios */}
      <section className="transformacao-beneficios">
        <div className="container">
          <h2>Benefícios da Transformação Digital</h2>

          <p className="beneficios-descricao">
            Conheça algumas vantagens que a adoção de tecnologias digitais pode
            oferecer aos pequenos negócios.
          </p>

          <div className="beneficios-grid">
            <article className="beneficio-card">
              <ChartNoAxesColumnIncreasing size={28} />

              <h3>Maior produtividade</h3>

              <p>
                Automatizar tarefas repetitivas pode economizar tempo e
                facilitar as atividades do dia a dia.
              </p>
            </article>

            <article className="beneficio-card">
              <Users size={28} />

              <h3>Melhor relacionamento com clientes</h3>

              <p>
                Os canais digitais facilitam a comunicação e ajudam a oferecer
                um atendimento mais ágil.
              </p>
            </article>

            <article className="beneficio-card">
              <ChartPie size={28} />

              <h3>Melhoria da gestão</h3>

              <p>
                Ferramentas digitais ajudam a organizar informações, acompanhar
                resultados e apoiar decisões.
              </p>
            </article>

            <article className="beneficio-card">
              <Globe size={28} />

              <h3>Novas oportunidades de mercado</h3>

              <p>
                A presença digital e as vendas online permitem alcançar novos
                clientes e ampliar as oportunidades de negócio.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TransformacaoDigital;
