import { useNavigate } from "react-router-dom";
import "./Banner.css";

function Banner() {
  const navigate = useNavigate();

  const handleContatoClick = () => {
    navigate("/contato");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="banner">
      <video muted autoPlay loop poster="./images/3P.2023.12 - FOTO HOME.png" >
        {/* TODO: Substituir vídeo (ainda em produção) */}
        <source src="./images/banner-video.webm" type="video/webm" />
        <source src="./images/banner-video.mp4" type="video/mp4" />
      </video>
      <div className="banner-box">
        <h1>
          Geração, transmissão, distribuição <br />e armazenamento de energia
        </h1>
        <div className="btn-sm home-btn" onClick={handleContatoClick}>
          <p>Solicite um diagnóstico técnico<br /> da sua operação</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
