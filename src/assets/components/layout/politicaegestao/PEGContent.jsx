import "./PEGContent.css";
import Form from "../Form"
import { Accordion } from "react-bootstrap";

function PEGContent() {
  return (
    <div className="PEGcontent">
      <div className="PEGContent-1">
        <h2>Sistema de Gestão Integrada (SGI)</h2>
        <p>
          Como objetivo geral do SGI temos como proposta melhorar as condições
          de trabalho, facilitando e otimizando os processos de produção de
          serviços, com foco na Qualidade, Meio Ambiente, Segurança e Saúde,
          visando a satisfação das partes interessadas.
        </p>
      </div>
      <div className="PEGContent-2">
        <div className="PEGContent-2-p">
          <p>Sistema de Gestão de Qualidade</p>
        </div>
        <div className="PEGContent-2-p">
          <p>Padrão de Execução</p>
        </div>
        <div className="PEGContent-2-p">
          <p>Procedimento</p>
        </div>
        <div className="PEGContent-2-p">
          <p>Ficha de Verificação de Serviço</p>
        </div>
        <div className="PEGContent-2-p">
          <p>
            Utilização de ferramenta própria de automação para gestão de
            processos
          </p>
        </div>
      </div>
      <div className="PEGContent-3">
        <div className="PEGContent-3-text">
          <h2>Política de QSSMA</h2>
          <p>(Qualidade, Saúde, Segurança, Meio Ambiente)</p>
          <div className="PEGContent-3-accordion">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  A 3P Energia tem o cliente como foco e a melhoria contínua do
                  desempenho como filosofia de trabalho, objetivando:
                </Accordion.Header>
                <Accordion.Body>
                  <ol>
                    <li>
                      Atuar em nível nacional no projeto, fornecimento de
                      equipamentos e serviços de Instalações de sistemas de
                      geração de energia fotovoltaica, sendo um diferencial como
                      empresa prestadora de serviço;
                    </li>
                    <li>
                      Buscar continuamente a participação e o envolvimento dos
                      nossos colaboradores no desenvolvimento do Programas de
                      Qualidade, Segurança, Saúde e Meio Ambiente;
                    </li>
                    <li>
                      Prevenir lesões e doenças aos seres humanos e impactos
                      adversos ao meio ambiente, principalmente aqueles
                      relacionados aos agentes de risco mecânicos, ergonômicos,
                      e a geração de resíduos sólidos;
                    </li>
                    <li>
                      Cumprir a legislação e outros requisitos aplicáveis;
                    </li>
                  </ol>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="PEGContent-5">
        <div className="PEGContent-5-text">
          <h2>Responsabilidade Ambiental <br/> e Social (ESG)</h2>
          <p>
            A Política ESG da 3P Energia inclui princípios e procedimentos de
            negócios que alinham as decisões estratégicas e atividades
            operacionais com seus objetivos econômicos, ambientais e sociais.
          </p>
        </div>
      </div>
      {/* <div className="PEGContent-6">
        <h3>Programa 1k10k</h3>
        <p>A cada 1kWp vendido doamos 10kg de alimentos.</p>
      </div> */}
      <div className="PEGContent-7">
        <div className="PEGContent-7-accordion">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="2">
              <Accordion.Header className="accordion-button-peg accordion-button-ambiental">
                Ambiental
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  A 3P Energia prioriza as práticas de eficiência ambiental em
                  nossos empreendimentos e em nossa operação, que está presente
                  desde a escolha da área de atuação. Isso é evidenciado desde o
                  cumprimento das determinações das legislações ambientais em
                  esferas municipais e estaduais, até a busca pelo uso e consumo
                  dos recursos naturais sejam feitos de maneira sustentável.
                  Temos como indicador Ambiental o acompanhamento da redução de
                  emissão de carbono proveniente das instalações realizadas pela
                  3P.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="PEGContent-7-accordion">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="2">
              <Accordion.Header className="accordion-button-peg accordion-button-social">
                Social
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  A gestão dos colaboradores e fornecedores da 3P Energia é
                  aderente à todas as políticas e diretrizes das legislações e
                  normas brasileiras, sempre prezando pela saúde e bem-estar de
                  todos. Buscamos estabelecer relações de parceria com nossos
                  fornecedores, por isso temos processos de seleção e
                  desenvolvimento da cadeia de suprimentos. 
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div className="PEGContent-8">
        <h2>Programa de Performance por Pontos (PPP)</h2>
        <p>
          Temos muito orgulho de possuir o PPP (Programa de performance por
          pontos) para os nossos instaladores. Nesse programa monitoramos o
          número de instalações, potência, tipo de estrutura e avaliação do
          cliente. Eles vão ganhando pontos e evoluem de 0P pra 1P, depois pra
          2P e chegam ao nível máximo de 3P. Cada evolução é celebrada numa
          cerimônia onde eles ganham uma insígnia e mudam de cargos. Com uma
          política de cargos e salários bem definida premiamos as evoluções de
          maneira objetiva, garantindo a satisfação dos colaboradores e
          confiabilidade das nossas instalações.
        </p>
      </div>
      <div className="PEGContent-9">
        <h2>Programa de Gestão de Pessoas</h2>
      </div>
      <div className="PEGContent-10">
        <div className="PEGContent-10-conhecimento">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="2">
              <Accordion.Header>Conhecimento</Accordion.Header>
              <Accordion.Body>
                <p>
                  1. Elaboração de Relatórios Técnicos e Procedimentos
                  Executivos pela equipe técnica interna da empresa;
                  <br /> 2. Investimento e promoção de treinamentos para
                  impulsionar a disseminação do conhecimento em toda a
                  organização;
                  <br /> 3. Compartilhamento eficiente de arquivos e documentos
                  por meio dos sistemas de gestão de dados da empresa;
                  <br /> 4. Manutenção de um histórico detalhado dos índices de
                  produtividade de todas as instalações realizadas;
                  <br /> 5. Registro diário de atividades pelos líderes de
                  campo, compartilhado com o setor de planejamento para
                  retroalimentação, controle e acompanhamento.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="PEGContent-10-indicadores">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="2">
              <Accordion.Header>Indicadores</Accordion.Header>
              <Accordion.Body>
                <p>
                  1. Realização de reuniões mensais, ocorrendo a cada segunda
                  sexta-feira do mês, no período da tarde;
                  <br /> 2. Apresentação dos indicadores de performance de todos
                  os setores da empresa durante as reuniões;
                  <br /> 3. Participação ativa na reunião de sócios, cargos
                  gerenciais, colaboradores e estagiários;
                  <br /> 4. Incentivo à discussão e ao brainstorming entre os
                  participantes, visando melhorias gerais nos processos.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <Form/>
    </div>
  );
}

export default PEGContent;
