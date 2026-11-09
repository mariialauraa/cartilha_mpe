import { beforeEach, describe, expect, it, vi } from "vitest";
import { baixarManualAutoavaliacao } from "../../utils/baixarManualAutoavaliacao";

const { estadoPdf } = vi.hoisted(() => ({
  estadoPdf: {
    textos: [] as string[],
    nomeArquivo: "",
    paginas: 1,
  },
}));

vi.mock("jspdf", () => ({
  jsPDF: class {
    setProperties() {}
    setFont() {}
    setFontSize() {}
    setTextColor() {}
    setFillColor() {}
    setDrawColor() {}
    setLineWidth() {}
    roundedRect() {}
    rect() {}
    line() {}
    circle() {}
    setPage() {}

    splitTextToSize(texto: string, largura: number): string[] {
      const limite = Math.max(1, Math.floor(largura / 1.8));
      const palavras = texto.split(/\s+/);
      const linhas: string[] = [];
      let linha = "";

      for (const palavra of palavras) {
        const tentativa = linha ? `${linha} ${palavra}` : palavra;
        if (linha && tentativa.length > limite) {
          linhas.push(linha);
          linha = palavra;
        } else {
          linha = tentativa;
        }
      }

      if (linha) linhas.push(linha);
      return linhas;
    }

    getTextWidth(texto: string): number {
      return texto.length * 1.5;
    }

    text(texto: string | string[]) {
      estadoPdf.textos.push(
        Array.isArray(texto) ? texto.join("\n") : texto,
      );
    }

    addPage() {
      estadoPdf.paginas += 1;
    }

    getNumberOfPages(): number {
      return estadoPdf.paginas;
    }

    save(nomeArquivo: string) {
      estadoPdf.nomeArquivo = nomeArquivo;
    }
  },
}));

describe("baixarManualAutoavaliacao", () => {
  beforeEach(() => {
    estadoPdf.textos = [];
    estadoPdf.nomeArquivo = "";
    estadoPdf.paginas = 1;
  });

  it("gera um PDF com pontuação, classificação, orientações e dicas", async () => {
    await baixarManualAutoavaliacao([
      {
        nome: "Presença Digital",
        pontos: 8,
        classificacao: {
          texto: "Uso frequente",
          classe: "frequente",
          descricao: "Uso frequente dos canais.",
        },
        descricao: "Descrição personalizada para canais digitais.",
        dicas: ["Acompanhe os resultados das publicações."],
      },
    ]);

    expect(estadoPdf.textos).toContain(
      "Resultado da Autoavaliação Digital",
    );
    expect(estadoPdf.textos).toContain("Para manter bons resultados");
    expect(estadoPdf.textos).toContain("8/9");
    expect(estadoPdf.textos).toContain("Uso frequente");
    expect(estadoPdf.textos).toContain(
      "Descrição personalizada para canais digitais.",
    );
    expect(estadoPdf.textos).toContain(
      "Acompanhe os resultados das publicações.",
    );
    expect(estadoPdf.nomeArquivo).toMatch(
      /^autoavaliacao-\d{4}-\d{2}-\d{2}\.pdf$/,
    );
  });

  it("cria páginas adicionais quando o conteúdo não cabe em uma página", async () => {
    const textoLongo = "Orientação detalhada para a empresa ".repeat(12);

    await baixarManualAutoavaliacao(
      ["Presença Digital", "Comércio Eletrônico", "Gestão Empresarial (ERP)"].map(
        (nome) => ({
          nome,
          pontos: 3,
          classificacao: {
            texto: "Uso inicial",
            classe: "atencao" as const,
            descricao: "Uso inicial da ferramenta.",
          },
          descricao: textoLongo,
          dicas: [textoLongo, textoLongo, textoLongo],
        }),
      ),
    );

    expect(estadoPdf.paginas).toBeGreaterThan(1);
    expect(estadoPdf.textos).toContain(`Página 1 de ${estadoPdf.paginas}`);
  });
});
