import "./Contato.css";
import ContatoForm from "./ContatoForm";
import ContatoHeader from "./ContatoHeader";
import { useEffect } from "react";

function Contato() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Sem dependências
  
  return (
    <div>
      <ContatoHeader />
      <div className="contato">
        <ContatoForm />
        <div className="contato-text">
          <h3>Endereço</h3>
          <p>
            Edifício Civil Towers, Rua Arthur de Azevêdo Machado, 1225 - Costa
            Azul, Salvador - BA, 41760-000
          </p>
          <h3>E-mail</h3>
          <p>contato@3penergia.com.br</p>
          <h3>Telefone</h3>
          <p>+55 (71) 3241-5211</p>
        </div>
      </div>
    </div>
  );
}

export default Contato;
