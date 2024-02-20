import "./PortfolioDiversos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSolarPanel,
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";

function PortfolioDiversos() {
    const portfolioDiversos = [
        {
          id: 2,
          image: "/3p-Energia/images/portfolio/diversos/p2.png",
          h3: "Comerciais",
          p1: "90 Instalações",
          p2: "4.6 MWp",
        },
        {
          id: 3,
          image: "/3p-Energia/images/portfolio/diversos/p3.png",
          h3: "Residencial",
          p1: "900 Instalações",
          p2: "5.6 MWp",
        },
        {
          id: 4,
          image: "/3p-Energia/images/portfolio/diversos/p4.png",
          h3: "Colégios e Escolas",
          p1: "18 Instalações",
          p2: "1.4 MWp",
        },
        {
          id: 5,
          image: "/3p-Energia/images/portfolio/diversos/p5.png",
          h3: "Hospitais e Clínicas",
          p1: "13 Instalações",
          p2: "1.3 MWp",
        },        
        {
          id: 7,
          image: "/3p-Energia/images/portfolio/diversos/p7.png",
          h3: "Condomínios",
          p1: "19 Instalações",
          p2: "801,41 kWp",
        },
        {
          id: 8,
          image: "/3p-Energia/images/portfolio/diversos/p8.png",
          h3: "Obras Sociais I. Dulce",
          p1: "1 Instalação",
          p2: "192,96 MWp",
        },        
        {
          id: 10,
          image: "/3p-Energia/images/portfolio/diversos/p10.png",
          h3: "Industrial",
          p1: "7 Instalações",
          p2: "393,67 kWp",
        },        
      ];
  return (
    <div className="portfolio-diversos">
      {Object.entries(portfolioDiversos).map(([id, item]) => (
        <div className="portfolio-cards-item" key={id}>
          <img src={item.image} alt="" />
          <div className="portfolio-cards-text">
            <h3>{item.h3}</h3>
            <div className="portfolio-cards-data">
              <FontAwesomeIcon icon={faSolarPanel} />
              <p>{item.p1}</p>
              <FontAwesomeIcon icon={faBoltLightning} />
              <p>{item.p2}</p>
            </div>
          </div>
          </div>
      ))}
    </div>
  );
}

export default PortfolioDiversos;
