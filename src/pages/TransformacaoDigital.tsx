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
                A transformação digital é o uso de tecnologias digitais para
                melhorar o funcionamento de uma empresa, desde a organização das
                atividades até o atendimento aos clientes. Mas não se trata
                apenas de utilizar novas ferramentas. É também mudar a maneira
                de trabalhar para tornar as tarefas mais simples, rápidas e
                eficientes.
              </p>

              <div className="exemplo-pratico">
                <div className="exemplo-titulo">
                  <Lightbulb className="exemplo-icone" size={22} />
                  <h3>Na prática</h3>
                </div>

                <p>
                  Imagine uma pequena loja que costumava anotar as vendas e
                  controlar o estoque em um caderno. Com a transformação
                  digital, ela passa a organizar essas informações em um sistema
                  e muda sua rotina: acompanha os produtos disponíveis, planeja
                  melhor as compras e evita a falta de mercadorias. Assim, a
                  tecnologia não apenas substitui o caderno, mas ajuda a
                  melhorar a gestão do negócio.
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
                Veja como a transformação digital pode facilitar o dia a dia das
                micro e pequenas empresas, melhorar o atendimento aos clientes e
                abrir novas oportunidades de negócio.
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
                        Organizar e automatizar tarefas do dia a dia pode ajudar
                        a empresa a economizar tempo, reduzir erros e aproveitar
                        melhor seus recursos.
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
                        Uma pequena confeitaria utiliza um sistema para
                        organizar os pedidos, planejar melhor a produção e
                        evitar pedidos esquecidos.
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
                        Os canais digitais ajudam a empresa a responder dúvidas
                        com mais rapidez e manter um contato mais próximo com os
                        clientes.
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
                        agendar horários, confirmar atendimentos e responder
                        dúvidas dos clientes.
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
                        As ferramentas digitais ajudam a organizar as
                        informações da empresa, acompanhar os resultados e tomar
                        decisões com mais clareza.
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
                        Uma pequena papelaria utiliza um sistema para registrar
                        suas vendas e despesas. Assim, consegue identificar
                        quais produtos vendem mais e planejar melhor suas
                        compras.
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
                        A presença digital e as vendas online ajudam a empresa a
                        alcançar novos clientes e ampliar suas oportunidades de
                        negócio.
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
                        Uma loja de roupas que antes vendia apenas
                        presencialmente começa a divulgar suas peças nas redes
                        sociais e receber pedidos pela internet, alcançando
                        clientes de outras regiões.
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
                Conheça alguns dos principais desafios da transformação digital
                nas micro e pequenas empresas e descubra algumas dicas para
                superar essas dificuldades.
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
                        Muitas micro e pequenas empresas têm um orçamento
                        limitado, o que dificulta a compra de equipamentos, a
                        contratação de ferramentas digitais e a capacitação dos
                        funcionários.
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
                        Comece identificando o que mais precisa melhorar na sua
                        empresa, como o controle das vendas ou o atendimento aos
                        clientes. Pesquise ferramentas gratuitas ou de baixo
                        custo e escolha uma solução que caiba no seu orçamento.
                        Faça as mudanças aos poucos, sem comprometer as finanças
                        do negócio.
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
                        Nem sempre o empreendedor ou sua equipe sabem quais
                        ferramentas digitais escolher ou como usar essas
                        tecnologias no dia a dia. Essa falta de conhecimento
                        pode dificultar a adoção de soluções que ajudariam a
                        melhorar as atividades da empresa.
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
                        Procure cursos gratuitos, tutoriais e orientações sobre
                        ferramentas digitais que possam ajudar seu negócio.
                        Comece com ferramentas simples e busque entender como
                        elas funcionam. Capacite sua equipe para que todos
                        saibam utilizar essas tecnologias e possam aproveitar
                        melhor seus benefícios no dia a dia.
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
                        Muitas empresas começam a utilizar ferramentas digitais
                        sem definir o que desejam melhorar. A falta de
                        planejamento pode gerar gastos desnecessários e
                        dificultar o alcance dos resultados esperados.
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
                        Antes de escolher uma ferramenta digital, identifique o
                        que precisa melhorar no seu negócio, como o controle das
                        vendas ou o atendimento aos clientes. Defina suas
                        prioridades, organize as mudanças em pequenas etapas e
                        acompanhe os resultados para saber se estão funcionando.
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
                        Dificuldade para mudar hábitos de trabalho e adaptar os
                        processos da empresa ao uso de novas tecnologias.
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
                        Explique para sua equipe por que as mudanças são
                        necessárias e como elas podem facilitar o trabalho. Ouça
                        as dificuldades dos funcionários, ofereça treinamento e
                        faça as mudanças aos poucos, dando tempo para que todos
                        se adaptem à nova rotina.
                      </span>

                      <span className="desafio-acao">Voltar ao desafio ↻</span>
                    </span>
                  </span>
                </button>
              </div>
              {/* Fechamento dos desafios */}
              <div className="desafios-fechamento">
                <div className="desafios-fechamento-titulo">
                  <Lightbulb size={22} />
                  <h3>Lembre-se</h3>
                </div>

                <p>
                  A transformação digital vai além do uso de novas tecnologias.
                  Para que as mudanças tragam bons resultados, também é
                  importante planejar, preparar a equipe e estar aberto a novas
                  formas de trabalhar.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>
    </main>
  );
}

export default TransformacaoDigital;
