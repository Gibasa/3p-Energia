import { useNavigate } from "react-router-dom";

import "./Mapa.css";

function Mapa() {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/portfolio");
  };

  return (
    <div className="map-text" id="atuacao">
      <div className="text-map">

        <div className="destaque-potencia">
          <img src="./images/125 completo.png" alt="125 MWp" className="destaque-img" />
        </div>
        <p className="texto-destaque">
          de potência instalada, garantindo excelência na gestão e execução de obras em todo o país.
        </p>
        <div className="map-btn" onClick={goTo}>
          <p>Conheça nosso portfólio</p>
        </div>
      </div>
      <img src="./images/mapa do brasil.webp" alt="Mapa do Brasil" loading="lazy" className="map-image" />
    </div>
  );
}

export default Mapa;
