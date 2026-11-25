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

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/FerramentasDigitais.css";

const canaisDigitais = [
  {
    icone: Camera,
    titulo: "Redes sociais",
    descricao:
      "Divulgar produtos e serviços, compartilhar novidades e interagir com os clientes.",
  },
  {
    icone: MessageCircle,
    titulo: "Aplicativos de mensagens",
    descricao:
      "Atender clientes, esclarecer dúvidas e receber pedidos ou agendamentos.",
  },
];

const fasesPresencaDigital = [
  {
    numero: "01",
    titulo: "Existência",
    descricao:
      "Escolha os canais digitais mais adequados ao seu negócio e crie perfis com informações sobre a empresa, seus produtos ou serviços e formas de contato.",
  },
  {
    numero: "02",
    titulo: "Atração",
    descricao:
      "Publique regularmente conteúdos sobre seus produtos ou serviços, novidades e informações que possam despertar o interesse do público.",
  },
  {
    numero: "03",
    titulo: "Relacionamento",
    descricao:
      "Responda às mensagens e aos comentários dos clientes e utilize as sugestões recebidas para melhorar o atendimento.",
  },
  {
    numero: "04",
    titulo: "Engajamento",
    descricao:
      "Incentive a participação dos clientes por meio de enquetes, avaliações e compartilhamento de experiências, fortalecendo o vínculo com a empresa.",
  },
];

