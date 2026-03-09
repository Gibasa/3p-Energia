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
        <p>Usina Solar PE II</p>
      </div>

      <div className="video-container">
        <div className="video-box">{iframeOld}</div>
        <div className="video-box">{iframeNew}</div>
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
