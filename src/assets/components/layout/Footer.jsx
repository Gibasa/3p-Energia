import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Footer() {
  const yearnow = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    console.log(currentYear);
    return currentYear;
  };
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-logo">
          <img
            src="/3p-Energia/images/REDESIGN 3P ENERGIA BRANCO.png"
            alt="3p logo"
          />
        </div>
        {/* <div className="footer-btns">
          <div className="footer-btns-item">FALE CONOSCO</div>
          <div className="footer-btns-item">FAÇA SEU PROJETO AGORA</div>
        </div> */}
        <div className="footer-socials">
        <a
            href="https://www.facebook.com/3penergiasolar/?locale=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="footer-icon" />
          </a>
          <a
            href="https://www.facebook.com/3penergiasolar/?locale=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
          </a>
          <a
            href="https://www.facebook.com/3penergiasolar/?locale=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
          </a>
          <a
            href="https://www.instagram.com/3p.energia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/3p-energia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright {yearnow()}. 3P Energia - Todos os direitos reservados</p>
      </div>
    </div>
  );
}

export default Footer;
