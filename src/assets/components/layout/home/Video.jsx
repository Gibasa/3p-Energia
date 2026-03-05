import { useNavigate } from "react-router-dom";
import "./Video.css";

function Video() {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/portfolio");
  };

  const iframe = (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/SeGRSjWz-FE?si=lv3NCUEPR2gNpjrC"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  );
  return (
    <div className="video">
      {iframe}
      <div className="video-text">
        <h2>EPC</h2>
        <p>Usina Solar PE II</p>
        <div className="video-btn" onClick={goTo}>
          <p>Conheça nosso portfólio</p>
        </div>
      </div>
    </div>
  );
}

export default Video;
