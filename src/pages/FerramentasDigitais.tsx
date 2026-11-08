import {
  Camera,
  MessageCircle,
  Eye,
  X,
  Building2,
  ShoppingBag,
  Users,
  BarChart3,
  ShoppingCart,
  Package,
  Wallet,
  Contact,
} from "lucide-react";

import { useEffect, useState } from "react";
import "../styles/FerramentasDigitais.css";

const canaisDigitais = [
  {
    icone: Camera,
    titulo: "Redes sociais",
    descricao:
      "Divulgar produtos, compartilhar novidades e interagir com os clientes.",
  },
  {
    icone: MessageCircle,
    titulo: "Aplicativos de mensagens",
    descricao: "Responder dúvidas, atender clientes e facilitar a comunicação.",
  },
];

const fasesPresencaDigital = [
  {
    numero: "01",
    titulo: "Existência",
    descricao:
      "Escolha os canais mais adequados ao seu negócio e planeje como sua empresa estará presente na internet.",
  },
  {
    numero: "02",
    titulo: "Atração",
    descricao:
      "Divulgue seus produtos, serviços e informações relevantes para chamar a atenção do público.",
  },
  {
    numero: "03",
    titulo: "Relacionamento",
    descricao:
      "Responda aos clientes, acompanhe os comentários e utilize as sugestões recebidas para melhorar seu atendimento.",
  },
  {
    numero: "04",
    titulo: "Engajamento",
    descricao:
      "Mantenha a comunicação e incentive a participação dos clientes para fortalecer o relacionamento com sua empresa.",
  },
];

