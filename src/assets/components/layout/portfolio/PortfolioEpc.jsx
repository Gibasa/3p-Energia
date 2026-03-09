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
      image: "./images/portfolio/epc/UFV PE II.png",
      h3: "UFV PE II",
      p1: "3.400 kWp",
      p2: "9.720",
      p3: "25 de 100 kW"
    },
    {
      id: 2,
      image: "./images/portfolio/epc/Caatinga 1.jpg",
      h3: "UFV CAATINGA I",
      p1: "3.366,18 kWp",
      p2: "6.264",
      p3: "20 de 125 kW"
    },
    {
      id: 3,
      image: "./images/portfolio/epc/Caatinga II.jpg",
      h3: "UFV CAATINGA II",
      p1: "3.319,92 kWp",
      p2: "6.264",
      p3: "20 de 125 kW"
    },
    {
      id: 4,
      image: "./images/portfolio/epc/UFV LEM (1).jpeg",
      h3: "UFV LEM",
      p1: "2.999 kWp",
      p2: "8.820",
      p3: "15 de 160 kW"
    },
    {
      id: 5,
      image: "./images/portfolio/epc/UFV CAMPESTRE.jpeg",
      h3: "UFV CAMPESTRE I e II",
      p1: "2.751 kWp",
      p2: "4.200",
      p3: "10 de 200 kW"
    },
    {
      id: 6,
      image: "./images/portfolio/epc/UFV JOSÉ BONIFÁCIO.png",
      h3: "UFV JOSÉ BONIFÁCIO I",
      p1: "1.474,20 kWp",
      p2: "2.520",
      p3: "5 de 200 kW"
    },
    {
      id: 7,
      image: "./images/portfolio/epc/UFV SANTA CRUZ DO SUL.jpg",
      h3: "UFV SANTA CRUZ DO SUL I",
      p1: "1.416,10 kWp",
      p2: "2.380",
      p3: "5 de 200 kW"
    },
    {
      id: 8,
      image: "./images/portfolio/epc/UFV VENÂNCIO AIRES I.JPG",
      h3: "UFV VENÂNCIO AIRES I",
      p1: "1.416,10 kWp",
      p2: "2.380",
      p3: "5 de 200 kW"
    },
    {
      id: 9,
      image: "./images/portfolio/epc/UFV VENÂNCIO AIRES III.JPG",
      h3: "UFV VENÂNCIO AIRES III",
      p1: "1.416,10 kWp",
      p2: "2.380",
      p3: "5 de 200 kW"
    },
    {
      id: 10,
      image: "./images/portfolio/epc/ALTO DO PARANÁ.jpeg",
      h3: "UFV ALTO PARANÁ",
      p1: "1.404,20 kWp",
      p2: "2.380",
      p3: "5 de 200 kW"
    },
    {
      id: 11,
      image: "./images/portfolio/epc/MONDAÍ.jpeg",
      h3: "UFV MONDÁI I",
      p1: "1.404,20 kWp",
      p2: "2.380",
      p3: "25 de 200 kW"
    },
    {
      id: 12,
      image: "./images/portfolio/epc/GUAIBA (8).jpeg",
      h3: "UFV GUAIBA I",
      p1: "840 kWp",
      p2: "1.428",
      p3: "3 de 200 kW"
    },
    {
      id: 13,
      image: "./images/portfolio/epc/UFRB.jpeg",
      h3: "UFV UFRB CRUZ DAS ALMAS",
      p1: "486,72 kWp",
      p2: "1.352",
      p3: "2 de 100 kW + 2 de 175 kW"
    },
    {
      id: 14,
      image: "./images/portfolio/epc/UFV JUAZEIRO.jpg",
      h3: "UFV JUAZEIRO",
      p1: "7.021,00 kWp",
      p2: "11.900",
      p3: "25 de 200 kW"
    },
    {
      id: 15,
      image: "./images/portfolio/epc/UFV HORIZONTE.jpg",
      h3: "UFV HORIZONTE",
      p1: "2.702,70 kWp",
      p2: "5.916",
      p3: "16 de 125 kW"
    },
    {
      id: 16,
      image: "./images/portfolio/epc/UFV FRANCISCO SANTOS.JPG",
      h3: "UFV FRANCISCO SANTOS I e II",
      p1: "2.644,8 kWp",
      p2: "4.640",
      p3: "8 de 250 kW"
    },
    {
      id: 17,
      image: "./images/portfolio/epc/UFV TEOFILANDIA.jpeg",
      h3: "UFV TEOFILANDIA",
      p1: "2.626,56 kWp",
      p2: "4.864",
      p3: "10 de 200 kW"
    },
    {
      id: 18,
      image: "./images/portfolio/epc/SOBRADINHO.jpg",
      h3: "UFV SOBRADINHO",
      p1: "3.939,8 kWp",
      p2: "7.296",
      p3: "15 de 200 kW"
    },
    {
      id: 19,
      image: "./images/portfolio/epc/UFV Petrolina.jpg",
      h3: "UFV PETROLINA",
      p1: "3.306,00 kWp",
      p2: "5.568",
      p3: "10 de 250 kW"
    },
    {
      id: 20,
      image: "./images/portfolio/epc/JAGUARIBE I E II.jpeg",
      h3: "UFV JAGUARIBE I & II",
      p1: "6.804,00 kWp",
      p2: "9.720",
      p3: "20 de 250 kW"
    },
    {
      id: 21,
      image: "./images/portfolio/epc/SURUBIM.jpeg",
      h3: "UFV SURUBIM",
      p1: "3.335,00 kWp",
      p2: "5.800",
      p3: "10 de 250 kW"
    },
    {
      id: 22,
      image: "./images/portfolio/epc/CARACARÁ.png",
      h3: "UFV CARACARÁ",
      p1: "3.301,20 kWp",
      p2: "5.040",
      p3: "12 de 200 kW"
    },
    {
      id: 23,
      image: "./images/portfolio/epc/CAATINGA VI.jpeg",
      h3: "UFV CAATINGA VI",
      p1: "3.219,00 kWp",
      p2: "5.800",
      p3: "10 de 250 kW"
    },
    {
      id: 24,
      image: "./images/portfolio/epc/CAATINGA 7.jpeg",
      h3: "UFV CAATINGA VII",
      p1: "3.220,00 kWp",
      p2: "5.600",
      p3: "10 de 250 kW"
    },
    {
      id: 25,
      image: "./images/portfolio/epc/Lem.jpeg",
      h3: "UFV LEM",
      p1: "3.335,00 kWp",
      p2: "5.800",
      p3: "10 de 250 kW"
    },

  ];
  return (
    <div className="portfolio-epc">
      {Object.entries(portfolioEpc).map(([id, item]) => (
        <div className="portfolio-cards-item" key={id}>
          <img src={item.image} alt="" loading="lazy" />
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
