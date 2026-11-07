import {
  Camera,
  MessageCircle,
  Eye,
  X,
  Building2,
  ShoppingBag,
  Users,
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
    "instagram" | "whatsapp" | null
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
              <p>
                Os sistemas ERP ajudam a integrar e organizar informações
                relacionadas às diferentes atividades de uma empresa.
              </p>
            </div>
          </details>
        </section>
      </div>

      {modalAberto && (
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
              <h2 id="modal-exemplo-titulo">
                {modalAberto === "instagram"
                  ? "Exemplo de perfil comercial nas redes sociais"
                  : "Exemplo de perfil comercial no WhatsApp Business"}
              </h2>

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
              <p>
                {modalAberto === "instagram"
                  ? "Veja como uma confeitaria pode organizar seu perfil nas redes sociais para apresentar seus produtos e facilitar o contato com os clientes."
                  : "Veja como uma confeitaria pode utilizar o WhatsApp Business para apresentar seus produtos, informar os horários de atendimento e facilitar a comunicação com os clientes."}
              </p>

              <img
                src={
                  modalAberto === "instagram"
                    ? "/images/perfil_loja.png"
                    : "/images/perfil_wpp.png"
                }
                alt={
                  modalAberto === "instagram"
                    ? "Exemplo de perfil comercial de uma confeitaria nas redes sociais, destacando foto de perfil, biografia, link de contato, destaques e conteúdos fixados."
                    : "Exemplo de perfil comercial de uma confeitaria no WhatsApp Business, destacando descrição, horário de atendimento e catálogo de produtos."
                }
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default FerramentasDigitais;
