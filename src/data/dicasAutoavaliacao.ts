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
      "Avalie um canal simples para vender produtos ou receber solicitações de serviços pela internet.",
      "Informe com clareza os preços, as formas de pagamento e as condições de entrega ou prestação dos serviços.",
      "Organize os pedidos e agendamentos recebidos para não perder informações nem deixar clientes sem retorno.",
    ],
    melhoria: [
      "Mantenha atualizadas as informações sobre produtos, serviços, preços e disponibilidade.",
      "Organize os pedidos ou agendamentos, considerando os prazos e as necessidades dos clientes.",
      "Use canais de divulgação para facilitar o acesso dos clientes aos seus produtos ou serviços.",
    ],
    frequente: [
      "Revise periodicamente os preços, os prazos e as informações dos produtos ou serviços oferecidos.",
      "Verifique se os canais utilizados oferecem recursos adequados para proteger os dados dos clientes.",
      "Acompanhe os resultados das vendas ou solicitações de serviços para identificar oportunidades de melhoria.",
    ],
  },
  erp: {
    atencao: [
      "Identifique quais atividades precisam de mais organização, como finanças, atendimentos ou controle de estoque.",
      "Conheça os módulos de um sistema de gestão e avalie quais podem ajudar nas atividades da empresa.",
      "Pesquise sistemas de gestão que atendam às necessidades e às condições do seu negócio.",
    ],
    melhoria: [
      "Avalie quais módulos de um sistema de gestão podem complementar as ferramentas que sua empresa já utiliza.",
      "Verifique se o sistema permite integrar informações de diferentes áreas do negócio.",
      "Avalie os custos e os benefícios antes de ampliar a utilização do sistema ou adotar novos módulos.",
    ],
    frequente: [
      "Mantenha as informações registradas no sistema atualizadas e revise periodicamente os processos de trabalho.",
      "Avalie se os sistemas e módulos utilizados continuam atendendo às necessidades da empresa.",
      "Capacite a equipe e utilize as informações integradas para acompanhar as atividades e apoiar decisões.",
    ],
  },
};
