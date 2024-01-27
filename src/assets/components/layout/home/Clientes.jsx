import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Importe os estilos do Bootstrap
import "./Clientes.css";

function Clientes() {
  const numeros = Array.from({ length: 27 }, (v, i) => i + 1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 599);
    };

    // Adiciona um listener para redimensionamento de tela
    window.addEventListener("resize", handleResize);

    // Chama handleResize uma vez para definir o estado inicial
    handleResize();

    // Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imagensCarousel = numeros.map((n) => (
    <Carousel.Item key={n}>
      <img
        src={`/3p-Energia/images/clientes/${n}.png`}
        alt={`Imagem ${n}`}
        className="d-block w-100 h-100"
      />
    </Carousel.Item>
  ));
  const imagens = numeros.map((n) => (    
      <img
      key={n}
        src={`/3p-Energia/images/clientes/${n}.png`}
        alt={`Imagem ${n}`}
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
