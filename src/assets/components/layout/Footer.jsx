import "./Footer.css";
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const yearnow = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    console.log(currentYear);
    return currentYear;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode enviar o conteúdo do email para onde desejar
    console.log("Email enviado:", email);
  };
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-logo">
          <img
            src="/3p-Energia/images/3P-ENERGIA-VERTICAL-COLORIDO.png"
            alt="3p logo"
          />
        </div>
        <div className="footer-3penergia">
          <h2>3P Energia</h2>
          <p>Política e Privacidade</p>
          <p>Termo de Uso</p>
        </div>
        <div className="footer-mapa">
          <h2>Mapa</h2>
          <p>Portfólio</p>
          <p>Política e Gestão</p>
          <p>Contato</p>
          <p>FAQ</p>
        </div>
        <div className="footer-last">
          <h2>Receba Novidades:</h2>
          <div className="footer-form">
            <form onSubmit={handleSubmit}>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <button type="submit">Enviar</button>
            </form>
          </div>
          <div className="footer-socials">
            <p>facebook</p>
            <p>instagram</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright {yearnow()}. 3P Energia - Todos os direitos reservados</p>
      </div>
    </div>
  );
}

export default Footer;
