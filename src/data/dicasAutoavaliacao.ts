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
      "Planeje suas publicações com base nos resultados anteriores e nos interesses dos clientes.",
      "Aproveite comentários e sugestões para fortalecer o relacionamento com os clientes.",
    ],
  },
  comercioEletronico: {
    atencao: [
      "Escolha um canal digital adequado ao seu negócio para comercializar produtos ou receber solicitações de serviços, considerando os custos e as necessidades dos clientes.",
      "Informe com clareza os preços, as formas de pagamento e as condições de entrega dos produtos ou de prestação dos serviços.",
      "Utilize canais e meios de pagamento confiáveis para proteger os dados dos clientes e aumentar a segurança das transações.",
    ],
    melhoria: [
      "Aproveite os canais de divulgação, como as redes sociais, para direcionar os clientes aos canais onde podem comprar produtos ou solicitar serviços.",
      "Utilize planilhas eletrônicas ou aplicativos para organizar pedidos e agendamentos e acompanhar os prazos.",
      "Confirme os pagamentos recebidos e fique atento a pedidos ou solicitações suspeitas para evitar fraudes.",
    ],
    frequente: [
      "Acompanhe os resultados das vendas ou solicitações de serviços e considere as avaliações dos clientes para identificar oportunidades de melhoria.",
      "Avalie os custos e os prazos de entrega dos produtos ou de realização dos serviços para melhorar os processos do negócio.",
      "Revise periodicamente as medidas de segurança e os recursos de proteção de dados e prevenção de fraudes dos canais digitais utilizados.",
    ],
  },
  erp: {
    atencao: [
      "Identifique quais atividades precisam de mais organização, como finanças, pedidos, agendamentos ou controle de estoque.",
      "Pesquise sistemas de gestão, considerando as funcionalidades oferecidas, os custos e as necessidades do seu negócio.",
      "Comece pelas funcionalidades essenciais e reserve um tempo para aprender a utilizar o sistema.",
    ],
    melhoria: [
      "Explore outras funcionalidades do sistema que possam ajudar nas atividades da empresa.",
      "Integre as informações de diferentes áreas do negócio para reduzir a necessidade de controles separados.",
      "Mantenha os dados registrados no sistema atualizados e oriente a equipe sobre o uso correto das funcionalidades.",
    ],
    frequente: [
      "Utilize os relatórios do sistema para acompanhar os resultados da empresa e auxiliar na tomada de decisões.",
      "Revise os processos internos e identifique atividades que podem ser simplificadas ou automatizadas pelo sistema.",
      "Avalie periodicamente os custos e os benefícios do sistema e verifique se suas funcionalidades continuam atendendo às necessidades do negócio.",
    ],
  },
};
