import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

function Footer() {
  const yearnow = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    console.log(currentYear);
    return currentYear;
  };
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/contato");
  };
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-logo">
          <img
            src="/3p-Energia/images/3p logo branco e laranja.png"
            alt="3p logo"
          />
        </div>
        <div className="footer-btns">
          <div className="footer-btns-item" onClick={goTo}>
            <FontAwesomeIcon icon={faEnvelope} className="footer-btns-icon" />
            SOLICITE UM ORÇAMENTO{" "}
          </div>
        </div>
        <div className="footer-contact">
          <div className="footer-map">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<iframe width="325" height="150" src="https://www.openstreetmap.org/export/embed.html?bbox=-38.4506168961525%2C-12.9903821712143%2C-38.447186350822456%2C-12.988011656068782&amp;layer=mapnik" style="border: none"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=19/-12.98920/-38.44890" target="_blank">Ver mapa maior</a></small>',
              }}
            ></div>
          </div>
          <div className="footer-socials-phone">
            <div className="footer-socials">
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
            <div className="footer-phone-adress">
              <h3 className="footer-phone">+55 (71) 3241-5211</h3>
              <h3 className="footer-adress">
                Edifício Civil Towers, Torre Nimbus - 14º andar, Rua Arthur de
                Azevêdo Machado, 1225 - Costa Azul, Salvador - BA, 41760-000
              </h3>
            </div>
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
