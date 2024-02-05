import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHelmetSafety,
  faSolarPanel,
  faPeopleCarryBox,
  faScrewdriverWrench,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import "./Servicos.css";
import ServicosCards from "./ServicosCards";

function Servicos() {
  return (
    <div className="servicos">
      <h3>Nossos Serviços</h3>
      <div className="servicos-about">        
        <ServicosCards/>
      </div>
      <div className="servicos-container">
        <div className="servico top">
          <FontAwesomeIcon className="icon" icon={faBarsStaggered} />
          <div className="servico-text">
            Construção de Usinas de EPC Solar Fotovoltaica
          </div>
        </div>
        <div className="servico top">
          <FontAwesomeIcon className="icon" icon={faSolarPanel} />
          <div className="servico-text">
            Projetos de Usinas Solar Fotovoltaica
          </div>
        </div>
        <div className="servico top">
          <FontAwesomeIcon className="icon" icon={faPeopleCarryBox} />
          <div className="servico-text">
            Gerenciamento de Projetos de Usinas
          </div>
        </div>
        <div className="servico bot">
          <FontAwesomeIcon className="icon" icon={faScrewdriverWrench} />
          <div className="servico-text">Operação e Manutenção de Usinas</div>
        </div>
        <div className="servico bot">
          <FontAwesomeIcon className="icon" icon={faHelmetSafety} />
          <div className="servico-text">Engenharia do Proprietário</div>
        </div>
      </div>
    </div>
  );
}

export default Servicos;
