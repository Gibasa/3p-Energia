import { useNavigate } from "react-router-dom";
import "./Mapa.css";


function Mapa() {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/portfolio");
  };


  return (
    <div className="map-text" id="atuacao">
      <img src="./images/mapa do brasil.png" alt="" loading="lazy" />
      <div className="text-map">
        <p className="map-title">ATUAMOS EM TODO O BRASIL</p>
        <h2>Instalações Realizadas:</h2>
        <div className="map-btn" onClick={goTo}> <p>Conheça nosso portfólio</p></div>
        <div className="map-list">
          <div className="map-list-item">
            <p className="map-list-title">14</p> <p className="map-list-text">Estados</p>
          </div>
          <div className="map-list-item">
            <p className="map-list-title">125MWp</p> <p className="map-list-text">Instalados</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mapa;
