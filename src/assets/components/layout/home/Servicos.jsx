import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHelmetSafety,
  faSolarPanel,
  faPeopleCarryBox,
  faScrewdriverWrench,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import "./Servicos.css";

function Servicos() {
  return (
    <div className="servicos">
      <h3>Serviços</h3>
      <div className="servicos-about">
        <p>
          A 3P Energia se destaca na execução de projetos fotovoltaicos em
          diversas modalidades, oferecendo soluções abrangentes para atender às
          necessidades do mercado. Nossos serviços incluem:
        </p>
        <div className="servicos-about-points">
          <p>
            ● Full EPC (Engenharia, Suprimentos e Construção): Desenvolvimento
            completo do projeto solar, desde o planejamento até a entrega final,
            assegurando qualidade e eficiência em todas as etapas.
          </p>
          <p>
            ● Turn Key 360º: Solução cobrindo todo o ciclo do projeto solar,
            desde o design até a operação, garantindo praticidade e eficácia.
          </p>
          <p>
            ● BOS (Balance of System): Integração de todos os componentes do
            sistema fotovoltaico, além dos painéis solares, para uma
            implementação eficiente.
          </p>
          <p>
            ● BOT (Build, Operate, Transfer): Assumimos a responsabilidade total
            do projeto, da construção à operação, oferecendo a opção de
            transferência após a conclusão.
          </p>
          <p>
            ● Projeto Executivo: Elaboração detalhada do projeto fotovoltaico,
            assegurando uma implementação suave e eficaz.
          </p>
        </div>
        <p>
          Adicionalmente, fornecemos serviços de O&M (Operação e Manutenção)
          para usinas, visando garantir a máxima eficiência e longevidade na
          produção de energia solar.
        </p>
        <p>
          No âmbito do Mercado Livre, facilitamos a migração de clientes do
          GRUPO A para o Mercado Livre de Energia. Conte com nossa experiência
          para uma transição tranquila e segura, proporcionando controle sobre
          os custos energéticos.
        </p>
        <p>
          Com mais de oito anos de expertise, nosso compromisso é oferecer
          soluções energéticas inovadoras e sustentáveis, alinhadas aos mais
          elevados padrões de qualidade e eficiência
        </p>
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
