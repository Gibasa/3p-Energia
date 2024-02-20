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
          p2: "2.520",
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
        {
          id: 8,
          image: "/3p-Energia/images/portfolio/epc/Caatinga 1.jpg",
          h3: "UFV CAATINGA I",
          p1: "3.366,18 kWp",
          p2: "6.264",
          p3: "20 de 125 kW"
        }, 
        {
          id: 9,
          image: "/3p-Energia/images/portfolio/epc/Caatinga II.jpg",
          h3: "UFV CAATINGA II",
          p1: "3.319,92 kWp",
          p2: "6.264",
          p3: "20 de 125 kW"
        }, 
        {
          id: 10,
          image: "/3p-Energia/images/portfolio/epc/MONDAÍ.jpeg",
          h3: "UFV MONDÁI I",
          p1: "1.404,20 kWp",
          p2: "2.380",
          p3: "25 de 200 kW"
        }, 
        {
          id: 11,
          image: "/3p-Energia/images/portfolio/epc/UFV LEM (1).jpeg",
          h3: "UFV LEM",
          p1: "2.999 kWp",
          p2: "8.820",
          p3: "15 de 160 kW"
        }, 
        {
          id: 12,
          image: "/3p-Energia/images/portfolio/epc/GUAIBA (8).jpeg",
          h3: "UFV GUAIBA I",
          p1: "840 kWp",
          p2: "1.428",
          p3: "3 de 200 kW"
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
            <div className="portfolio-epc-inversores">
              <p>{item.p3}</p> <p className="inversores">Inversores</p>
            </div>
          </div>
          </div>
      ))}
    </div>
  );
}

export default PortfolioEpc;
