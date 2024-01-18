import { Carousel } from "react-bootstrap";
import "./Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function CarouselComponent() {
  return (
    <div className="carousel-container">
      <Carousel data-bs-theme="dark">
        {/* <Carousel.Item>
          <img
            className="d-block w-100 green-filter"
            src="https://via.placeholder.com/800x300?text=&bg=f5f5f5"
            alt="First slide"
          />
          <Carousel.Caption className="text-center">
          <FontAwesomeIcon className="carousel-icon" icon={faQuoteLeft} />
            <p>
              Tive o prazer de conhecer a 3P Energia através da indicação de um
              amigo. Desde o primeiro contato eles foram sempre muito atenciosos
              e transparentes, nos colocando de forma muito clara como
              funcionava todo esse mercado e os principais benefícios dessa
              maravilha que se chama Energia Solar. Busquei o serviço como uma
              forma de investimento, considerando que o retorno proposto em
              economia de energia seria muito bom se comparado a qualquer
              aplicação em Renda Fixa do mercado. Para minha surpresa a geração
              de Energia tem superado as expectativas da proposta inicial, o que
              aumenta ainda mais minha satisfação com relação ao retorno
              financeiro do projeto. O suporte da 3P tem sido excelente, se
              colocando sempre a disposição e estando com a equipe a postos para
              qualquer necessidade.
            </p>
            <h5>Filipe Moura Vieira</h5>
          </Carousel.Caption>
        </Carousel.Item> */}
        <Carousel.Item>
          <img
            className="d-block w-100 green-filter"
            src="https://via.placeholder.com/800x300?text=&bg=eee"
            alt="Second slide"
          />
          <Carousel.Caption className="text-center">
            <FontAwesomeIcon className="carousel-icon" icon={faQuoteLeft} />
            <p>
              Escolhi a 3P pela credibilidade que tem no mercado, o que se
              confirmou na prestação do serviço, feito de maneira muito
              profissional e inclusive com garantia de performance. Não conheço
              melhor investimento e, além disso, o planeta agradece.
            </p>
            <h5>Barcino Esteve</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 green-filter"
            src="https://via.placeholder.com/800x300?text=&bg=e5e5e5"
            alt="Third slide"
          />
          <Carousel.Caption className="text-center">
            <FontAwesomeIcon className="carousel-icon" icon={faQuoteLeft} />
            <div className="carousel-text">
              <p>
                Fiquei muito satisfeito com o atendimento, a clareza e a rapidez
                com que tudo foi instalado. O prazo previsto desde o início do
                fechamento do negócio, até a finalização da instalação, com a
                aprovação pela Coelba, transcorreu perfeitamente.
              </p>
              <h5>Attilio Jacobucci Junior</h5>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 green-filter"
            src="https://via.placeholder.com/800x300?text=&bg=e5e5e5"
            alt="Third slide"
          />
          <Carousel.Caption className="text-center">
            <FontAwesomeIcon className="carousel-icon" icon={faQuoteLeft} />
            <p>
              Minha motivação foi a economia de custos e a sustentabilidade. O
              atendimento da 3P Energia com muita clareza sobre o projeto, o
              orçamento, instalação e a assistência pós-venda tem sido
              excelente.
            </p>
            <h5>Pedro Avelino</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
