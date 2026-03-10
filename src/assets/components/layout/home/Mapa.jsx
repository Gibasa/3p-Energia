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
          <span className="numero-destaque">125</span>
          <span className="unidade-destaque">MWp</span>
        </div>
        <p className="texto-destaque">
          de <strong>potência instalada</strong> e <strong>370</strong> colaboradores com
          expertise técnica, garantindo excelência na gestão e execução de
          obras em todo o país.
        </p>
        <div className="map-btn" onClick={goTo}>
          <p>Conheça nosso portfólio</p>
        </div>
      </div>
      <img src="./images/mapa do brasil.png" alt="Mapa do Brasil" loading="lazy" />
    </div>
  );
}

export default Mapa;
