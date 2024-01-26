import "./ContatoForm.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContatoForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
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
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <form className="contato-form" ref={form} onSubmit={sendEmail}>
      <div className="contato-form-group">
        <div className="contato-form-item">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" placeholder="Digite seu nome" name="nome"/>
        </div>
        <div className="contato-form-item">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="Digite seu email" name="email"/>
        </div>
        <div className="contato-form-item">
          <label htmlFor="telefone">Telefone</label>
          <input type="tel" id="telefone" placeholder="Digite seu telefone" name="telefone"/>
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
      <button className="contato-btn">Enviar</button>
    </form>
  );
}

export default ContatoForm;
