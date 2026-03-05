import "./Banner.css";

function Banner() {
  const scrollToQuemSomos = () => {
    const quemSomosSection = document.getElementById("quemSomos");
    if (quemSomosSection) {
      quemSomosSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="banner">
      <video muted autoPlay loop poster="./images/3P.2023.12 - FOTO HOME.png" >
      <source src="./images/banner-video.mp4" type="video/mp4"/>
    </video>
      <div className="banner-box">
        <h2>
          ENGENHARIA EM <br/> ENERGIA
        </h2>
      </div>
        <div className="btn-sm home-btn" onClick={scrollToQuemSomos}>
          <p>Conheça a 3P</p>
        </div>
    </div>
  );
}

export default Banner;
