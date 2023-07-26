import "./Contato.css";
import ContatoForm from "./ContatoForm";
import ContatoHeader from "./ContatoHeader";

function Contato() {
  return (
    <div>
      <ContatoHeader />
      <div className="contato">
        <ContatoForm />
        <div className="contato-text">
          <h2>Nossos dados:</h2>
          <h3>Endereço</h3>
          <p>
            Av. Oceânica, n° 3638, Edf. Empresarial Qualidados, sala 308 Rio
            Vermelho Salvador - Bahia - Brasil.
          </p>
          <h3>E-mail</h3>
          <p>comercial@3penergia.com.br</p>
          <h3>Telefone</h3>
          <p>+55 (71) 3241-5211</p>
          <p>+55 (71) 9 8145-8863</p>
        </div>
      </div>
    </div>
  );
}

export default Contato;
