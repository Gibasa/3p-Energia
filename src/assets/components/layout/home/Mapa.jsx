import "./Mapa.css";
import { Button } from "react-bootstrap";

function Mapa() {
  return (
    <div className="map-text">
      <img src="/images/mapa do brasil.png" alt="" />
      <div className="text-map">
        <p className="map-title">ATUAMOS EM TODO O BRASIL</p>
        <h2>Instalações Realizadas:</h2>
        <Button className="map-btn">Conheça nosso portfólio</Button>
        <div className="map-list">
          <div className="map-list-item">
            <p className="map-list-title">14</p> <p className="map-list-text">Estados</p>
          </div>
          <div className="map-list-item">
            <p className="map-list-title">+1.500</p> <p className="map-list-text">Instalações</p>
          </div>
          <div className="map-list-item">
            <p className="map-list-title">40MWp</p> <p className="map-list-text">Instalados</p>
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
