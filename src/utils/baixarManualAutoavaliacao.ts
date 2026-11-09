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
  recomendacao: string;
  dicas: string[];
};

type CartaoManual = {
  resultado: ResultadoManual;
  recomendacaoLinhas: string[];
  dicasLinhas: string[][];
  altura: number;
};

const LARGURA_PAGINA = 210;
const ALTURA_PAGINA = 297;
const MARGEM = 17;
const LARGURA_CONTEUDO = LARGURA_PAGINA - MARGEM * 2;
const LIMITE_INFERIOR = ALTURA_PAGINA - 18;
const ESPACAMENTO_LINHA = (tamanhoFonte: number) =>
  (tamanhoFonte * 1.3 * 25.4) / 72;

const coresClassificacao: Record<
  ClasseClassificacao,
  { fundo: [number, number, number]; texto: [number, number, number] }
> = {
  atencao: { fundo: [237, 241, 245], texto: [82, 97, 116] },
  melhoria: { fundo: [255, 243, 221], texto: [139, 96, 28] },
  frequente: { fundo: [226, 244, 242], texto: [17, 123, 118] },
};

function prepararCartao(documento: JsPDF, resultado: ResultadoManual): CartaoManual {
  const larguraTexto = LARGURA_CONTEUDO - 20;
  documento.setFont("helvetica", "normal");
  documento.setFontSize(10);
  const recomendacaoLinhas = documento.splitTextToSize(
    resultado.recomendacao,
    larguraTexto,
  );
  const dicasLinhas = resultado.dicas.map((dica) =>
    documento.splitTextToSize(`- ${dica}`, larguraTexto),
  );

  const altura =
    8 +
    7 +
    5 +
    8 +
    5 +
    recomendacaoLinhas.length * ESPACAMENTO_LINHA(10) +
    5 +
    6 +
    2 +
    dicasLinhas.reduce(
      (total, linhas) =>
        total + linhas.length * ESPACAMENTO_LINHA(9.5) + 2.5,
      0,
    ) +
    7;

  return { resultado, recomendacaoLinhas, dicasLinhas, altura };
}

function adicionarCabecalho(documento: JsPDF, primeiraPagina: boolean) {
  documento.setTextColor(21, 59, 91);
  documento.setFont("helvetica", "bold");
  documento.setFontSize(primeiraPagina ? 18 : 10);
  documento.text(
    primeiraPagina
      ? "Resultado da Autoavaliação Digital"
      : "Autoavaliação Digital - Resultado e orientações",
    MARGEM,
    primeiraPagina ? 22 : 15,
  );

  if (primeiraPagina) {
    documento.setFont("helvetica", "normal");
    documento.setTextColor(82, 97, 116);
    documento.setFontSize(10);
    documento.text("Resumo e orientações para sua empresa", MARGEM, 31);
    documento.setFontSize(8);
    documento.text(new Date().toLocaleDateString("pt-BR"), MARGEM, 37);
    documento.setDrawColor(221, 230, 237);
    documento.line(MARGEM, 43, LARGURA_PAGINA - MARGEM, 43);
  } else {
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
  const padding = 8;
  const conteudoX = x + padding + 3;
  const larguraTexto = LARGURA_CONTEUDO - padding * 2 - 3;
  const cores = coresClassificacao[resultado.classificacao.classe];
  let cursorY = y + padding + 5;

  documento.setFillColor(248, 250, 252);
  documento.setDrawColor(221, 230, 237);
  documento.setLineWidth(0.3);
  documento.roundedRect(x, y, LARGURA_CONTEUDO, cartao.altura, 2, 2, "FD");
  documento.setFillColor(21, 158, 152);
  documento.rect(x, y, 1.5, cartao.altura, "F");

  documento.setTextColor(21, 59, 91);
  documento.setFont("helvetica", "bold");
  documento.setFontSize(12);
  documento.text(resultado.nome, conteudoX, cursorY);
  documento.text(
    `${resultado.pontos}/9`,
    x + LARGURA_CONTEUDO - padding,
    cursorY,
    { align: "right" },
  );
  cursorY += 12;

  documento.setFontSize(8);
  const larguraEtiqueta = documento.getTextWidth(
    resultado.classificacao.texto,
  );
  documento.setFillColor(...cores.fundo);
  documento.roundedRect(
    conteudoX,
    cursorY - 5.5,
    larguraEtiqueta + 6,
    7,
    1,
    1,
    "F",
  );
  documento.setTextColor(...cores.texto);
  documento.text(resultado.classificacao.texto, conteudoX + 3, cursorY - 1);
  cursorY += 5;

  documento.setTextColor(82, 97, 116);
  documento.setFont("helvetica", "normal");
  documento.setFontSize(10);
  documento.text(cartao.recomendacaoLinhas, conteudoX, cursorY, {
    lineHeightFactor: 1.3,
  });
  cursorY +=
    cartao.recomendacaoLinhas.length * ESPACAMENTO_LINHA(10) + 4;

  documento.setTextColor(21, 59, 91);
  documento.setFont("helvetica", "bold");
  documento.setFontSize(9.5);
  documento.text(
    resultado.classificacao.classe === "frequente"
      ? "Para manter bons resultados"
      : "Dicas para avançar",
    conteudoX,
    cursorY,
  );
  cursorY += 5;

  documento.setTextColor(52, 73, 94);
  documento.setFont("helvetica", "normal");
  documento.setFontSize(9.5);
  for (const linhas of cartao.dicasLinhas) {
    documento.text(linhas, conteudoX, cursorY, {
      maxWidth: larguraTexto,
      lineHeightFactor: 1.3,
    });
    cursorY += linhas.length * ESPACAMENTO_LINHA(9.5) + 2.5;
  }
}

export async function baixarManualAutoavaliacao(
  resultados: ResultadoManual[],
): Promise<void> {
  const { jsPDF } = await import("jspdf");
  const documento = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  documento.setProperties({
    title: "Resultado da Autoavaliação Digital",
    subject: "Resumo e dicas personalizadas da autoavaliação",
    creator: "Cartilha Digital",
  });

  const cartoes = resultados.map((resultado) =>
    prepararCartao(documento, resultado),
  );
  let cursorY = 50;
  adicionarCabecalho(documento, true);

  for (const cartao of cartoes) {
    if (cartao.altura > LIMITE_INFERIOR - 24) {
      throw new Error("O conteúdo de uma ferramenta excede o espaço da página.");
    }

    if (cursorY + cartao.altura > LIMITE_INFERIOR) {
      documento.addPage();
      adicionarCabecalho(documento, false);
      cursorY = 26;
    }

    desenharCartao(documento, cartao, cursorY);
    cursorY += cartao.altura + 5;
  }

  const totalPaginas = documento.getNumberOfPages();
  for (let pagina = 1; pagina <= totalPaginas; pagina += 1) {
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

  const data = new Date();
  const dataArquivo = [
    data.getFullYear(),
    String(data.getMonth() + 1).padStart(2, "0"),
    String(data.getDate()).padStart(2, "0"),
  ].join("-");

  documento.save(`autoavaliacao-${dataArquivo}.pdf`);
}
