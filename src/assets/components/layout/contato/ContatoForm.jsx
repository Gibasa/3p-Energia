import "./ContatoForm.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContatoForm() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "formulario",
        "template_1ij40gp",
        form.current,
        "A32d2n7NNoYhUf1IS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setIsSending(false);
          setTimeout(() => setIsSent(false), 5000);
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
          alert("Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.");
        }
      );
    e.target.reset();
  };
  return (
    <form className="contato-form" ref={form} onSubmit={sendEmail}>
      <div className="contato-form-group">
        <div className="contato-form-item">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" placeholder="Digite seu nome" name="nome" />
        </div>
        <div className="contato-form-item">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="Digite seu email" name="email" />
        </div>
        <div className="contato-form-item">
          <label htmlFor="telefone">Telefone</label>
          <input type="tel" id="telefone" placeholder="Digite seu telefone" name="telefone" />
        </div>
        <div className="contato-form-item">
          <label htmlFor="servico">Serviço de Interesse</label>
          <select id="servico" name="servico" defaultValue="" required>
            <option value="" disabled>Selecione um serviço</option>
            <option value="Energia Solar">Energia Solar</option>
            <option value="BESS">BESS (Armazenamento de Energia)</option>
            <option value="Alta Tensão">Alta Tensão</option>
            <option value="Mercado Livre">Mercado Livre de Energia</option>
            <option value="O&M">O&M (Operação e Manutenção)</option>
            <option value="Eletromobilidade">Eletromobilidade</option>
            <option value="Cooperada Coelba">Cooperada Coelba</option>
          </select>
        </div>
        <div className="contato-form-item">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            rows={4}
            placeholder="Digite sua mensagem"
            name="mensagem"
          ></textarea>
        </div>
      </div>
      <button className="contato-btn" disabled={isSending}>
        {isSending ? "Enviando..." : "Enviar"}
      </button>
      {isSent && <p className="success-message" style={{ color: '#047060', fontWeight: 'bold', marginTop: '15px', textAlign: 'center' }}>Mensagem enviada com sucesso! Em breve retornaremos o contato.</p>}
    </form>
  );
}

export default ContatoForm;
