import type { ClasseClassificacao } from "../utils/classificacao";

export const dicasAutoavaliacao: Record<
  "presencaDigital" | "comercioEletronico" | "erp",
  Record<ClasseClassificacao, string[]>
> = {
  presencaDigital: {
    atencao: [
      "Escolha um canal digital adequado ao seu negócio, como uma rede social ou um aplicativo de mensagens.",
      "Crie ou atualize o perfil com informações essenciais, como produtos ou serviços oferecidos, formas de contato e horário de atendimento.",
      "Comece a divulgar o que sua empresa oferece e responda às dúvidas dos clientes.",
    ],
    melhoria: [
      "Publique novidades e informações úteis com regularidade.",
      "Acompanhe comentários e mensagens para entender as dúvidas e sugestões dos clientes.",
      "Observe quais publicações geram mais interesse e use isso para orientar suas próximas ações.",
    ],
    frequente: [
      "Mantenha os canais atualizados e o atendimento ativo.",
      "Use os resultados das publicações para ajustar sua comunicação.",
      "Aproveite comentários e sugestões para fortalecer o relacionamento com os clientes.",
    ],
  },
  comercioEletronico: {
    atencao: [
      "Avalie um canal simples para apresentar produtos e receber pedidos pela internet.",
      "Informe com clareza os preços, as formas de pagamento, as opções de entrega e os prazos.",
      "Organize os pedidos recebidos para não perder informações nem deixar clientes sem retorno.",
    ],
    melhoria: [
      "Mantenha o estoque atualizado nos canais de venda para evitar oferecer produtos indisponíveis.",
      "Organize a preparação e o envio dos pedidos, considerando custos e prazos.",
      "Use canais de divulgação para levar clientes até onde seus produtos são vendidos.",
    ],
    frequente: [
      "Revise periodicamente o estoque, os prazos e as informações dos produtos.",
      "Verifique se a plataforma oferece recursos adequados para proteger os dados dos clientes.",
      "Acompanhe as vendas e use os resultados para identificar oportunidades de melhoria.",
    ],
  },
  erp: {
    atencao: [
      "Identifique quais atividades precisam de mais organização, como finanças, vendas ou estoque.",
      "Comece registrando essas informações de forma consistente, mesmo antes de escolher um sistema.",
      "Pesquise soluções que atendam às necessidades e às condições da empresa.",
    ],
    melhoria: [
      "Identifique quais módulos do sistema são realmente úteis para o negócio.",
      "Avalie os custos de implantação e manutenção antes de adotar um ERP ou ampliar sua utilização.",
      "Verifique se o sistema se integra às ferramentas que a empresa já utiliza e prepare a equipe para usá-lo.",
    ],
    frequente: [
      "Mantenha as informações registradas no sistema atualizadas e revise periodicamente os processos de trabalho.",
      "Revise se os módulos utilizados continuam atendendo às necessidades da empresa.",
      "Capacite a equipe e use as informações integradas para acompanhar as operações e apoiar decisões.",
    ],
  },
};
