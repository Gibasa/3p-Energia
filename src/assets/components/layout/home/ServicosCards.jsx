import "./ServicosCards.css";
import { useState } from "react";
import { createPortal } from "react-dom";

function ServicosCards() {
  const servicos = [
    {
      titulo: "Subestação",
      imagem: "./images/servicos/SERVIÇOS - SUBESTAÇÃO.webp",
      texto: (
        <>
          <p>
            Desenvolvemos projetos de Subestações com uma abordagem integrada
            que cobre todas as fases do empreendimento. Atuamos desde o estudo
            de viabilidade até a entrega final, incluindo projetos
            eletromecânicos e civis, aquisição de materiais, construção e
            comissionamento. Nosso serviço contempla também sistemas auxiliares
            e suporte técnico inicial, assegurando o desempenho e a
            confiabilidade da infraestrutura energética dos nossos clientes.
          </p>
        </>
      ),
    },
    {
      titulo: "Linhas de Transmissão",
      imagem: "./images/servicos/SERVIÇOS - LINHA DE TRANSMISSÃO.png",
      texto: (
        <>
          <p>
            Oferecemos soluções completas para Linhas de Transmissão de Alta
            Tensão, abrangendo desde estudos técnicos, ambientais e fundiários
            até o comissionamento e energização. Nosso escopo inclui a
            elaboração de projetos, obtenção de licenças e autorizações, gestão
            de suprimentos, construção civil e montagem eletromecânica.
            Acompanhamos todas as etapas com foco em segurança, eficiência e
            conformidade regulatória, garantindo a entrega de sistemas robustos
            e prontos para operação.
          </p>
        </>
      ),
    },
    {
      titulo: "EPC: (Engenharia, Suprimentos e Construção)",
      imagem: "./images/servicos/FULL EPC-BOS-BOT.jpeg",
      texto: (
        <>
          <p>
            <strong>Soluções para Usinas Fotovoltaicas:</strong> Na categoria de
            Full EPC, oferecemos uma solução completa, abrangendo todos os
            aspectos da instalação de sistemas de energia solar. Desde o
            desenvolvimento dos projetos executivos a montagem dos painéis
            solares, inversores, conexões elétricas, suportes e proteções, até o
            fornecimento de todos os materiais necessários, nosso serviço inclui
            desde o planejamento até a entrega final. Garantimos qualidade em
            todas as etapas, proporcionando uma experiência tranquila e
            eficiente para nossos clientes.
          </p>
          <p>
            <strong>Modalidade BOS (Balance of System):</strong> Na modalidade
            BOS (Balance of System), nossa atenção é direcionada exclusivamente
            para a Construção. Realizamos todos os trabalhos de instalação,
            incluindo montagem de painéis solares, inversores, conexões
            elétricas, suportes e proteções, além de fornecer os materiais
            essenciais para o projeto. Priorizamos a eficiência e a excelência
            em cada detalhe.
          </p>
          <p>
            <strong>Modalidade BOT (Build, Operate, Transfer):</strong> Na
            modalidade BOT (Build, Operate, Transfer), assumimos a
            responsabilidade integral do projeto, desde a elaboração dos
            projetos executivos até a entrega para a operação. Realizamos toda a
            construção, comissionamento e operação assistida.
          </p>
        </>
      ),
    },
    {
      titulo: "O&M",
      imagem: "./images/servicos/O&M.jpg",
      texto: (
        <>
          <p>
            Nossa equipe de profissionais altamente qualificados está pronta
            para garantir que sua usina fotovoltaica opere com eficiência
            máxima. Nossos serviços de operação incluem monitoramento contínuo
            do desempenho da usina, gerenciamento de incidentes e otimização do
            rendimento da usina.
          </p>
          <p>
            Além disso, oferecemos serviços de manutenção preventiva e corretiva
            para garantir que sua usina fotovoltaica continue a produzir energia
            de maneira eficiente e confiável. Nossos serviços de manutenção
            incluem inspeções regulares, limpeza dos painéis solares, manutenção
            do inversor e substituição de componentes.
          </p>
        </>
      ),
    },
    {
      titulo: "Engenharia do Proprietário",
      imagem: "./images/servicos/ENGENHARIA DO PROPRIETARIO.jpg",
      texto: (
        <>
          <p>
            Compreendemos todos os estágios do projeto solar, desde o projeto
            executivo até a operação, e asseguramos praticidade e eficácia,
            incluindo uma gestão de projetos abrangente. Nossa equipe
            especializada monitora de perto o cronograma e o orçamento, mantendo
            o contratante continuamente informado sobre o progresso do projeto.
          </p>
          <p>
            Além disso, destacamos nosso compromisso com a agilidade nas
            análises e informações e na personalização. Cada projeto é tratado
            individualmente, levando em consideração as necessidades específicas
            de cada cliente. Essa abordagem personalizada não apenas garante a
            satisfação do cliente, mas também visa otimizar cada aspecto do
            projeto, priorizando a eficiência e a inovação.
          </p>
        </>
      ),
    },
    {
      titulo: "Mercado Livre",
      imagem: "./images/servicos/MERCADO LIVRE DE ENERGIA.jpg",
      texto: (
        <>
          {" "}
          <p>
            {" "}
            O Mercado Livre de Energia representa uma alternativa mais
            sustentável e econômica na aquisição de energia em comparação com o
            mercado tradicional. Facilitamos a migração de clientes do Grupo A
            para esta modalidade, oferecendo uma transição suave e segura. Nesse
            cenário, proporcionamos à sua empresa uma maior liberdade para
            negociar preços, prazos e a quantidade desejada de energia. Nos
            dedicamos a analisar as melhores opções para nossos clientes,
            buscando fornecedores que ofereçam as condições mais vantajosas.
            Isso garante uma gestão eficiente e econômica, sempre em
            conformidade com as regulamentações do setor.
          </p>
        </>
      ),
    },
    {
      titulo: "Rooftop Solar",
      imagem: "./images/servicos/ROOFTOP.jpeg",
      texto: (
        <>
          {" "}
          <p>
            {" "}
            Nossa solução Rooftop Solar proporciona um ciclo completo,
            abrangendo desde o projeto executivo, com definição do layout até a
            execução e manutenção contínua, assegurando praticidade e eficácia.
            Ao optar por uma instalação de energia solar em sua empresa, você
            desfruta de inúmeras vantagens, como economia financeira sólida,
            sustentabilidade e responsabilidade ambiental, além de incentivos
            fiscais e a valorização do imóvel. A independência energética,
            aliada à performance duradoura dos nossos sistemas, garante
            estabilidade no fornecimento de energia e uma transição suave para
            uma fonte de energia sustentável, reforçando o compromisso com o
            sucesso sustentável do seu negócio.{" "}
          </p>
        </>
      ),
    },

    {
      titulo: "Eletromobilidade",
      imagem: "./images/servicos/ELETROMOBILIDADE.jpg",
      texto: (
        <>
          <p>
            Sempre em busca de um amanhã mais sustentável e atentos às inovações
            do mercado, oferecemos soluções de carregamento veicular para
            condomínios, empresas e shoppings. Nosso objetivo é ampliar e
            otimizar a infraestrutura de carregamento de veículos elétricos,
            contribuindo significativamente para a sustentabilidade e mobilidade
            elétrica.
          </p>
          <p>
            Ao escolher nossas soluções, você não apenas investe na eficiência
            energética, mas também adere a uma experiência completa e inovadora.
          </p>
        </>
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
            <img src={servico.imagem} alt={servico.titulo} />
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
