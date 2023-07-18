import "./Mapa.css";
import { Button } from "react-bootstrap";

function Mapa() {
  return (
    <div className="map-text">
      <img src="/src/assets/img/mapa do brasil.png" alt="" />
      <div className="text-map">
        <p className="map-title">ATUAMOS EM TODO O BRASIL</p>
        <h2>Instalações Realizadas:</h2>
        <Button className="map-btn">Conheça nosso portfólio</Button>
        <p className="map-list">
          14 Estados <br/> +1.500 Instalações <br/> 40MWp Instalados <br/> +200 Colaboradores
        </p>
      </div>
    </div>
  );
}

export default Mapa;
