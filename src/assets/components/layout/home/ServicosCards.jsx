import "./ServicosCards.css";
import { useState } from "react";
import { createPortal } from "react-dom";

function ServicosCards() {
  const servicos = [
    {
      titulo: "EPC: (Engenharia, Suprimentos e Construção)",
      imagem: "/3p-Energia/images/servicos/FULL EPC-BOS-BOT.png",
      texto: (
        <>
          <p>
            <strong>FULL:</strong> Na categoria de Construção, apresentamos uma
            solução completa, realizando todos os trabalhos de instalação, desde
            a montagem dos painéis solares, inversores, conexões elétricas,
            suportes e proteções. Fornecemos todos os materiais necessários,
            desde o planejamento até a entrega final do projeto, garantindo
            qualidade em todas as etapas.
          </p>
          <p>
            <strong>BOS (Balance of System):</strong> Nesta modalidade,
            concentramo-nos exclusivamente na Construção, executando todos os
            trabalhos de instalação, incluindo a montagem dos painéis solares,
            inversores, conexões elétricas, suportes e proteções, sem deixar de
            fornecer os materiais essenciais.
          </p>
          <p>
            <strong>BOT (Build, Operate, Transfer):</strong> Assumimos a
            responsabilidade integral do projeto, desde a construção até a
            operação, oferecendo a opção de transferência após a conclusão do
            mesmo.
          </p>
          <p>
            <strong>ROOFTOP SOLAR:</strong> Oferecemos uma solução que abrange
            todo o ciclo do projeto solar, desde o design até a operação,
            assegurando praticidade e eficácia.
          </p>
          <p>
            <strong>ENGENHARIA DO PROPRIETÁRIO:</strong> Compreendendo todos os
            estágios do projeto solar, desde o design até a operação, garantimos
            praticidade e eficácia, incluindo gestão de projetos. Nossa equipe
            monitora o cronograma e o orçamento para manter o contratante
            informado sobre o progresso do projeto.
          </p>
        </>
      ),
    },
    {
      titulo: "Projetos Executivos",
      imagem: "/3p-Energia/images/servicos/PROJETO EXECUTIVO.jpeg",
      texto:
        "Realizamos uma elaboração detalhada do projeto fotovoltaico, abrangendo aspectos civis, elétricos e hidráulicos.",
    },
    {
      titulo: "Mercado Livre",
      imagem: "/3p-Energia/images/servicos/MERCADO LIVRE DE ENERGIA.jpg",
      texto:
        "Facilitamos a migração de clientes do GRUPO A para o Mercado Livre de Energia. Conte com nossa experiência para uma transição tranquila e segura, proporcionando controle sobre os custos energéticos.",
    },
    {
      titulo: "Carregamento Veicular",
      imagem: "/3p-Energia/images/servicos/ELETROMOBILIDADE.jpg",
      texto:
        "Oferecemos esta solução para condomínios, empresas e shoppings, visando melhorar a infraestrutura de carregamento e promover a adoção de veículos elétricos, contribuindo para a sustentabilidade e mobilidade elétrica. ",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedServico, setSelectedServico] = useState(null);

  const openModal = (index) => {
    setSelectedServico(servicos[index]);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedServico(null);
    setShowModal(false);
  };
  return (
    <div className="servicos-cards">
      {servicos.map((servico, index) => (
        <div className="card" key={servico.titulo}>
          <div className="card-image" onClick={() => openModal(index)}>
            <img src={servico.imagem} alt={servico.titulo} />
            <div className="card-title">
              <h3>{servico.titulo}</h3>
            </div>
          </div>
          <div className="card-content">
            <p>{servico.texto}</p>
          </div>
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
                <p>{selectedServico.texto}</p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

export default ServicosCards;
