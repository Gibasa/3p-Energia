import { useNavigate } from "react-router-dom";
import "./Video.css";

function Video() {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/portfolio");
  };

  const iframeOld = (
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/SeGRSjWz-FE?si=lv3NCUEPR2gNpjrC"
      title="YouTube video player 1"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );

  const iframeNew = (
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/MyfmW5xC7JI"
      title="YouTube video player 2"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );

  return (
    <div className="video-section">
      <div className="video-header">
        <h2>EPC</h2>
      </div>

      <div className="video-container">
        <div className="video-box">
          <div className="video-info">
            <h3>UFV PE II</h3>
            <p>EPC BOS</p>
            <p>3.400 kWp de Potência Instalada</p>
          </div>
          {iframeOld}
        </div>
        <div className="video-box">
          <div className="video-info">
            <h3>SISTEMA BESS CT</h3>
            <p>215 kWh de Capacidade de Armazenamento</p>
          </div>
          {iframeNew}
        </div>
      </div>

      <div className="video-btn-container">
        <div className="video-btn" onClick={goTo}>
          <p>Conheça nosso portfólio</p>
        </div>
      </div>
    </div>
  );
}

export default Video;
