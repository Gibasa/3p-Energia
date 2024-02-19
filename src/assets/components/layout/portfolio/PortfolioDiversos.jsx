import "./PortfolioDiversos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSolarPanel,
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";

function PortfolioDiversos() {
    const portfolioDiversos = [
        {
          id: 1,
          image: "/3p-Energia/images/portfolio/diversos/p1.png",
          h3: "Projeto Bônus Solar",
          p1: "614 Instalações",
          p2: "2.521,86 MWp",
        },
        {
          id: 2,
          image: "/3p-Energia/images/portfolio/diversos/p2.png",
          h3: "Comerciais",
          p1: "56 Instalações",
          p2: "1.704,85 MWp",
        },
        {
          id: 3,
          image: "/3p-Energia/images/portfolio/diversos/p3.png",
          h3: "Residenciais",
          p1: "163 Instalações",
          p2: "1.569,29 MWp",
        },
        {
          id: 4,
          image: "/3p-Energia/images/portfolio/diversos/p4.png",
          h3: "Escolas",
          p1: "13 Instalações",
          p2: "1.110,35 MWp",
        },
        {
          id: 5,
          image: "/3p-Energia/images/portfolio/diversos/p5.png",
          h3: "Hospitais e Clínicas",
          p1: "5 Instalações",
          p2: "748,70 MWp",
        },
        {
          id: 6,
          image: "/3p-Energia/images/portfolio/diversos/p6.png",
          h3: "Usinas de Micro Geração",
          p1: "9 Instalações",
          p2: "480,55 MWp",
        },
        {
          id: 7,
          image: "/3p-Energia/images/portfolio/diversos/p7.png",
          h3: "Cond. Residenciais",
          p1: "7 Instalações",
          p2: "393,02 MWp",
        },
        {
          id: 8,
          image: "/3p-Energia/images/portfolio/diversos/p8.png",
          h3: "Obras Sociais I. Dulce",
          p1: "1 Instalação",
          p2: "192,96 MWp",
        },
        {
          id: 9,
          image: "/3p-Energia/images/portfolio/diversos/p9.jpg",
          h3: "Supermercados",
          p1: "4 Instalações",
          p2: "183,78 MWp",
        },
        {
          id: 10,
          image: "/3p-Energia/images/portfolio/diversos/p10.png",
          h3: "Industrias",
          p1: "3 Instalações",
          p2: "70,50 MWp",
        },
        {
          id: 11,
          image: "/3p-Energia/images/portfolio/diversos/p11.png",
          h3: "Cond. Comerciais",
          p1: "2 Instalações",
          p2: "14,20 MWp",
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
