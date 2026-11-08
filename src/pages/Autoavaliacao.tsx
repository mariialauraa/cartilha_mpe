import { useState } from "react";
import "../styles/Autoavaliacao.css";

type Etapa = "inicio" | "questionario" | "conclusao";

type Pergunta = {
  id: number;
  categoria: string;
  texto: string;
};

const perguntas: Pergunta[] = [
  {
    id: 1,
    categoria: "Presença Digital",
    texto:
      "Sua empresa utiliza redes sociais para divulgar seus produtos ou serviços?",
  },
  {
    id: 2,
    categoria: "Presença Digital",
    texto:
      "Sua empresa utiliza canais digitais para se comunicar com os clientes?",
  },
  {
    id: 3,
    categoria: "Presença Digital",
    texto: "Sua empresa acompanha os resultados das suas redes sociais?",
  },
  {
    id: 4,
    categoria: "Comércio Eletrônico",
    texto: "Sua empresa realiza vendas ou recebe pedidos pela internet?",
  },
  {
    id: 5,
    categoria: "Comércio Eletrônico",
    texto:
      "Sua empresa utiliza ferramentas digitais para organizar os pedidos dos clientes?",
  },
  {
    id: 6,
    categoria: "Comércio Eletrônico",
    texto: "Sua empresa acompanha as vendas realizadas pela internet?",
  },
  {
    id: 7,
    categoria: "Gestão Empresarial (ERP)",
    texto:
      "Sua empresa utiliza ferramentas digitais para controlar suas finanças?",
  },
  {
    id: 8,
    categoria: "Gestão Empresarial (ERP)",
    texto:
      "Sua empresa utiliza ferramentas digitais para organizar suas atividades?",
  },
  {
    id: 9,
    categoria: "Gestão Empresarial (ERP)",
    texto:
      "Sua empresa utiliza algum sistema que reúne informações do negócio em um só lugar?",
  },
];

const alternativas = ["Não", "Raramente", "Frequentemente", "Sempre"];

export default function Autoavaliacao() {
  const [etapa, setEtapa] = useState<Etapa>("inicio");
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState<Record<number, number>>({});

  const pergunta = perguntas[perguntaAtual];
  const respostaSelecionada = respostas[pergunta.id];

  const progresso = ((perguntaAtual + 1) / perguntas.length) * 100;

  const iniciarAvaliacao = () => {
    setPerguntaAtual(0);
    setRespostas({});
    setEtapa("questionario");
  };

  const selecionarResposta = (valor: number) => {
    setRespostas((anterior) => ({
      ...anterior,
      [pergunta.id]: valor,
    }));
  };

  const proximaPergunta = () => {
    if (respostaSelecionada === undefined) return;

    if (perguntaAtual < perguntas.length - 1) {
      setPerguntaAtual((anterior) => anterior + 1);
    } else {
      setEtapa("conclusao");
    }
  };

  const voltarPergunta = () => {
    if (perguntaAtual > 0) {
      setPerguntaAtual((anterior) => anterior - 1);
    } else {
      setEtapa("inicio");
    }
  };

  return (
    <main className="autoavaliacao-page">
      <section className="autoavaliacao-hero">
        <div className="autoavaliacao-container">
          <h1>Autoavaliação Digital</h1>
          <p>
            Este questionário não é uma avaliação de maturidade digital. Seu
            objetivo é ajudar você a identificar como sua empresa utiliza as
            ferramentas digitais apresentadas nesta cartilha e quais delas podem
            ser melhor aproveitadas.
          </p>
        </div>
      </section>

      <section className="autoavaliacao-secao">
        <div className="autoavaliacao-container">
          {etapa === "inicio" && (
            <div className="autoavaliacao-card autoavaliacao-inicio">
              <span className="autoavaliacao-etiqueta">
                Conheça sua empresa
              </span>

              <h2>Como sua empresa utiliza as ferramentas digitais?</h2>

              <p>
                Responda a 9 perguntas simples sobre o uso de ferramentas
                digitais no seu negócio.
              </p>

              <p>
                Ao final, você descobrirá quais ferramentas já utiliza e quais
                podem ser melhor aproveitadas.
              </p>

              <div className="autoavaliacao-informacoes">
                <div>
                  <strong>9 perguntas</strong>
                  <span>Rápidas e objetivas</span>
                </div>

                <div>
                  <strong>3 ferramentas</strong>
                  <span>Áreas avaliadas</span>
                </div>

                <div>
                  <strong>Gratuito</strong>
                  <span>Sem necessidade de cadastro</span>
                </div>
              </div>

              <button
                type="button"
                className="autoavaliacao-botao-primario"
                onClick={iniciarAvaliacao}
              >
                Começar avaliação
              </button>
            </div>
          )}

          {etapa === "questionario" && (
            <div className="autoavaliacao-card autoavaliacao-questionario">
              <div className="autoavaliacao-progresso-info">
                <span>{pergunta.categoria}</span>
                <span>
                  Pergunta {perguntaAtual + 1} de {perguntas.length}
                </span>
              </div>

              <div
                className="autoavaliacao-barra"
                role="progressbar"
                aria-label="Progresso da avaliação"
                aria-valuemin={0}
                aria-valuemax={perguntas.length}
                aria-valuenow={perguntaAtual + 1}
              >
                <div
                  className="autoavaliacao-barra-preenchimento"
                  style={{ width: `${progresso}%` }}
                />
              </div>

              <fieldset className="autoavaliacao-pergunta">
                <legend>{pergunta.texto}</legend>

                <div className="autoavaliacao-alternativas">
                  {alternativas.map((alternativa, indice) => (
                    <label
                      key={indice}
                      className={`autoavaliacao-alternativa ${
                        respostaSelecionada === indice ? "selecionada" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name={`pergunta-${pergunta.id}`}
                        value={indice}
                        checked={respostaSelecionada === indice}
                        onChange={() => selecionarResposta(indice)}
                      />

                      <span>{alternativa}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="autoavaliacao-navegacao">
                <button
                  type="button"
                  className="autoavaliacao-botao-secundario"
                  onClick={voltarPergunta}
                >
                  Voltar
                </button>

                <button
                  type="button"
                  className="autoavaliacao-botao-primario"
                  onClick={proximaPergunta}
                  disabled={respostaSelecionada === undefined}
                >
                  {perguntaAtual === perguntas.length - 1
                    ? "Finalizar avaliação"
                    : "Próxima"}
                </button>
              </div>
            </div>
          )}

          {etapa === "conclusao" && (
            <div className="autoavaliacao-card autoavaliacao-inicio">
              <span className="autoavaliacao-etiqueta">
                Avaliação concluída
              </span>

              <h2>Você respondeu todas as perguntas!</h2>

              <p>
                Suas respostas foram registradas nesta avaliação. Na próxima
                etapa, vamos apresentar os resultados das três ferramentas
                digitais.
              </p>

              <button
                type="button"
                className="autoavaliacao-botao-primario"
                onClick={iniciarAvaliacao}
              >
                Refazer avaliação
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
