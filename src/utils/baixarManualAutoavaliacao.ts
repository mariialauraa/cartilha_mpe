import type { jsPDF as JsPDF } from "jspdf";
import type { ClasseClassificacao } from "./classificacao";

type ResultadoManual = {
  nome: string;
  pontos: number;
  classificacao: {
    texto: string;
    classe: ClasseClassificacao;
    descricao: string;
  };
  descricao: string;
  dicas: string[];
};

type CartaoManual = {
  resultado: ResultadoManual;
  descricaoLinhas: string[];
  dicasLinhas: string[][];
  altura: number;
};

const LARGURA_PAGINA = 210;
const ALTURA_PAGINA = 297;
const MARGEM = 17;

const LARGURA_CONTEUDO = LARGURA_PAGINA - MARGEM * 2;
const LIMITE_INFERIOR = ALTURA_PAGINA - 18;

const FONTE_TEXTO = 9.5;
const FATOR_LINHA = 1.3;

const ESPACAMENTO_LINHA = (tamanhoFonte: number) =>
  (tamanhoFonte * FATOR_LINHA * 25.4) / 72;

const coresClassificacao: Record<
  ClasseClassificacao,
  {
    fundo: [number, number, number];
    texto: [number, number, number];
  }
> = {
  atencao: {
    fundo: [237, 241, 245],
    texto: [82, 97, 116],
  },
  melhoria: {
    fundo: [255, 243, 221],
    texto: [139, 96, 28],
  },
  frequente: {
    fundo: [226, 244, 242],
    texto: [17, 123, 118],
  },
};

function prepararCartao(
  documento: JsPDF,
  resultado: ResultadoManual,
): CartaoManual {
  documento.setFont("helvetica", "normal");
  documento.setFontSize(FONTE_TEXTO);

  const larguraDescricao = LARGURA_CONTEUDO - 24;
  const larguraDicas = LARGURA_CONTEUDO - 30;

  const descricaoLinhas: string[] = documento.splitTextToSize(
    resultado.descricao,
    larguraDescricao,
  );

  const dicasLinhas: string[][] = resultado.dicas.map((dica) =>
    documento.splitTextToSize(dica, larguraDicas),
  );

  const alturaDescricao =
    descricaoLinhas.length * ESPACAMENTO_LINHA(FONTE_TEXTO);

  const alturaDicas = dicasLinhas.reduce(
    (total, linhas) =>
      total + linhas.length * ESPACAMENTO_LINHA(FONTE_TEXTO) + 2.5,
    0,
  );

  // Espaços fixos até o início das dicas + conteúdo variável.
  const altura = 44 + alturaDescricao + alturaDicas;

  return {
    resultado,
    descricaoLinhas,
    dicasLinhas,
    altura,
  };
}

function adicionarCabecalho(documento: JsPDF, primeiraPagina: boolean) {
  documento.setFillColor(21, 158, 152);

  if (primeiraPagina) {
    // Linha decorativa lateral
    documento.roundedRect(MARGEM, 16, 1.5, 17, 0.75, 0.75, "F");

    documento.setTextColor(21, 59, 91);
    documento.setFont("helvetica", "bold");
    documento.setFontSize(18);

    documento.text("Resultado da Autoavaliação Digital", MARGEM + 5, 22);

    documento.setFont("helvetica", "normal");
    documento.setFontSize(10);
    documento.setTextColor(82, 97, 116);

    documento.text("Manual de orientações para sua empresa", MARGEM + 5, 30);

    documento.setFontSize(8.5);

    documento.text(
      `Data da avaliação: ${new Date().toLocaleDateString("pt-BR")}`,
      MARGEM + 5,
      37,
    );

    documento.setDrawColor(221, 230, 237);

    documento.line(MARGEM, 43, LARGURA_PAGINA - MARGEM, 43);
  } else {
    documento.setTextColor(21, 59, 91);
    documento.setFont("helvetica", "bold");
    documento.setFontSize(10);

    documento.text("Autoavaliação Digital - Manual de orientações", MARGEM, 15);

    documento.setDrawColor(221, 230, 237);

    documento.line(MARGEM, 19, LARGURA_PAGINA - MARGEM, 19);
  }
}

