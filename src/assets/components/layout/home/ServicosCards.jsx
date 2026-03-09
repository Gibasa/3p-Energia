import "./ServicosCards.css";
import { useState } from "react";
import { createPortal } from "react-dom";

function ServicosCards() {
  const servicos = [
    {
      titulo: "Energia Solar",
      imagem: "./images/servicos/FULL EPC-BOS-BOT.jpeg", // Usando imagem do EPC
      texto: (
        <ul>
          <li>
            Projetos fotovoltaicos em telhado, carport, solo com estrutura fixa ou tracker e flutuante.
          </li>
          <li>
            Implantação em modelo EPC com fornecimento e execução, nas modalidades BOS ou turnkey completo.
          </li>
          <li>
            Soluções conectadas à rede, autônomas e com controle de exportação, conforme a necessidade operacional.
          </li>
        </ul>
      ),
    },
    {
      titulo: "BESS (Armazenamento de Energia)",
      imagem: "./images/servicos/ROOFTOP.jpeg", // Placeholder - talvez substituir por uma mais genérica se houver
      texto: (
        <ul>
          <li>
            Projeto de sistemas BESS para load shifting, peak shaving, backup de energia e qualidade de energia.
          </li>
          <li>
            Instalação e integração elétrica com adequação à infraestrutura existente e requisitos de operação.
          </li>
          <li>
            Monitoramento e gestão de performance para controle, disponibilidade e otimização do uso do sistema.
          </li>
        </ul>
      ),
    },
    {
      titulo: "Alta Tensão",
      imagem: "./images/servicos/SERVIÇOS - SUBESTAÇÃO.webp",
      texto: (
        <ul>
          <li>
            Engenharia e construção de subestações e linhas de transmissão e distribuição, com escopo completo de implantação.
          </li>
          <li>
            Projetos em BIM, montagem eletromecânica, testes e comissionamento, com documentação técnica e critérios de aceitação.
          </li>
          <li>
            Integração com concessionárias e atendimento a grandes consumidores, com foco em conformidade, segurança operacional e confiabilidade.
          </li>
        </ul>
      ),
    },
    {
      titulo: "Mercado Livre de Energia",
      imagem: "./images/servicos/MERCADO LIVRE DE ENERGIA.jpg",
      texto: (
        <ul>
          <li>
            Assessoria para migração ao Ambiente de Contratação Livre, do diagnóstico à operação.
          </li>
          <li>
            Análise de viabilidade, suporte regulatório e definição da estratégia de contratação.
          </li>
          <li>
            Conexão com comercializadoras e gestão do processo para previsibilidade de custos e redução de risco.
          </li>
        </ul>
      ),
    },
    {
      titulo: "O&M (Operação e Manutenção)",
      imagem: "./images/servicos/O&M.jpg",
      texto: (
        <ul>
          <li>
            Operação com monitoramento remoto e gestão de performance dos ativos.
          </li>
          <li>
            Manutenções preventiva e corretiva com rastreabilidade e prontidão de atendimento.
          </li>
          <li>
            Relatórios técnicos, indicadores e planos de melhoria para maximizar disponibilidade e performance.
          </li>
        </ul>
      ),
    },
    {
      titulo: "Eletromobilidade",
      imagem: "./images/servicos/ELETROMOBILIDADE.jpg",
      texto: (
        <ul>
          <li>
            Infraestrutura para carregamento de veículos elétricos, do projeto à implantação.
          </li>
          <li>
            Soluções integradas com geração própria e gestão de demanda, reduzindo impacto na operação.
          </li>
          <li>
            Dimensionamento para expansão planejada, conforme crescimento de frota e uso.
          </li>
        </ul>
      ),
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedServico, setSelectedServico] = useState(null);

  const openModal = (index) => {
    setSelectedServico(servicos[index]);
    setShowModal(true);
  };

  const closeModal = (event) => {
    if (
      event.target.classList.contains("modal-overlay") ||
      event.target.classList.contains("close-button")
    ) {
      setSelectedServico(null);
      setShowModal(false);
    }
  };
  return (
    <div className="servicos-cards">
      {servicos.map((servico, index) => (
        <div className="card" key={servico.titulo}>
          <div className="card-image" onClick={() => openModal(index)}>
            <img src={servico.imagem} alt={servico.titulo} loading="lazy" />
            <div className="card-title">
              <h3>{servico.titulo}</h3>
            </div>
          </div>
          <div className="card-content">{servico.texto}</div>
        </div>
      ))}

      {showModal &&
        createPortal(
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content">
              <button className="close-button" onClick={closeModal}>
                X
              </button>
              <div className="modal-content-text">
                <h2>{selectedServico.titulo}</h2>
                <div>{selectedServico.texto}</div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

export default ServicosCards;
