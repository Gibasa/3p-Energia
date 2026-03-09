import "./QuemSomos.css";

function QuemSomos() {
  return (
    <div className="quem-somos" id="quemsomos">
      <img src="./images/HOME QUEM SOMOS.png" alt="" loading="lazy" />
      <div className="text">
        <h2>Quem Somos</h2>
        <p>Propósito, Performance, Preservação</p>
        <p>
          Com 10 anos de atuação no setor de elétrico, a 3P Energia entrega soluções completas e integradas em geração, transmissão, distribuição e armazenamento de energia.
        </p>
        <p>
          {" "}
          Atuamos além da instalação, com engenharia aplicada, implantação, comissionamento, documentação técnica e suporte especializado para garantir desempenho, segurança e conformidade regulatória.
        </p>
        <p>
          {" "}
          Nosso foco é atender grandes corporações com projetos de infraestrutura de energia que geram resultados mensuráveis, como redução de custos operacionais, aumento de confiabilidade elétrica e avanço nas metas de sustentabilidade.
        </p>
        <p>
          {" "}
          A 3P Energia é parceira estratégica na transição energética, conectando eficiência técnica a benefícios reais para o negócio.
        </p>
      </div>
    </div>
  );
}

export default QuemSomos;