function desenharCartao(
  documento: JsPDF,
  cartao: CartaoManual,
  y: number,
): void {
  const { resultado } = cartao;

  const x = MARGEM;
  const conteudoX = x + 10;

  const cores = coresClassificacao[resultado.classificacao.classe];

  // Fundo e borda
  documento.setFillColor(255, 255, 255);
  documento.setDrawColor(221, 230, 237);
  documento.setLineWidth(0.35);

  documento.roundedRect(x, y, LARGURA_CONTEUDO, cartao.altura, 3, 3, "FD");

  // Barra lateral turquesa
  documento.setFillColor(21, 158, 152);

  documento.roundedRect(x + 3, y + 6, 1.2, cartao.altura - 12, 0.5, 0.5, "F");

  // Nome da ferramenta
  documento.setTextColor(21, 59, 91);
  documento.setFont("helvetica", "bold");
  documento.setFontSize(12);

  documento.text(resultado.nome, conteudoX, y + 10);

  // Pontuação destacada
  const pontuacao = `${resultado.pontos}/9`;

  documento.setFont("helvetica", "bold");
  documento.setFontSize(11);

  const larguraPontos = documento.getTextWidth(pontuacao) + 10;

  const pontosX = x + LARGURA_CONTEUDO - larguraPontos - 7;

  documento.setFillColor(226, 244, 242);

  documento.roundedRect(pontosX, y + 4, larguraPontos, 9, 3, 3, "F");

  documento.setTextColor(21, 59, 91);

  documento.text(pontuacao, pontosX + larguraPontos / 2, y + 10, {
    align: "center",
  });

  // Classificação
  documento.setFont("helvetica", "bold");
  documento.setFontSize(8.5);

  const larguraEtiqueta =
    documento.getTextWidth(resultado.classificacao.texto) + 8;

  documento.setFillColor(...cores.fundo);

  documento.roundedRect(conteudoX, y + 15, larguraEtiqueta, 7, 2, 2, "F");

  documento.setTextColor(...cores.texto);

  documento.text(resultado.classificacao.texto, conteudoX + 4, y + 19.6);

  // Descrição personalizada
  documento.setTextColor(82, 97, 116);
  documento.setFont("helvetica", "normal");
  documento.setFontSize(FONTE_TEXTO);

  let cursorY = y + 28;

  documento.text(cartao.descricaoLinhas, conteudoX, cursorY, {
    lineHeightFactor: FATOR_LINHA,
  });

  cursorY +=
    cartao.descricaoLinhas.length * ESPACAMENTO_LINHA(FONTE_TEXTO) + 4;

  // Título das orientações
  documento.setTextColor(21, 59, 91);
  documento.setFont("helvetica", "bold");
  documento.setFontSize(9.5);

  const tituloDicas =
    resultado.classificacao.classe === "frequente"
      ? "Para manter bons resultados"
      : "Dicas para avançar";

  documento.text(tituloDicas, conteudoX, cursorY);

  cursorY += 8;

  // Recomendações práticas
  documento.setFont("helvetica", "normal");
  documento.setFontSize(FONTE_TEXTO);
  documento.setTextColor(52, 73, 94);

  for (const linhas of cartao.dicasLinhas) {
    // Marcador turquesa
    documento.setFillColor(21, 158, 152);

    documento.circle(conteudoX + 1, cursorY - 1.1, 0.8, "F");

    documento.text(linhas, conteudoX + 6, cursorY, {
      lineHeightFactor: FATOR_LINHA,
    });

    cursorY += linhas.length * ESPACAMENTO_LINHA(FONTE_TEXTO) + 2.5;
  }
}

export async function baixarManualAutoavaliacao(
  resultados: ResultadoManual[],
): Promise<void> {
  const { jsPDF } = await import("jspdf");

  const documento = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  documento.setProperties({
    title: "Resultado da Autoavaliação Digital",
    subject: "Manual de orientações personalizadas",
    creator: "Cartilha Digital",
  });

  const cartoes = resultados.map((resultado) =>
    prepararCartao(documento, resultado),
  );

  adicionarCabecalho(documento, true);

  let cursorY = 49;

  for (const cartao of cartoes) {
    // Verifica se o card cabe em uma página.
    if (cartao.altura > LIMITE_INFERIOR - 26) {
      throw new Error(
        "O conteúdo de uma ferramenta excede o espaço da página.",
      );
    }

    // Cria nova página somente quando necessário.
    if (cursorY + cartao.altura > LIMITE_INFERIOR) {
      documento.addPage();
      adicionarCabecalho(documento, false);

      cursorY = 26;
    }

    desenharCartao(documento, cartao, cursorY);

    cursorY += cartao.altura + 5;
  }

  // Numeração das páginas
  const totalPaginas = documento.getNumberOfPages();

  for (let pagina = 1; pagina <= totalPaginas; pagina++) {
    documento.setPage(pagina);

    documento.setFont("helvetica", "normal");
    documento.setFontSize(8);
    documento.setTextColor(120, 132, 145);

    documento.text(
      `Página ${pagina} de ${totalPaginas}`,
      LARGURA_PAGINA - MARGEM,
      ALTURA_PAGINA - 9,
      { align: "right" },
    );
  }

  // Nome do arquivo
  const data = new Date();

  const dataArquivo = [
    data.getFullYear(),
    String(data.getMonth() + 1).padStart(2, "0"),
    String(data.getDate()).padStart(2, "0"),
  ].join("-");

  documento.save(`autoavaliacao-${dataArquivo}.pdf`);
}