function FerramentasDigitais() {
  const [modalAberto, setModalAberto] = useState<
    "instagram" | "whatsapp" | "erp" | null
  >(null);

  useEffect(() => {
    if (!modalAberto) return;

    const fecharComEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalAberto(null);
      }
    };

    window.addEventListener("keydown", fecharComEsc);

    return () => {
      window.removeEventListener("keydown", fecharComEsc);
    };
  }, [modalAberto]);

  const exemplos = {
    instagram: {
      titulo: "Exemplo de perfil comercial nas redes sociais",
      descricao:
        "Veja como uma confeitaria pode organizar seu perfil nas redes sociais para apresentar seus produtos e facilitar o contato com os clientes.",
      imagem: "/images/perfil_loja.png",
      alt: "Exemplo de perfil comercial de uma confeitaria nas redes sociais.",
    },
    whatsapp: {
      titulo: "Exemplo de perfil comercial no WhatsApp Business",
      descricao:
        "Veja como uma confeitaria pode utilizar o WhatsApp Business para apresentar seus produtos, informar os horários de atendimento e facilitar a comunicação com os clientes.",
      imagem: "/images/perfil_wpp.png",
      alt: "Exemplo de perfil comercial de uma confeitaria no WhatsApp Business.",
    },
    erp: {
      titulo: "Exemplo de sistema de gestão empresarial (ERP)",
      descricao:
        "Veja como um sistema ERP pode integrar informações de vendas, compras, estoque, financeiro, recursos humanos e gestão de clientes.",
      imagem: "/images/exemplo_erp.png",
      alt: "Diagrama de um sistema ERP integrando vendas, compras, estoque, financeiro, recursos humanos e gestão de clientes.",
    },
  };

  const exemploAtual = modalAberto ? exemplos[modalAberto] : null;

  return (
    <main className="ferramentas-page">
      <section className="ferramentas-hero">
        <div className="container">
          <h1>Ferramentas Digitais</h1>
          <p>
            Conheça ferramentas digitais que podem ajudar micro e pequenas
            empresas a melhorar sua presença online, ampliar as vendas e
            organizar seus processos.
          </p>
        </div>
      </section>

      <div className="container ferramentas-conteudo">
        {/* PRESENÇA DIGITAL */}
        <section className="ferramentas-secao">
          <details className="ferramentas-expansivel">
            <summary>
              <h2>Presença Digital</h2>
            </summary>

            <div className="ferramentas-secao-conteudo">
              <div className="ferramentas-bloco">
                <h3>O que é presença digital?</h3>

                <p>
                  Presença digital é a forma como uma empresa se apresenta,
                  divulga seus produtos ou serviços e se comunica com os
                  clientes pela internet.
                </p>

                <p>
                  Ela pode ser construída por meio de redes sociais, sites e
                  aplicativos de mensagens, ajudando a empresa a ser encontrada
                  e a manter um relacionamento com seu público.
                </p>
              </div>

              <div className="ferramentas-bloco">
                <h3>Principais canais digitais</h3>

                <div className="canais-digitais-grid">
                  {canaisDigitais.map((canal) => (
                    <div className="canal-digital-card" key={canal.titulo}>
                      <span className="canal-digital-icone" aria-hidden="true">
                        <canal.icone size={23} strokeWidth={1.8} />
                      </span>

                      <h4>{canal.titulo}</h4>
                      <p>{canal.descricao}</p>

                      {(canal.titulo === "Redes sociais" ||
                        canal.titulo === "Aplicativos de mensagens") && (
                        <button
                          type="button"
                          className="canal-exemplo-botao"
                          onClick={() =>
                            setModalAberto(
                              canal.titulo === "Redes sociais"
                                ? "instagram"
                                : "whatsapp",
                            )
                          }
                        >
                          <Eye size={17} strokeWidth={1.8} />
                          Ver exemplo
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="ferramentas-bloco">
                <h3>Como construir sua presença digital?</h3>

                <p>
                  A construção da presença digital pode acontecer de forma
                  gradual, considerando as necessidades e os objetivos de cada
                  empresa.
                </p>

                <div className="fases-digitais">
                  {fasesPresencaDigital.map((fase) => (
                    <div className="fase-digital" key={fase.numero}>
                      <span className="fase-numero">{fase.numero}</span>

                      <div className="fase-conteudo">
                        <h4>{fase.titulo}</h4>
                        <p>{fase.descricao}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ferramentas-exemplo-pratico">
                <h3>Exemplo prático</h3>

                <p>
                  Imagine uma pequena confeitaria que deseja alcançar mais
                  clientes. Ela pode criar um perfil nas redes sociais para
                  divulgar seus bolos, apresentar um catálogo de produtos e
                  disponibilizar um aplicativo de mensagens para receber pedidos
                  e tirar dúvidas.
                </p>

                <p>
                  Com publicações frequentes e um bom atendimento, a confeitaria
                  pode aumentar sua visibilidade e fortalecer o relacionamento
                  com os consumidores.
                </p>
              </div>
            </div>
          </details>
        </section>

        {/* COMÉRCIO ELETRÔNICO */}
        <section className="ferramentas-secao">
          <details className="ferramentas-expansivel">
            <summary>
              <h2>
                Comércio Eletrônico (<em>e-commerce</em>)
              </h2>
            </summary>

            <div className="ferramentas-secao-conteudo">
              <div className="ferramentas-bloco">
                <h3>O que é comércio eletrônico?</h3>

                <p>
                  O comércio eletrônico, também conhecido como{" "}
                  <em>e-commerce</em>, é a comercialização de produtos e
                  serviços pela internet. Ele envolve etapas como a apresentação
                  dos produtos, a realização de pedidos, o pagamento e o
                  atendimento ao cliente.
                </p>

                <p>
                  Para micro e pequenas empresas, essa modalidade pode ampliar
                  as oportunidades de venda e permitir que os negócios alcancem
                  consumidores além de sua localização física.
                </p>
              </div>

              <div className="ferramentas-bloco">
                <h3>
                  Principais modalidades de <em>e-commerce</em>
                </h3>

                <p>
                  As transações comerciais pela internet podem acontecer entre
                  diferentes tipos de participantes.
                </p>

                <div className="ecommerce-modalidades-grid">
                  <div className="ecommerce-modalidade-card">
                    <span className="canal-digital-icone">
                      <Building2 size={23} strokeWidth={1.8} />
                    </span>

                    <h4>B2B</h4>
                    <h5>Empresa para empresa</h5>

                    <p>
                      Uma pequena fábrica de embalagens vende seus produtos para
                      outras empresas pela internet.
                    </p>
                  </div>

                  <div className="ecommerce-modalidade-card">
                    <span className="canal-digital-icone">
                      <ShoppingBag size={23} strokeWidth={1.8} />
                    </span>

                    <h4>B2C</h4>
                    <h5>Empresa para consumidor</h5>

                    <p>
                      Uma pequena loja vende seus produtos diretamente aos
                      consumidores por meio de uma loja virtual.
                    </p>
                  </div>

                  <div className="ecommerce-modalidade-card">
                    <span className="canal-digital-icone">
                      <Users size={23} strokeWidth={1.8} />
                    </span>

                    <h4>C2C</h4>
                    <h5>Consumidor para consumidor</h5>

                    <p>
                      Uma pessoa vende um produto usado para outra pessoa por
                      meio de uma plataforma online.
                    </p>
                  </div>
                </div>
              </div>

              <div className="ferramentas-bloco">
                <h3>O que considerar antes de vender online?</h3>

                <p>
                  Para oferecer uma boa experiência de compra, é importante
                  planejar algumas etapas.
                </p>

                <div className="fases-digitais">
                  <div className="fase-digital">
                    <span className="fase-numero">01</span>

                    <div className="fase-conteudo">
                      <h4>Organização do estoque</h4>
                      <p>
                        Acompanhe a quantidade de produtos disponíveis e
                        mantenha o estoque atualizado nos canais de venda. Isso
                        ajuda a evitar pedidos de produtos indisponíveis e
                        problemas no atendimento aos clientes.
                      </p>
                    </div>
                  </div>

                  <div className="fase-digital">
                    <span className="fase-numero">02</span>

                    <div className="fase-conteudo">
                      <h4>Entregas e prazos</h4>
                      <p>
                        Organize a preparação e o envio dos pedidos,
                        considerando os custos de transporte e os prazos de
                        entrega. Informe essas condições com clareza para que os
                        clientes saibam quando e como receberão seus produtos.
                      </p>
                    </div>
                  </div>

                  <div className="fase-digital">
                    <span className="fase-numero">03</span>

                    <div className="fase-conteudo">
                      <h4>Segurança nas compras</h4>
                      <p>
                        Utilize plataformas confiáveis e mecanismos de segurança
                        para proteger os dados dos clientes durante as compras.
                        Tenha atenção à proteção das informações pessoais e de
                        pagamento, utilizando soluções que ajudem a prevenir
                        fraudes e aumentar a confiança dos consumidores.
                      </p>
                    </div>
                  </div>

                  <div className="fase-digital">
                    <span className="fase-numero">04</span>

                    <div className="fase-conteudo">
                      <h4>Divulgação e relacionamento</h4>
                      <p>
                        Utilize as redes sociais para divulgar os produtos e
                        direcionar os clientes aos canais de venda. Mantenha um
                        bom atendimento para esclarecer dúvidas e fortalecer o
                        relacionamento com os consumidores.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ferramentas-exemplo-pratico">
                <h3>Exemplo prático</h3>

                <p>
                  Imagine uma pequena loja que deseja ampliar suas vendas e
                  alcançar clientes de outras cidades. Para isso, ela pode criar
                  uma loja virtual para apresentar seus produtos, receber
                  pedidos e oferecer opções de pagamento.
                </p>

                <p>
                  Com esse novo canal de vendas, a empresa pode alcançar
                  consumidores além de sua localização física e ampliar suas
                  oportunidades de negócio.
                </p>
              </div>
            </div>
          </details>
        </section>

        {/* SISTEMAS ERP */}
        <section className="ferramentas-secao">
          <details className="ferramentas-expansivel">
            <summary>
              <h2>Sistemas de Gestão Empresarial (ERP)</h2>
            </summary>

            <div className="ferramentas-secao-conteudo">
              <div className="ferramentas-bloco">
                <h3>O que é um sistema ERP?</h3>

                <p>
                  Um ERP é um sistema de gestão que reúne informações de
                  diferentes áreas da empresa em um único lugar, facilitando a
                  organização e o acompanhamento das atividades.
                </p>

                <p>
                  Com ele, é possível integrar informações relacionadas a
                  vendas, compras, estoque, finanças e outras áreas, reduzindo a
                  repetição de dados e ajudando na tomada de decisões.
                </p>
              </div>

              <div className="ferramentas-bloco">
                <h3>Quais áreas um ERP pode integrar?</h3>

                <p>
                  Os sistemas ERP podem ser organizados em módulos, de acordo
                  com as necessidades de cada empresa.
                </p>

                <div className="erp-modulos-grid">
                  <div className="erp-modulo-card">
                    <span className="canal-digital-icone">
                      <BarChart3 size={23} strokeWidth={1.8} />
                    </span>
                    <h4>Vendas</h4>
                    <p>Acompanhar pedidos, clientes e faturamento.</p>
                  </div>

                  <div className="erp-modulo-card">
                    <span className="canal-digital-icone">
                      <ShoppingCart size={23} strokeWidth={1.8} />
                    </span>
                    <h4>Compras</h4>
                    <p>Organizar fornecedores, cotações e compras.</p>
                  </div>

                  <div className="erp-modulo-card">
                    <span className="canal-digital-icone">
                      <Package size={23} strokeWidth={1.8} />
                    </span>
                    <h4>Estoque</h4>
                    <p>Controlar produtos, movimentações e inventário.</p>
                  </div>

                  <div className="erp-modulo-card">
                    <span className="canal-digital-icone">
                      <Wallet size={23} strokeWidth={1.8} />
                    </span>
                    <h4>Financeiro</h4>
                    <p>Acompanhar contas a pagar e receber e fluxo de caixa.</p>
                  </div>

                  <div className="erp-modulo-card">
                    <span className="canal-digital-icone">
                      <Users size={23} strokeWidth={1.8} />
                    </span>
                    <h4>Recursos Humanos</h4>
                    <p>
                      Organizar informações relacionadas aos colaboradores,
                      folha de pagamento e benefícios.
                    </p>
                  </div>

                  <div className="erp-modulo-card">
                    <span className="canal-digital-icone">
                      <Contact size={23} strokeWidth={1.8} />
                    </span>
                    <h4>Gestão de clientes (CRM)</h4>
                    <p>
                      Reunir informações de clientes, contatos e relacionamento.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="canal-exemplo-botao erp-exemplo-botao"
                  onClick={() => setModalAberto("erp")}
                >
                  <Eye size={17} strokeWidth={1.8} />
                  Ver exemplo de sistema integrado
                </button>
              </div>

              <div className="ferramentas-bloco">
                <h3>O que considerar antes de adotar um ERP?</h3>

                <p>
                  Antes de escolher um sistema ERP, é importante considerar as
                  necessidades e as condições da empresa.
                </p>

                <div className="fases-digitais">
                  <div className="fase-digital">
                    <span className="fase-numero">01</span>

                    <div className="fase-conteudo">
                      <h4>Necessidades da empresa</h4>
                      <p>
                        Identifique quais atividades precisam de mais
                        organização e quais módulos são mais adequados ao seu
                        negócio.
                      </p>
                    </div>
                  </div>

                  <div className="fase-digital">
                    <span className="fase-numero">02</span>

                    <div className="fase-conteudo">
                      <h4>Custos de implantação e manutenção</h4>
                      <p>
                        Considere os custos envolvidos na implantação do sistema
                        e na sua manutenção ao longo do tempo.
                      </p>
                    </div>
                  </div>

                  <div className="fase-digital">
                    <span className="fase-numero">03</span>

                    <div className="fase-conteudo">
                      <h4>Integração com outras ferramentas</h4>
                      <p>
                        Avalie as dificuldades de integração com os sistemas e
                        plataformas que a empresa já utiliza.
                      </p>
                    </div>
                  </div>

                  <div className="fase-digital">
                    <span className="fase-numero">04</span>

                    <div className="fase-conteudo">
                      <h4>Capacitação da equipe</h4>
                      <p>
                        Prepare os colaboradores para utilizar o sistema e
                        aproveitar melhor suas funcionalidades.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ferramentas-exemplo-pratico">
                <h3>Exemplo prático</h3>

                <p>
                  Imagine uma pequena loja que precisa acompanhar suas vendas,
                  controlar o estoque e organizar as contas da empresa.
                </p>

                <p>
                  Com um sistema ERP, essas informações podem ser reunidas em um
                  único lugar, facilitando o acompanhamento das operações e
                  ajudando o responsável pelo negócio a tomar decisões com base
                  nos dados disponíveis.
                </p>
              </div>
            </div>
          </details>
        </section>
      </div>

      {exemploAtual && (
        <div
          className="ferramentas-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setModalAberto(null);
            }
          }}
        >
          <div
            className="ferramentas-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-exemplo-titulo"
          >
            <div className="ferramentas-modal-header">
              <h2 id="modal-exemplo-titulo">{exemploAtual.titulo}</h2>

              <button
                type="button"
                className="ferramentas-modal-fechar"
                onClick={() => setModalAberto(null)}
                aria-label="Fechar exemplo"
              >
                <X size={22} />
              </button>
            </div>

            <div className="ferramentas-modal-conteudo">
              <p>{exemploAtual.descricao}</p>

              <img src={exemploAtual.imagem} alt={exemploAtual.alt} />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default FerramentasDigitais;
