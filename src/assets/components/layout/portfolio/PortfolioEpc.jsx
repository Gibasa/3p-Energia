import "./PortfolioEpc.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSolarPanel,
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";

function PortfolioEpc() {
    const portfolioEpc = [
        {
          id: 1,
          image: "/3p-Energia/images/portfolio/epc/UFV PE II.png",
          h3: "UFV PE II",
          p1: "3.400 kWp",
          p2: "9.720",
          p3: "25 de 100 kW",
        },
        {
          id: 2,
          image: "/3p-Energia/images/portfolio/epc/UFV SANTA CRUZ DO SUL.jpg",
          h3: "UFV SANTA CRUZ DO SUL I",
          p1: "1.416,10 kWp",
          p2: "2.380",
          p3: "5 de 200 kW",
        },
        {
          id: 3,
          image: "/3p-Energia/images/portfolio/epc/UFV VENÂNCIO AIRES I.JPG",
          h3: "UFV VENÂNCIO AIRES I",
          p1: "1.416,10 kWp",
          p2: "2.380",
          p3: "5 de 200 kW",
        },
        {
          id: 4,
          image: "/3p-Energia/images/portfolio/epc/UFV VENÂNCIO AIRES III.JPG",
          h3: "UFV VENÂNCIO AIRES III",
          p1: "1.416,10 kWp",
          p2: "2.380",
          p3: "5 de 200 kW",
        },
        {
          id: 5,
          image: "/3p-Energia/images/portfolio/epc/UFV JOSÉ BONIFÁCIO.png",
          h3: "UFV JOSÉ BONIFÁCIO I",
          p1: "1.474,20 kWp",
          p2: "12.520",
          p3: "5 de 200 kW",
        },
        {
          id: 6,
          image: "/3p-Energia/images/portfolio/epc/ALTO DO PARANÁ.jpeg",
          h3: "UFV ALTO PARANÁ",
          p1: "1.404,20 kWp",
          p2: "2.380",
          p3: "5 de 200 kW",
        },
        {
          id: 7,
          image: "/3p-Energia/images/portfolio/epc/UFRB.jpeg",
          h3: "UFV UFRB CRUZ DAS ALMAS",
          p1: "486,72 kWp",
          p2: "1.352",
          p3: "2 de 100 kW + 2 de 175 kW"
        },        
      ];
  return (
    <div className="portfolio-epc">
      {Object.entries(portfolioEpc).map(([id, item]) => (
        <div className="portfolio-cards-item" key={id}>
          <img src={item.image} alt="" />
          <div className="portfolio-epc-cards-text">
            <h3>{item.h3}</h3>
            <div className="portfolio-cards-data">
              <FontAwesomeIcon icon={faSolarPanel} />
              <p>{item.p2}</p>
              <FontAwesomeIcon icon={faBoltLightning} />
              <p>{item.p1}</p>
            </div>
          </div>
          </div>
      ))}
    </div>
  );
}

export default PortfolioEpc;
