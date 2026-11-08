type Classificacao = {
  texto: string;
  classe: string;
  descricao: string;
};

export function obterClassificacao(pontos: number): Classificacao {
  if (pontos <= 3) {
    return {
      texto: "Uso inicial",
      classe: "atencao",
      descricao: "Sua empresa ainda utiliza pouco essa ferramenta digital.",
    };
  }

  if (pontos <= 6) {
    return {
      texto: "Uso moderado",
      classe: "melhoria",
      descricao:
        "Sua empresa utiliza essa ferramenta, mas ainda pode ampliar seu uso.",
    };
  }

  return {
    texto: "Uso frequente",
    classe: "frequente",
    descricao: "Sua empresa já utiliza essa ferramenta com frequência.",
  };
}
