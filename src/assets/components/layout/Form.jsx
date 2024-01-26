import "./Form.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Form() {
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
        <button type="submit" className="form-btn">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default Form;
