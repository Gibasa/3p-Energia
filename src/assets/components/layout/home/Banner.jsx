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
      <div className="banner-box">
        <h2>
          ENGENHARIA EM <br/> ENERGIA SOLAR
        </h2>
      </div>
        <div className="btn-sm home-btn" onClick={scrollToQuemSomos}>
          Conheça a 3P
        </div>
    </div>
  );
}

export default Banner;
