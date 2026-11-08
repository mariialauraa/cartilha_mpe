import { useState } from "react";
import { Link } from "react-router-dom";
import { obterClassificacao } from "../utils/classificacao";
import "../styles/Autoavaliacao.css";

type Etapa = "inicio" | "questionario" | "conclusao";

type Pergunta = {
  id: number;
  categoria: string;
  texto: string;
};

type Ferramenta = {
  nome: string;
  perguntas: number[];
  recomendacao: string;
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

const ferramentas: Ferramenta[] = [
  {
    nome: "Presença Digital",
    perguntas: [1, 2, 3],
    recomendacao:
      "Explore o uso das redes sociais e de outros canais digitais para divulgar seu negócio, conversar com os clientes e acompanhar os resultados.",
  },
  {
    nome: "Comércio Eletrônico",
    perguntas: [4, 5, 6],
    recomendacao:
      "Conheça as possibilidades de receber pedidos e realizar vendas pela internet. Avalie quais canais fazem sentido para o seu negócio.",
  },
  {
    nome: "Gestão Empresarial (ERP)",
    perguntas: [7, 8, 9],
    recomendacao:
      "Conheça ferramentas que podem ajudar a organizar as finanças, as atividades e as informações da sua empresa em um só lugar.",
  },
];

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

  // Calcula a pontuação individual de cada ferramenta.
  const resultados = ferramentas.map((ferramenta) => {
    const pontos = ferramenta.perguntas.reduce(
      (total, id) => total + (respostas[id] ?? 0),
      0,
    );

    return {
      ...ferramenta,
      pontos,
      percentual: (pontos / 9) * 100,
      classificacao: obterClassificacao(pontos),
    };
  });

  // Identifica as ferramentas que merecem mais atenção.
  const oportunidades = resultados
    .filter((resultado) => resultado.pontos <= 6)
    .sort((a, b) => a.pontos - b.pontos);

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
            <div className="autoavaliacao-card autoavaliacao-resultado">
              <div className="autoavaliacao-resultado-cabecalho">
                <span className="autoavaliacao-etiqueta">
                  Avaliação concluída
                </span>

                <h2>Confira seus resultados</h2>

                <p>
                  Veja como sua empresa utiliza cada ferramenta digital e
                  descubra quais delas podem ser melhor aproveitadas.
                </p>
              </div>

              <div className="autoavaliacao-resultados-lista">
                {resultados.map((resultado) => (
                  <div
                    key={resultado.nome}
                    className="autoavaliacao-resultado-item"
                  >
                    <div className="autoavaliacao-resultado-topo">
                      <h3>{resultado.nome}</h3>
                      <strong>{resultado.pontos}/9</strong>
                    </div>

                    <div
                      className="autoavaliacao-resultado-barra"
                      role="progressbar"
                      aria-label={`Pontuação de ${resultado.nome}`}
                      aria-valuemin={0}
                      aria-valuemax={9}
                      aria-valuenow={resultado.pontos}
                    >
                      <div
                        className={`autoavaliacao-resultado-preenchimento ${resultado.classificacao.classe}`}
                        style={{
                          width: `${resultado.percentual}%`,
                        }}
                      />
                    </div>

                    <span
                      className={`autoavaliacao-status ${resultado.classificacao.classe}`}
                    >
                      {resultado.classificacao.texto}
                    </span>

                    <p>{resultado.classificacao.descricao}</p>
                  </div>
                ))}
              </div>

              <div className="autoavaliacao-recomendacoes">
                <h3>Oportunidades de melhoria</h3>

                {oportunidades.length > 0 ? (
                  <>
                    <p>
                      Com base nas suas respostas, estas são as ferramentas que
                      podem receber mais atenção:
                    </p>

                    <div className="autoavaliacao-recomendacoes-lista">
                      {oportunidades.map((resultado) => (
                        <div
                          key={resultado.nome}
                          className="autoavaliacao-recomendacao-item"
                        >
                          <h4>{resultado.nome}</h4>
                          <p>{resultado.recomendacao}</p>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <p>
                    Sua empresa já utiliza as três ferramentas digitais com
                    frequência. Continue acompanhando suas necessidades e
                    buscando oportunidades de melhoria.
                  </p>
                )}
              </div>

              <p className="autoavaliacao-aviso">
                Este resultado é apenas orientativo. A escolha das ferramentas
                digitais deve considerar as necessidades e a realidade de cada
                empresa.
              </p>

              <div className="autoavaliacao-resultado-acoes">
                <Link
                  to="/ferramentas-digitais"
                  className="autoavaliacao-botao-primario"
                >
                  Conhecer as ferramentas
                </Link>

                <button
                  type="button"
                  className="autoavaliacao-botao-secundario"
                  onClick={iniciarAvaliacao}
                >
                  Refazer avaliação
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
