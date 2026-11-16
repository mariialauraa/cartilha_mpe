import type { ClasseClassificacao } from "./classificacao";

export const descricoesAutoavaliacao: Record<
  "presencaDigital" | "comercioEletronico" | "erp",
  Record<ClasseClassificacao, string>
> = {
  presencaDigital: {
    atencao:
      "Sua empresa ainda utiliza pouco os canais digitais. Comece explorando ferramentas simples para divulgar seus produtos ou serviços e se comunicar com os clientes.",

    melhoria:
      "Sua empresa já utiliza alguns canais digitais. Procure fortalecer sua presença online e aprimorar a comunicação com os clientes.",

    frequente:
      "Sua empresa já utiliza canais digitais com frequência. Continue aprimorando a comunicação e o relacionamento com os clientes para aproveitar melhor esses recursos.",
  },

  comercioEletronico: {
    atencao:
      "Sua empresa ainda utiliza pouco os recursos de comércio eletrônico. Considere começar com canais simples para vender produtos ou receber solicitações de serviços pela internet.",

    melhoria:
      "Sua empresa já utiliza alguns recursos de comércio eletrônico. Procure melhorar a organização das vendas e das solicitações de serviços para aproveitar melhor esses canais.",

    frequente:
      "Sua empresa já utiliza recursos de comércio eletrônico com frequência. Continue aprimorando a organização das vendas e dos serviços solicitados pela internet para tornar esses processos mais eficientes.",
  },

  erp: {
    atencao:
      "Sua empresa ainda utiliza pouco as ferramentas digitais de gestão. As orientações a seguir podem ajudar a identificar recursos adequados às necessidades do negócio.",

    melhoria:
      "Sua empresa já utiliza alguns recursos de gestão empresarial. Avalie como aproveitar melhor essas ferramentas para integrar informações e organizar os processos.",

    frequente:
      "Sua empresa já utiliza ferramentas digitais de gestão com frequência. Continue aprimorando o uso desses recursos para organizar os processos e apoiar as decisões do negócio.",
  },
};
