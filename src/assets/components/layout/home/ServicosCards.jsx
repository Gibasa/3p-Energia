import "./ServicosCards.css";
import { useState } from "react";

function ServicosCards() {
  const servicos = [
    {
      titulo: "Full EPC (Engenharia, Suprimentos e Construção)",
      imagem: "/3p-Energia/images/servicos/FULL EPC-BOS-BOT.png",
      texto:
        "Desenvolvimento completo do projeto solar, abrangendo engenharia, suprimentos e construção. Fornecemos todos os materiais, desde o planejamento até a entrega final, assegurando qualidade e eficiência em todas as etapas.",
    },
    {
      titulo: "BOS (Balance of System)",
      imagem: "/3p-Energia/images/3P.2023.12 - FOTO HOME.png",
      texto:
        "Oferecemos serviços especializados na Construção do Sistema Solar (BOS), realizando todos os trabalhos de instalação, desde a montagem dos painéis solares e inversores até as conexões elétricas, suportes, proteções, e outros componentes. ",
    },
    {
      titulo: "BOT (Build, Operate, Transfer)",
      imagem: "/3p-Energia/images/3P.2023.12 - FOTO HOME.png",
      texto:
        "Assumimos a responsabilidade total do seu projeto solar, desde a construção até a operação. Com a opção de transferência após a conclusão, garantimos uma transição suave.",
    },
    {
      titulo: "Turn Key",
      imagem: "/3p-Energia/images/servicos/TURN KEY.jpeg",
      texto:
        "Nossa solução Turn Key cobre todo o ciclo do projeto solar, desde o design até a operação. Garantimos praticidade e eficácia em todas as fases.",
    },
    {
      titulo: "Projeto Executivo",
      imagem: "/3p-Energia/images/servicos/PROJETO EXECUTIVO.jpeg",
      texto:
        "Oferecemos uma elaboração detalhada do projeto fotovoltaico, assegurando uma implementação suave e eficaz.",
    },
    {
      titulo: "Mercado Livre",
      imagem: "/3p-Energia/images/servicos/MERCADO LIVRE DE ENERGIA.jpg",
      texto:
        "Facilitamos a migração de clientes do GRUPO A para o Mercado Livre de Energia. Conte com nossa experiência para uma transição tranquila e segura, proporcionando controle sobre os custos energéticos.",
    },
    {
      titulo: "Eletromobilidade",
      imagem: "/3p-Energia/images/servicos/ELETROMOBILIDADE.jpg",
      texto:
        "Realizamos a instalação de carregadores para veículos elétricos e implementamos tecnologias de eletromobilidade, buscando constantemente inovações para assegurar elevados padrões em todas as áreas de nossa atuação. ",
    },
  ];

  const [cardStates, setCardStates] = useState(servicos.map(() => false));

  const handleCardHover = (index, isHovered) => {
    const newCardStates = [...cardStates];
    newCardStates[index] = isHovered;
    setCardStates(newCardStates);
  };

  return (
    <div className="servicos-cards">
      {servicos.map((servico, index) => (
        <div
          className="card"
          onMouseEnter={() => handleCardHover(index, true)}
          onMouseLeave={() => handleCardHover(index, false)}
          key={servico.titulo}
        >
          <div className="card-image">
            <img src={servico.imagem} alt={servico.titulo} />
            <div className={`card-title ${cardStates[index] ? "hidden" : ""}`}>
              <h3>{servico.titulo}</h3>
            </div>
          </div>
          <div className="card-content">
            <p>{servico.texto}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServicosCards;
