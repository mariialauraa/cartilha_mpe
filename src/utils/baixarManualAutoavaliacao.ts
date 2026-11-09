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

const LARGURA = 1200;
const ESCALA = 2;
const MARGEM = 64;
const LARGURA_CARTAO = LARGURA - MARGEM * 2;
const LARGURA_CONTEUDO = LARGURA_CARTAO - 88;
const ALTURA_LINHA = 32;

const coresClassificacao: Record<
  ClasseClassificacao,
  { fundo: string; texto: string }
> = {
  atencao: { fundo: "#edf1f5", texto: "#526174" },
  melhoria: { fundo: "#fff3dd", texto: "#8b601c" },
  frequente: { fundo: "#e2f4f2", texto: "#117b76" },
};

function quebrarTexto(
  contexto: CanvasRenderingContext2D,
  texto: string,
  larguraMaxima: number,
): string[] {
  const palavras = texto.split(/\s+/);
  const linhas: string[] = [];
  let linhaAtual = "";

  for (const palavra of palavras) {
    const tentativa = linhaAtual ? `${linhaAtual} ${palavra}` : palavra;

    if (linhaAtual && contexto.measureText(tentativa).width > larguraMaxima) {
      linhas.push(linhaAtual);
      linhaAtual = palavra;
    } else {
      linhaAtual = tentativa;
    }
  }

  if (linhaAtual) linhas.push(linhaAtual);
  return linhas;
}

function desenharTexto(
  contexto: CanvasRenderingContext2D,
  texto: string,
  x: number,
  y: number,
  larguraMaxima: number,
): number {
  const linhas = quebrarTexto(contexto, texto, larguraMaxima);
  linhas.forEach((linha, indice) => {
    contexto.fillText(linha, x, y + indice * ALTURA_LINHA);
  });
  return y + linhas.length * ALTURA_LINHA;
}

function alturaCartao(
  contexto: CanvasRenderingContext2D,
  resultado: ResultadoManual,
): number {
  let altura = 34 + 34 + 18 + 34 + 20;

  contexto.font = "22px Arial, sans-serif";
  altura +=
    quebrarTexto(contexto, resultado.recomendacao, LARGURA_CONTEUDO).length *
      ALTURA_LINHA +
    22;

  contexto.font = "bold 21px Arial, sans-serif";
  altura += 28 + 12;

  contexto.font = "21px Arial, sans-serif";
  for (const dica of resultado.dicas) {
    altura +=
      quebrarTexto(contexto, `• ${dica}`, LARGURA_CONTEUDO).length *
        ALTURA_LINHA +
      12;
  }

  return altura + 30;
}

function desenharCartao(
  contexto: CanvasRenderingContext2D,
  resultado: ResultadoManual,
  y: number,
): number {
  const altura = alturaCartao(contexto, resultado);
  const x = MARGEM;
  const conteudoX = x + 44;
  let cursorY = y + 34;

  contexto.fillStyle = "#f8fafc";
  contexto.fillRect(x, y, LARGURA_CARTAO, altura);
  contexto.strokeStyle = "#dde6ed";
  contexto.lineWidth = 2;
  contexto.strokeRect(x, y, LARGURA_CARTAO, altura);
  contexto.fillStyle = "#159e98";
  contexto.fillRect(x, y, 8, altura);

  contexto.fillStyle = "#153b5b";
  contexto.font = "bold 27px Arial, sans-serif";
  contexto.fillText(resultado.nome, conteudoX, cursorY);
  contexto.textAlign = "right";
  contexto.fillText(
    `${resultado.pontos}/9`,
    x + LARGURA_CARTAO - 32,
    cursorY,
  );
  contexto.textAlign = "left";
  cursorY += 52;

  const cores = coresClassificacao[resultado.classificacao.classe];
  contexto.font = "bold 18px Arial, sans-serif";
  const larguraEtiqueta = contexto.measureText(
    resultado.classificacao.texto,
  ).width;
  contexto.fillStyle = cores.fundo;
  contexto.fillRect(conteudoX, cursorY - 25, larguraEtiqueta + 28, 36);
  contexto.fillStyle = cores.texto;
  contexto.fillText(resultado.classificacao.texto, conteudoX + 14, cursorY);
  cursorY += 50;

  contexto.fillStyle = "#526174";
  contexto.font = "22px Arial, sans-serif";
  cursorY = desenharTexto(
    contexto,
    resultado.recomendacao,
    conteudoX,
    cursorY,
    LARGURA_CONTEUDO,
  );
  cursorY += 18;

  contexto.fillStyle = "#153b5b";
  contexto.font = "bold 21px Arial, sans-serif";
  contexto.fillText("Dicas para avançar", conteudoX, cursorY);
  cursorY += 40;

  contexto.fillStyle = "#34495e";
  contexto.font = "21px Arial, sans-serif";
  for (const dica of resultado.dicas) {
    cursorY = desenharTexto(
      contexto,
      `• ${dica}`,
      conteudoX,
      cursorY,
      LARGURA_CONTEUDO,
    );
    cursorY += 12;
  }

  return y + altura;
}

function obterBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("O navegador não conseguiu gerar a imagem JPG."));
        }
      },
      "image/jpeg",
      0.94,
    );
  });
}

export async function baixarManualAutoavaliacao(
  resultados: ResultadoManual[],
): Promise<void> {
  const canvas = document.createElement("canvas");
  const contexto = canvas.getContext("2d");

  if (!contexto) {
    throw new Error("Não foi possível preparar a imagem do manual.");
  }

  let altura = 240;
  for (const resultado of resultados) {
    altura += alturaCartao(contexto, resultado) + 22;
  }
  altura += 44;

  canvas.width = LARGURA * ESCALA;
  canvas.height = altura * ESCALA;
  contexto.scale(ESCALA, ESCALA);
  contexto.fillStyle = "#ffffff";
  contexto.fillRect(0, 0, LARGURA, altura);

  contexto.fillStyle = "#153b5b";
  contexto.font = "bold 38px Arial, sans-serif";
  contexto.fillText("Resultado da Autoavaliação Digital", MARGEM, 80);

  contexto.fillStyle = "#526174";
  contexto.font = "24px Arial, sans-serif";
  contexto.fillText("Resumo e orientações para sua empresa", MARGEM, 122);
  contexto.font = "18px Arial, sans-serif";
  contexto.fillText(
    new Date().toLocaleDateString("pt-BR"),
    MARGEM,
    158,
  );

  contexto.strokeStyle = "#dde6ed";
  contexto.lineWidth = 2;
  contexto.beginPath();
  contexto.moveTo(MARGEM, 190);
  contexto.lineTo(LARGURA - MARGEM, 190);
  contexto.stroke();

  let cursorY = 218;
  for (const resultado of resultados) {
    cursorY = desenharCartao(contexto, resultado, cursorY) + 22;
  }

  const blob = await obterBlob(canvas);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const data = new Date();
  const dataArquivo = [
    data.getFullYear(),
    String(data.getMonth() + 1).padStart(2, "0"),
    String(data.getDate()).padStart(2, "0"),
  ].join("-");

  link.href = url;
  link.download = `autoavaliacao-${dataArquivo}.jpg`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
