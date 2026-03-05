import "./Servicos.css";
import ServicosCards from "./ServicosCards";

function Servicos() {
  return (
    <div className="servicos">
      <h3>Nossos Serviços</h3>
      <div className="servicos-about">        
        <ServicosCards/>
      </div>
    </div>
  );
}

export default Servicos;
