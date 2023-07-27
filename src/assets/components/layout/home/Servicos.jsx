import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHelmetSafety,
  faSolarPanel,
  faPeopleCarryBox,
  faScrewdriverWrench,
  faBarsStaggered,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import "./Servicos.css";

function Servicos() {
  return (
    <div className="servicos">
      <h3>Serviços</h3>
      <p>A 3P Energia é especialista em Energia Solar Fotovoltaica, com experiência em Micro e Miniusinas em telhados e solo, e em instalação de sistemas com trackers.</p>
      <div className="servicos-container">
        <div className="servico top">
          <FontAwesomeIcon className="icon" icon={faEye} />
          <div className="servico-text">Estudos de Viabilidade</div>
        </div>
        <div className="servico top">
          <FontAwesomeIcon className="icon" icon={faHelmetSafety} />
          <div className="servico-text">Engenharia do Proprietário</div>
        </div>
        <div className="servico top">
          <FontAwesomeIcon className="icon" icon={faSolarPanel} />
          <div className="servico-text">
            Projetos de Usinas de Minigeração Solar Fotovoltaica
          </div>
        </div>
        <div className="servico top">
          <FontAwesomeIcon className="icon" icon={faPeopleCarryBox} />
          <div className="servico-text">
            Gerenciamento de Projetos de Geração Distribuída
          </div>
        </div>
        <div className="servico bot">
          <FontAwesomeIcon className="icon" icon={faScrewdriverWrench} />
          <div className="servico-text">Operação e Manutenção de Usinas</div>
        </div>
        <div className="servico bot">
          <FontAwesomeIcon className="icon" icon={faBarsStaggered} />
          <div className="servico-text">
            Construção de Usinas de Minigeração Solar Fotovoltaica
          </div>
        </div>
        <div className="servico bot">
          <FontAwesomeIcon className="icon" icon={faLockOpen} />
          <div className="servico-text">Consultoria para mercado livre</div>
        </div>
      </div>
    </div>
  );
}

export default Servicos;
