import "./Form.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Form() {
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
          setIsSent(true);
          setIsSending(false);
          setTimeout(() => setIsSent(false), 5000);
        },
        (error) => {
          setIsSending(false);
          alert("Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.");
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <h2>Solicite nosso portfólio completo!</h2>
      <div className="form-form">
        <div className="form-group-a">
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              placeholder="Digite seu nome"
              name="nome"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              name="email"
            />
          </div>
        </div>
        <div className="form-group-b">
          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              id="telefone"
              placeholder="Digite seu telefone"
              name="telefone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="empresa">Empresa</label>
            <input
              type="text"
              id="empresa"
              placeholder="Digite sua empresa"
              name="empresa"
            />
          </div>
        </div>
        <div className="form-group-c">
          <div className="form-group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              rows={4}
              placeholder="Digite sua mensagem"
              name="mensagem"
            ></textarea>
          </div>
        </div>
        <button type="submit" className="form-btn" disabled={isSending}>
          {isSending ? "Enviando..." : "Enviar"}
        </button>
        {isSent && <p className="success-message" style={{ color: 'white', fontWeight: 'bold', marginTop: '15px', textAlign: 'center' }}>Mensagem enviada com sucesso! Em breve retornaremos o contato.</p>}
      </div>
    </form>
  );
}

export default Form;
