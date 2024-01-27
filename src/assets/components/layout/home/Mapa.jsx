import { useNavigate } from "react-router-dom";
import "./Mapa.css";


function Mapa() {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/portfolio");
  };


  return (
    <div className="map-text">
      <img src="/3p-Energia/images/mapa do brasil.png" alt="" />
      <div className="text-map">
        <p className="map-title">ATUAMOS EM TODO O BRASIL</p>
        <h2>Instalações Realizadas:</h2>
        <div className="map-btn" onClick={goTo}> Conheça nosso portfólio</div>
        <div className="map-list">
          <div className="map-list-item">
            <p className="map-list-title">14</p> <p className="map-list-text">Estados</p>
          </div>
          <div className="map-list-item">
            <p className="map-list-title">+1.500</p> <p className="map-list-text">Instalações</p>
          </div>
          <div className="map-list-item">
            <p className="map-list-title">+60MWp</p> <p className="map-list-text">Instalados</p>
          </div>
          <div className="map-list-item">
            <p className="map-list-title">+200</p> <p className="map-list-text">Colaboradores</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mapa;
