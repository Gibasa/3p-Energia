import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Importe os estilos do Bootstrap
import "./Clientes.css";

function Clientes() {
  const numeros = Array.from({ length: 35 }, (v, i) => i + 1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 599);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imagensCarousel = numeros.map((n) => (
    <Carousel.Item key={n}>
      <img
        src={`./images/clientes/${n}.png`}
        alt={`Cliente e Parceiro ${n} da 3P Energia`}
        className="d-block w-100 h-100"
        loading="lazy"
      />
    </Carousel.Item>
  ));
  const imagens = numeros.map((n) => (
    <img
      key={n}
      src={`./images/clientes/${n}.png`}
      alt={`Cliente e Parceiro ${n} da 3P Energia`}
      className="d-block w-100"
    />
  ));

  return (
    <div className="clientes">
      <h2>Nossos Clientes:</h2>
      <div className="clientes-images">
        {isMobile ? <Carousel interval={2000}>{imagensCarousel}</Carousel> : imagens}
      </div>
    </div>
  );
}

export default Clientes;
