import {
  Lightbulb,
  ChartNoAxesColumnIncreasing,
  Users,
  ChartPie,
  Globe,
  Wallet,
  BookOpen,
  ClipboardList,
} from "lucide-react";

import { useState } from "react";
import "../styles/TransformacaoDigital.css";

function TransformacaoDigital() {
  const [beneficioVirado, setBeneficioVirado] = useState<string | null>(null);

  const virarBeneficio = (beneficio: string) => {
    setBeneficioVirado((atual) => (atual === beneficio ? null : beneficio));
  };

  const [cartaoVirado, setCartaoVirado] = useState<string | null>(null);

  const virarCartao = (cartao: string) => {
    setCartaoVirado((atual) => (atual === cartao ? null : cartao));
  };

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
          <details
            className="secao-expansivel"
            name="transformacao-digital"
            open
          >
            <summary>
              <h2>O que é Transformação Digital?</h2>
            </summary>

            <div className="secao-conteudo">
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
                  Uma pequena loja pode utilizar ferramentas digitais para
                  controlar seu estoque, atender clientes pelo WhatsApp e
                  divulgar produtos nas redes sociais.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* Benefícios */}
      <section className="transformacao-beneficios">
        <div className="container">
          <details className="secao-expansivel" name="transformacao-digital">
            <summary>
              <h2>Benefícios da Transformação Digital</h2>
            </summary>

            <div className="secao-conteudo">
              <p className="beneficios-descricao">
                Conheça algumas vantagens que a adoção de tecnologias digitais
                pode oferecer aos pequenos negócios.
              </p>

              <div className="beneficios-grid">
                {/* Maior produtividade */}
                <button
                  type="button"
                  className={`beneficio-card desafio-card desafio-flip ${
                    beneficioVirado === "produtividade" ? "virado" : ""
                  }`}
                  onClick={() => virarBeneficio("produtividade")}
                  aria-pressed={beneficioVirado === "produtividade"}
                  aria-label={
                    beneficioVirado === "produtividade"
                      ? "Voltar ao benefício: Maior produtividade"
                      : "Ver exemplo de maior produtividade"
                  }
                >
                  <span className="desafio-flip-inner">
                    <span
                      className="desafio-face desafio-frente"
                      aria-hidden={beneficioVirado === "produtividade"}
                    >
                      <ChartNoAxesColumnIncreasing size={28} />

                      <span className="desafio-titulo">
                        Maior produtividade
                      </span>

                      <span className="desafio-texto">
                        Automatizar tarefas repetitivas pode economizar tempo e
                        facilitar as atividades do dia a dia.
                      </span>

                      <span className="desafio-acao">
                        Virar para ver o exemplo ↻
                      </span>
                    </span>

                    <span
                      className="desafio-face desafio-verso"
                      aria-hidden={beneficioVirado !== "produtividade"}
                    >
                      <Lightbulb size={24} />

                      <span className="desafio-titulo">Exemplo na prática</span>

                      <span className="desafio-texto">
                        Uma pequena loja utiliza um sistema para atualizar
                        automaticamente o estoque após cada venda, reduzindo o
                        trabalho manual.
                      </span>

                      <span className="desafio-acao">
                        Voltar ao benefício ↻
                      </span>
                    </span>
                  </span>
                </button>

                {/* Melhor relacionamento com clientes */}
                <button
                  type="button"
                  className={`beneficio-card desafio-card desafio-flip ${
                    beneficioVirado === "clientes" ? "virado" : ""
                  }`}
                  onClick={() => virarBeneficio("clientes")}
                  aria-pressed={beneficioVirado === "clientes"}
                  aria-label={
                    beneficioVirado === "clientes"
                      ? "Voltar ao benefício: Melhor relacionamento com clientes"
                      : "Ver exemplo de relacionamento com clientes"
                  }
                >
                  <span className="desafio-flip-inner">
                    <span
                      className="desafio-face desafio-frente"
                      aria-hidden={beneficioVirado === "clientes"}
                    >
                      <Users size={28} />

                      <span className="desafio-titulo">
                        Melhor relacionamento com clientes
                      </span>

                      <span className="desafio-texto">
                        Os canais digitais facilitam a comunicação e ajudam a
                        oferecer um atendimento mais ágil.
                      </span>

                      <span className="desafio-acao">
                        Virar para ver o exemplo ↻
                      </span>
                    </span>

                    <span
                      className="desafio-face desafio-verso"
                      aria-hidden={beneficioVirado !== "clientes"}
                    >
                      <Lightbulb size={24} />

                      <span className="desafio-titulo">Exemplo na prática</span>

                      <span className="desafio-texto">
                        Um salão de beleza utiliza o WhatsApp Business para
                        organizar agendamentos, responder dúvidas e manter
                        contato com seus clientes.
                      </span>

                      <span className="desafio-acao">
                        Voltar ao benefício ↻
                      </span>
                    </span>
                  </span>
                </button>

                {/* Melhoria da gestão */}
                <button
                  type="button"
                  className={`beneficio-card desafio-card desafio-flip ${
                    beneficioVirado === "gestao" ? "virado" : ""
                  }`}
                  onClick={() => virarBeneficio("gestao")}
                  aria-pressed={beneficioVirado === "gestao"}
                  aria-label={
                    beneficioVirado === "gestao"
                      ? "Voltar ao benefício: Melhoria da gestão"
                      : "Ver exemplo de melhoria da gestão"
                  }
                >
                  <span className="desafio-flip-inner">
                    <span
                      className="desafio-face desafio-frente"
                      aria-hidden={beneficioVirado === "gestao"}
                    >
                      <ChartPie size={28} />

                      <span className="desafio-titulo">Melhoria da gestão</span>

                      <span className="desafio-texto">
                        Ferramentas digitais ajudam a organizar informações,
                        acompanhar resultados e apoiar decisões.
                      </span>

                      <span className="desafio-acao">
                        Virar para ver o exemplo ↻
                      </span>
                    </span>

                    <span
                      className="desafio-face desafio-verso"
                      aria-hidden={beneficioVirado !== "gestao"}
                    >
                      <Lightbulb size={24} />

                      <span className="desafio-titulo">Exemplo na prática</span>

                      <span className="desafio-texto">
                        Uma pequena empresa utiliza um sistema para registrar
                        vendas e despesas, facilitando o acompanhamento das
                        finanças.
                      </span>

                      <span className="desafio-acao">
                        Voltar ao benefício ↻
                      </span>
                    </span>
                  </span>
                </button>

                {/* Novas oportunidades de mercado */}
                <button
                  type="button"
                  className={`beneficio-card desafio-card desafio-flip ${
                    beneficioVirado === "mercado" ? "virado" : ""
                  }`}
                  onClick={() => virarBeneficio("mercado")}
                  aria-pressed={beneficioVirado === "mercado"}
                  aria-label={
                    beneficioVirado === "mercado"
                      ? "Voltar ao benefício: Novas oportunidades de mercado"
                      : "Ver exemplo de novas oportunidades de mercado"
                  }
                >
                  <span className="desafio-flip-inner">
                    <span
                      className="desafio-face desafio-frente"
                      aria-hidden={beneficioVirado === "mercado"}
                    >
                      <Globe size={28} />

                      <span className="desafio-titulo">
                        Novas oportunidades de mercado
                      </span>

                      <span className="desafio-texto">
                        A presença digital e as vendas online permitem alcançar
                        novos clientes e ampliar as oportunidades de negócio.
                      </span>

                      <span className="desafio-acao">
                        Virar para ver o exemplo ↻
                      </span>
                    </span>

                    <span
                      className="desafio-face desafio-verso"
                      aria-hidden={beneficioVirado !== "mercado"}
                    >
                      <Lightbulb size={24} />

                      <span className="desafio-titulo">Exemplo na prática</span>

                      <span className="desafio-texto">
                        Uma loja física começa a divulgar seus produtos nas
                        redes sociais e realizar vendas pela internet,
                        alcançando clientes de outras regiões.
                      </span>

                      <span className="desafio-acao">
                        Voltar ao benefício ↻
                      </span>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* Desafios e Barreiras */}
      <section className="transformacao-desafios">
        <div className="container">
          <details className="secao-expansivel" name="transformacao-digital">
            <summary>
              <h2>Desafios da Transformação Digital</h2>
            </summary>

            <div className="secao-conteudo">
              <p className="desafios-descricao">
                Conheça algumas dificuldades que podem surgir durante a adoção
                de tecnologias digitais.
              </p>

              <div className="desafios-grid">
                {/* Recursos financeiros limitados */}
                <button
                  type="button"
                  className={`desafio-card desafio-flip ${
                    cartaoVirado === "financeiro" ? "virado" : ""
                  }`}
                  onClick={() => virarCartao("financeiro")}
                  aria-pressed={cartaoVirado === "financeiro"}
                  aria-label={
                    cartaoVirado === "financeiro"
                      ? "Voltar ao desafio: Recursos financeiros limitados"
                      : "Ver dica para Recursos financeiros limitados"
                  }
                >
                  <span className="desafio-flip-inner">
                    <span
                      className="desafio-face desafio-frente"
                      aria-hidden={cartaoVirado === "financeiro"}
                    >
                      <Wallet size={28} />

                      <span className="desafio-titulo">
                        Recursos financeiros limitados
                      </span>

                      <span className="desafio-texto">
                        Dificuldade para investir em tecnologias, equipamentos e
                        capacitação.
                      </span>

                      <span className="desafio-acao">
                        Virar para ver a dica ↻
                      </span>
                    </span>

                    <span
                      className="desafio-face desafio-verso"
                      aria-hidden={cartaoVirado !== "financeiro"}
                    >
                      <Lightbulb size={24} />

                      <span className="desafio-titulo">Como enfrentar?</span>

                      <span className="desafio-texto">
                        Identifique as necessidades mais importantes do negócio.
                        Procure ferramentas gratuitas ou de baixo custo e
                        invista gradualmente, conforme suas possibilidades.
                      </span>

                      <span className="desafio-acao">Voltar ao desafio ↻</span>
                    </span>
                  </span>
                </button>

                {/* Falta de conhecimento */}
                <button
                  type="button"
                  className={`desafio-card desafio-flip ${
                    cartaoVirado === "conhecimento" ? "virado" : ""
                  }`}
                  onClick={() => virarCartao("conhecimento")}
                  aria-pressed={cartaoVirado === "conhecimento"}
                  aria-label={
                    cartaoVirado === "conhecimento"
                      ? "Voltar ao desafio: Falta de conhecimento"
                      : "Ver dica para Falta de conhecimento"
                  }
                >
                  <span className="desafio-flip-inner">
                    <span
                      className="desafio-face desafio-frente"
                      aria-hidden={cartaoVirado === "conhecimento"}
                    >
                      <BookOpen size={28} />

                      <span className="desafio-titulo">
                        Falta de conhecimento
                      </span>

                      <span className="desafio-texto">
                        Dúvidas sobre quais ferramentas escolher e como
                        utilizá-las.
                      </span>

                      <span className="desafio-acao">
                        Virar para ver a dica ↻
                      </span>
                    </span>

                    <span
                      className="desafio-face desafio-verso"
                      aria-hidden={cartaoVirado !== "conhecimento"}
                    >
                      <Lightbulb size={24} />

                      <span className="desafio-titulo">Como enfrentar?</span>

                      <span className="desafio-texto">
                        Busque cursos gratuitos, tutoriais e orientações sobre
                        ferramentas digitais. Comece aprendendo a utilizar
                        soluções simples que atendam às necessidades do seu
                        negócio.
                      </span>

                      <span className="desafio-acao">Voltar ao desafio ↻</span>
                    </span>
                  </span>
                </button>

                {/* Ausência de planejamento */}
                <button
                  type="button"
                  className={`desafio-card desafio-flip ${
                    cartaoVirado === "planejamento" ? "virado" : ""
                  }`}
                  onClick={() => virarCartao("planejamento")}
                  aria-pressed={cartaoVirado === "planejamento"}
                  aria-label={
                    cartaoVirado === "planejamento"
                      ? "Voltar ao desafio: Ausência de planejamento"
                      : "Ver dica para Ausência de planejamento"
                  }
                >
                  <span className="desafio-flip-inner">
                    <span
                      className="desafio-face desafio-frente"
                      aria-hidden={cartaoVirado === "planejamento"}
                    >
                      <ClipboardList size={28} />

                      <span className="desafio-titulo">
                        Ausência de planejamento
                      </span>

                      <span className="desafio-texto">
                        Adoção de tecnologias sem objetivos ou estratégias bem
                        definidos.
                      </span>

                      <span className="desafio-acao">
                        Virar para ver a dica ↻
                      </span>
                    </span>

                    <span
                      className="desafio-face desafio-verso"
                      aria-hidden={cartaoVirado !== "planejamento"}
                    >
                      <Lightbulb size={24} />

                      <span className="desafio-titulo">Como enfrentar?</span>

                      <span className="desafio-texto">
                        Defina o que deseja melhorar na empresa, estabeleça
                        prioridades e organize pequenas etapas. Acompanhe os
                        resultados antes de investir em novas tecnologias.
                      </span>

                      <span className="desafio-acao">Voltar ao desafio ↻</span>
                    </span>
                  </span>
                </button>

                {/* Resistência às mudanças */}
                <button
                  type="button"
                  className={`desafio-card desafio-flip ${
                    cartaoVirado === "resistencia" ? "virado" : ""
                  }`}
                  onClick={() => virarCartao("resistencia")}
                  aria-pressed={cartaoVirado === "resistencia"}
                  aria-label={
                    cartaoVirado === "resistencia"
                      ? "Voltar ao desafio: Resistência às mudanças"
                      : "Ver dica para Resistência às mudanças"
                  }
                >
                  <span className="desafio-flip-inner">
                    <span
                      className="desafio-face desafio-frente"
                      aria-hidden={cartaoVirado === "resistencia"}
                    >
                      <Users size={28} />

                      <span className="desafio-titulo">
                        Resistência às mudanças
                      </span>

                      <span className="desafio-texto">
                        Dificuldade para adaptar processos e hábitos de
                        trabalho.
                      </span>

                      <span className="desafio-acao">
                        Virar para ver a dica ↻
                      </span>
                    </span>

                    <span
                      className="desafio-face desafio-verso"
                      aria-hidden={cartaoVirado !== "resistencia"}
                    >
                      <Lightbulb size={24} />

                      <span className="desafio-titulo">Como enfrentar?</span>

                      <span className="desafio-texto">
                        Converse com a equipe sobre os benefícios das novas
                        ferramentas, ofereça orientações e incentive a
                        participação de todos. Introduza as mudanças
                        gradualmente.
                      </span>

                      <span className="desafio-acao">Voltar ao desafio ↻</span>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </details>
        </div>
      </section>
    </main>
  );
}

export default TransformacaoDigital;
