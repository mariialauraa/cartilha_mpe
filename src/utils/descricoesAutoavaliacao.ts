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
      "Sua empresa ainda utiliza pouco o comércio eletrônico. Considere começar com canais simples para apresentar produtos e receber pedidos pela internet.",

    melhoria:
      "Sua empresa já utiliza alguns recursos de comércio eletrônico. Procure melhorar a organização das vendas e dos pedidos para aproveitar melhor esses canais.",

    frequente:
      "O comércio eletrônico já faz parte das atividades da sua empresa. Continue aprimorando a organização das vendas e dos pedidos para tornar esses processos mais eficientes.",
  },

  erp: {
    atencao:
      "O uso de sistemas de gestão ainda é limitado na sua empresa. As orientações a seguir podem ajudar a identificar ferramentas adequadas às necessidades do negócio.",

    melhoria:
      "Sua empresa já utiliza alguns recursos de gestão empresarial. Avalie como aproveitar melhor essas ferramentas para integrar informações e organizar os processos.",

    frequente:
      "Sua empresa já utiliza sistemas de gestão com frequência. Continue aprimorando o uso dessas ferramentas para organizar os processos e apoiar as decisões do negócio.",
  },
};