function FerramentasDigitais() {
  const { hash, key } = useLocation();
  const conteudoRef = useRef<HTMLDivElement>(null);
  const [modalAberto, setModalAberto] = useState<
    "instagram" | "whatsapp" | "erp" | null
  >(null);

  useLayoutEffect(() => {
    const secoes =
      conteudoRef.current?.querySelectorAll<HTMLDetailsElement>("details[id]");
    const destino = Array.from(secoes ?? []).find(
      (secao) => `#${secao.id}` === hash,
    );

    if (destino) {
      secoes?.forEach((secao) => {
        secao.open = false;
      });
      destino.open = true;
      destino.scrollIntoView({ behavior: "instant", block: "start" });
      destino.querySelector("summary")?.focus({ preventScroll: true });
    }
  }, [hash, key]);

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
      titulo: "Exemplo de perfil comercial no Instagram",
      descricao:
        "Veja como uma confeitaria pode organizar seu perfil no Instagram para divulgar seus produtos, apresentar informações sobre o negócio e facilitar o contato com os clientes.",
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

      <div className="container ferramentas-conteudo" ref={conteudoRef}>
        {/* PRESENÇA DIGITAL */}
        <section className="ferramentas-secao">
          <details
            id="presenca-digital"
            name="ferramentas-digitais"
            className="ferramentas-expansivel"
            open
          >
            <summary>
              <h2>Presença Digital</h2>
            </summary>

            <div className="ferramentas-secao-conteudo">
              <div className="ferramentas-bloco">
                <h3>O que é presença digital?</h3>

                <p>
                  Presença digital é a forma como uma empresa se apresenta,
                  divulga seus produtos ou serviços e se comunica com os
                  clientes pela internet. Por meio de canais como redes sociais,
                  sites e aplicativos de mensagens, a empresa pode ampliar sua
                  visibilidade, facilitar o contato com os clientes e fortalecer
                  o relacionamento com seu público.
                </p>
              </div>

              <div className="ferramentas-bloco">
                <h3>Exemplos de canais digitais</h3>

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
                  A presença digital pode ser construída de forma gradual,
                  considerando as necessidades e os objetivos de cada empresa.
                  Conheça as principais etapas desse processo.
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
                  clientes. Ela pode utilizar o Instagram para divulgar seus
                  produtos e o WhatsApp Business para apresentar seu catálogo,
                  receber pedidos e esclarecer dúvidas. Com publicações
                  frequentes e um bom atendimento, a confeitaria pode ampliar
                  sua visibilidade e fortalecer o relacionamento com seus
                  clientes.
                </p>
              </div>
            </div>
          </details>
        </section>

        {/* COMÉRCIO ELETRÔNICO */}
        <section className="ferramentas-secao">
          <details
            id="comercio-eletronico"
            name="ferramentas-digitais"
            className="ferramentas-expansivel"
          >
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
                  serviços pela internet. Ele envolve atividades como a
                  apresentação das ofertas, a realização de pedidos, o pagamento
                  e o atendimento ao cliente. Para micro e pequenas empresas,
                  essa modalidade pode ampliar as oportunidades de venda e
                  possibilitar o alcance de clientes em diferentes localidades.
                </p>
              </div>

              <div className="ferramentas-bloco">
                <h3>
                  Principais modalidades de <em>e-commerce</em>
                </h3>

                <p>
                  As transações comerciais pela internet podem ocorrer entre
                  empresas, entre empresas e consumidores ou entre os próprios
                  consumidores. Conheça algumas dessas modalidades.
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
                      Uma pessoa vende um produto para outra pessoa por meio de
                      uma plataforma online.
                    </p>
                  </div>
                </div>
              </div>

              <div className="ferramentas-bloco">
                <h3>O que considerar antes de vender online?</h3>

                <p>
                  Antes de comercializar produtos ou serviços pela internet, é
                  importante organizar alguns processos do negócio para oferecer
                  uma boa experiência aos clientes.
                </p>

                <div className="fases-digitais">
                  <div className="fase-digital">
                    <span className="fase-numero">01</span>

                    <div className="fase-conteudo">
                      <h4>Escolha do canal de venda</h4>
                      <p>
                        Escolha o canal de venda mais adequado ao seu negócio,
                        como lojas virtuais, marketplaces ou aplicativos de
                        mensagens. Considere os custos, as funcionalidades
                        oferecidas e as necessidades da empresa e dos clientes.
                      </p>
                    </div>
                  </div>

                  <div className="fase-digital">
                    <span className="fase-numero">02</span>

                    <div className="fase-conteudo">
                      <h4>Organização de produtos e serviços</h4>
                      <p>
                        Mantenha atualizadas as informações sobre os produtos
                        disponíveis e os serviços oferecidos. Organize o estoque
                        ou a agenda de atendimentos para evitar pedidos de
                        produtos indisponíveis ou conflitos de horários.
                      </p>
                    </div>
                  </div>

                  <div className="fase-digital">
                    <span className="fase-numero">03</span>

                    <div className="fase-conteudo">
                      <h4>Entregas e prazos</h4>
                      <p>
                        Organize a preparação e a entrega dos pedidos ou a
                        realização dos serviços contratados. Informe com clareza
                        os custos, os prazos e as condições de entrega ou
                        atendimento aos clientes.
                      </p>
                    </div>
                  </div>

                  <div className="fase-digital">
                    <span className="fase-numero">04</span>

                    <div className="fase-conteudo">
                      <h4>Segurança nas compras</h4>
                      <p>
                        Utilize plataformas e meios de pagamento confiáveis,
                        proteja as informações pessoais dos clientes e verifique
                        a confirmação dos pagamentos. Essas práticas ajudam a
                        prevenir fraudes e aumentar a confiança dos
                        consumidores.
                      </p>
                    </div>
                  </div>

                  <div className="fase-digital">
                    <span className="fase-numero">05</span>

                    <div className="fase-conteudo">
                      <h4>Divulgação e relacionamento</h4>
                      <p>
                        Utilize as redes sociais para divulgar seus produtos ou
                        serviços e direcionar os clientes aos canais de venda.
                        Ofereça um bom atendimento em todas as etapas da
                        comercialização, esclarecendo dúvidas e acompanhando as
                        solicitações recebidas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ferramentas-exemplo-pratico">
                <h3>Exemplo prático</h3>

                <p>
                  Imagine uma pequena loja de roupas que deseja ampliar suas
                  vendas e alcançar clientes de outras cidades. Ela pode criar
                  uma loja virtual para apresentar seus produtos, receber
                  pedidos e oferecer diferentes formas de pagamento. Ao manter o
                  estoque atualizado, organizar as entregas e divulgar a loja
                  nas redes sociais, a empresa pode ampliar seu alcance e
                  conquistar novos clientes.
                </p>
              </div>
            </div>
          </details>
        </section>

        {/* SISTEMAS ERP */}
        <section className="ferramentas-secao">
          <details
            id="erp"
            name="ferramentas-digitais"
            className="ferramentas-expansivel"
          >
            <summary>
              <h2>Sistemas de Gestão Empresarial (ERP)</h2>
            </summary>

            <div className="ferramentas-secao-conteudo">
              <div className="ferramentas-bloco">
                <h3>O que é um sistema ERP?</h3>

                <p>
                  Um ERP é um sistema de gestão empresarial que integra
                  informações de diferentes áreas do negócio, como vendas,
                  compras, estoque e finanças, em um único lugar. Essa
                  integração facilita a organização das atividades, reduz a
                  necessidade de controles separados e permite que os gestores
                  acompanhem os resultados da empresa e tomem decisões com base
                  nas informações registradas.
                </p>
              </div>

              <div className="ferramentas-bloco">
                <h3>Quais áreas um ERP pode integrar?</h3>

                <p>
                  Os sistemas ERP podem ser organizados em módulos, que
                  correspondem a diferentes áreas da empresa. Cada negócio pode
                  utilizar as funcionalidades mais adequadas às suas
                  necessidades.
                </p>

                <div className="erp-modulos-grid">
                  <div className="erp-modulo-card">
                    <span className="canal-digital-icone">
                      <BarChart3 size={23} strokeWidth={1.8} />
                    </span>
                    <h4>Vendas</h4>
                    <p>
                      Registrar vendas e serviços contratados, acompanhar
                      pedidos e controlar o faturamento.
                    </p>
                  </div>

                  <div className="erp-modulo-card">
                    <span className="canal-digital-icone">
                      <ShoppingCart size={23} strokeWidth={1.8} />
                    </span>
                    <h4>Compras</h4>
                    <p>
                      Gerenciar fornecedores, comparar cotações e acompanhar
                      pedidos de compra.
                    </p>
                  </div>

                  <div className="erp-modulo-card">
                    <span className="canal-digital-icone">
                      <Package size={23} strokeWidth={1.8} />
                    </span>
                    <h4>Estoque</h4>
                    <p>
                      Controlar a quantidade de produtos disponíveis e
                      acompanhar as entradas e saídas do estoque.
                    </p>
                  </div>

                  <div className="erp-modulo-card">
                    <span className="canal-digital-icone">
                      <Wallet size={23} strokeWidth={1.8} />
                    </span>
                    <h4>Financeiro</h4>
                    <p>
                      Controlar receitas, despesas, contas a pagar e a receber,
                      além de acompanhar o fluxo de caixa.
                    </p>
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
                      Organizar dados dos clientes, acompanhar o histórico de
                      compras e atendimentos e facilitar a comunicação.
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
                  A escolha de um sistema ERP deve considerar as características
                  do negócio, os recursos disponíveis e os objetivos da empresa.
                </p>

                <div className="fases-digitais">
                  <div className="fase-digital">
                    <span className="fase-numero">01</span>

                    <div className="fase-conteudo">
                      <h4>Necessidades da empresa</h4>
                      <p>
                        Identifique quais atividades precisam de mais
                        organização, como finanças, vendas, agendamentos ou
                        controle de estoque. Priorize as funcionalidades
                        essenciais para o seu negócio.
                      </p>
                    </div>
                  </div>

                  <div className="fase-digital">
                    <span className="fase-numero">02</span>

                    <div className="fase-conteudo">
                      <h4>Custos de implantação e manutenção</h4>
                      <p>
                        Avalie os custos de contratação, implantação,
                        mensalidade, treinamento e manutenção do sistema.
                        Verifique se esses valores são compatíveis com o
                        orçamento da empresa.
                      </p>
                    </div>
                  </div>

                  <div className="fase-digital">
                    <span className="fase-numero">03</span>

                    <div className="fase-conteudo">
                      <h4>Integração com outras ferramentas</h4>
                      <p>
                        Verifique se o ERP pode ser integrado às ferramentas que
                        sua empresa já utiliza, como plataformas de comércio
                        eletrônico e sistemas de pagamento. Essa integração pode
                        reduzir a necessidade de registrar as mesmas informações
                        em diferentes sistemas.
                      </p>
                    </div>
                  </div>

                  <div className="fase-digital">
                    <span className="fase-numero">04</span>

                    <div className="fase-conteudo">
                      <h4>Facilidade de uso e suporte técnico</h4>
                      <p>
                        Verifique se o sistema é fácil de utilizar e se oferece
                        suporte técnico e materiais de orientação que possam
                        auxiliar em caso de dúvidas ou dificuldades.
                      </p>
                    </div>
                  </div>

                  <div className="fase-digital">
                    <span className="fase-numero">05</span>

                    <div className="fase-conteudo">
                      <h4>Capacitação da equipe</h4>
                      <p>
                        Reserve um tempo para aprender a utilizar o sistema e
                        orientar a equipe. Comece pelas funcionalidades
                        essenciais e explore outros recursos conforme as
                        necessidades do negócio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ferramentas-exemplo-pratico">
                <h3>Exemplo prático</h3>

                <p>
                  Imagine uma pequena papelaria que precisa acompanhar suas
                  vendas, controlar o estoque e organizar suas finanças. Com um
                  sistema ERP, ao registrar uma venda, o estoque pode ser
                  atualizado automaticamente e as informações financeiras
                  registradas no sistema. Dessa forma, o gestor pode acompanhar
                  os resultados do negócio, identificar os produtos mais
                  vendidos e planejar a reposição do estoque.
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
