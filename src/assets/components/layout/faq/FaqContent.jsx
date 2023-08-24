import "./FaqContent.css";
import { Accordion } from "react-bootstrap";

function FaqContent() {
  return (
    <div className="faq-content">
      <div className="faq-content-item">
        <Accordion defaultActiveKey="0" className="custom-accordion">
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Se acabar a luz da rua o meu sistema de energia solar continua
              funcionando?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Não. Se o seu sistema estiver conectado na rede elétrica da
                distribuidora o inversor irá desligar e isolar o seu sistema
                fotovoltaico por uma questão de segurança (Desta forma você
                evita causar um acidente ou estragar o seu sistema).
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="faq-content-item">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Após os 25 anos do sistema FV o que acontece? Ele perde totalmente
              a utilidade ou continuará funcionando com uma eficiência mais
              baixa?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Após os 25 anos ele continua funcionando. Provavelmente
                produzindo 20% menos energia do que no primeiro dia que você
                comprou (a vida útil dos painéis pode chegar a 50 anos se for
                bem-feito) Eles tem uma degradação natural onde eles perdem, em
                média, 0,7% de sua eficiência por ano. A garantia padrão dos
                bons fabricantes é de uma perda máxima de 20% em 25 anos.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="faq-content-item">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              A Manutenção do sistema de energia solar é cara?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Não, pelo contrário, muito barata. Basta passar um pano nas suas
                placas se elas ficarem muito sujas.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="faq-content-item">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Posso compensar meus créditos de energia em outro endereço?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Pode! Com a nova revisão 687 da Aneel você poderá compensar seus
                créditos de energia em outro endereço, sem que a conte de luz
                precise estar sob o mesmo CPF ou CNPJ que o da unidade geradora.
                Para isso, será preciso comprovar o vínculo entre os titulareso
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="faq-content-item">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Como o sistema de energia solar funciona a noite?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Ele não funciona de noite. Você produz energia durante o dia e
                se gerar mais do que está consumindo, esta energia vai para a
                rede da distribuidora que vira créditos de energia que serão
                usados para abater o seu consumo da noite
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="faq-content-item">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Eu consigo “zerar” a minha conta de luz com um sistema de energia
              solar fotovoltaica conectado na rede?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Não, infelizmente a maioria das Distribuidoras de energia irão
                lhe cobrar um mínimo para estar conectado na rede além disso tem
                a taxa de iluminação pública que é cobrado na conta também. Mas
                você consegue reduzir em até 90% o que você paga na conta de luz
                com o seu gerador solar.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="faq-content-item last-item">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Se até o fim do mês eu produzir mais energia do que eu consumi eu
              posso vender este excedente para a distribuidora?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Não, de acordo com a Resolução 482/12 da Aneel se você produzir
                mais energia do que consumiu esta energia excedente torna-se
                crédito para você e esses créditos tem validade de 60 meses
                contando do mês que foi criado. Ou seja, quando for calcular o
                tamanho do seu sistema fotovoltaico calcule para que ele não
                produza por ano mais energia do que você normalmente consome.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default FaqContent;
