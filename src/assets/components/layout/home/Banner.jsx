import "./Banner.css"

function Banner() {

  const scrollToQuemSomos = () => {
    const quemSomosSection = document.getElementById('quemSomos');
    if (quemSomosSection) {
      quemSomosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="banner">
      <h2>
        Engenharia em <br /> Energia Solar.
      </h2>
      <div className="btn-sm home-btn" onClick={scrollToQuemSomos}>Conheça a 3P</div>
    </div>
  );
}

export default Banner;
