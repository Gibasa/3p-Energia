import "./Contato.css";
import ContatoForm from "./ContatoForm";
import ContatoHeader from "./ContatoHeader";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

function Contato() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Sem dependências

  return (
    <div>
      <Helmet>
        <title>Fale Conosco - 3P Energia</title>
        <meta name="description" content="Entre em contato com os especialistas da 3P Energia para dúvidas, diagnósticos técnicos e orçamentos comerciais." />
      </Helmet>
      <ContatoHeader />
      <div className="contato">
        <ContatoForm />
        <div className="contato-text">
          <h3>Endereço</h3>
          <p>
            Edifício Civil Towers, Torre Nimbus - 14º andar, Rua Arthur de
            Azevêdo Machado, 1225 - Costa Azul, Salvador - BA, 41760-000
          </p>
          <h3>E-mail</h3>
          <p>contato@3penergia.com</p>
          <h3>Telefone</h3>
          <p>+55 (71) 3241-5211</p>
        </div>
      </div>
    </div>
  );
}

export default Contato;
