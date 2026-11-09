import { afterEach, describe, expect, it, vi } from "vitest";
import { baixarManualAutoavaliacao } from "../../utils/baixarManualAutoavaliacao";

describe("baixarManualAutoavaliacao", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("gera um JPG com pontuação, classificação, orientação e dicas", async () => {
    const textosDesenhados: string[] = [];
    const contexto = {
      measureText: vi.fn((texto: string) => ({ width: texto.length * 10 })),
      fillText: vi.fn((texto: string) => textosDesenhados.push(texto)),
      fillRect: vi.fn(),
      strokeRect: vi.fn(),
      scale: vi.fn(),
      beginPath: vi.fn(),
      moveTo: vi.fn(),
      lineTo: vi.fn(),
      stroke: vi.fn(),
    } as unknown as CanvasRenderingContext2D;
    const blob = new Blob(["jpg"], { type: "image/jpeg" });
    const createObjectURL = vi.fn(() => "blob:manual");
    const revokeObjectURL = vi.fn();
    const descriptorCreate = Object.getOwnPropertyDescriptor(
      URL,
      "createObjectURL",
    );
    const descriptorRevoke = Object.getOwnPropertyDescriptor(
      URL,
      "revokeObjectURL",
    );
    let nomeArquivo = "";
    const clics = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(function (this: HTMLAnchorElement) {
        nomeArquivo = this.download;
      });

    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(
      contexto,
    );
    vi.spyOn(HTMLCanvasElement.prototype, "toBlob").mockImplementation(
      (callback) => callback(blob),
    );
    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectURL,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: revokeObjectURL,
    });
    vi.useFakeTimers();

    try {
      await baixarManualAutoavaliacao([
        {
          nome: "Presença Digital",
          pontos: 8,
          classificacao: {
            texto: "Uso frequente",
            classe: "frequente",
            descricao: "Uso frequente dos canais.",
          },
          recomendacao: "Mantenha os canais atualizados.",
          dicas: ["Acompanhe os resultados das publicações."],
        },
      ]);

      expect(textosDesenhados).toContain("Resultado da Autoavaliação Digital");
      expect(textosDesenhados).toContain("8/9");
      expect(textosDesenhados).toContain("Uso frequente");
      expect(textosDesenhados).toContain("Mantenha os canais atualizados.");
      expect(textosDesenhados).toContain(
        "• Acompanhe os resultados das publicações.",
      );
      expect(createObjectURL).toHaveBeenCalledWith(blob);
      expect(clics).toHaveBeenCalledOnce();
      expect(nomeArquivo).toMatch(/^autoavaliacao-\d{4}-\d{2}-\d{2}\.jpg$/);

      await vi.runAllTimersAsync();
      expect(revokeObjectURL).toHaveBeenCalledWith("blob:manual");
    } finally {
      vi.useRealTimers();
      if (descriptorCreate) {
        Object.defineProperty(URL, "createObjectURL", descriptorCreate);
      } else {
        Reflect.deleteProperty(URL, "createObjectURL");
      }
      if (descriptorRevoke) {
        Object.defineProperty(URL, "revokeObjectURL", descriptorRevoke);
      } else {
        Reflect.deleteProperty(URL, "revokeObjectURL");
      }
    }
  });
});
