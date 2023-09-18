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
              Quando em 2017 decidi contratar um sistema fotovoltaico on Grid, a
              taxa Selic estava em torno de 8% ao ano e um estudo da 3P Energia
              para fornecimento do sistema, mostrava um retorno de no mínimo 20%
              ao ano, ou seja 250% do CBI, que já era um ótimo negócio. Escolhi
              a 3P pela credibilidade que tem no mercado o que se confirmou na
              prestação do serviço, feito de maneira muito profissional e
              inclusive com garantia de performance. Hoje com a taxa Selic de 2%
              ao ano minha rentabilidade passou a ser 1.000% do CBI, numa
              aplicação sem risco. Não conheço melhor investimento e ainda o
              planeta agradece.
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
              Uma vez contratada a instalação, fiquei muito satisfeito com o
              atendimento, a clareza e a rapidez com que tudo foi instalado. O
              prazo previsto desde o início do fechamento do negócio, até a
              finalização da instalação, com a aprovação pela Coelba,
              transcorreu perfeitamente e não tenho nenhuma reclamação a fazer,
              pelo contrário. O Sistema vem fazendo o seu “papel”, gerando
              energia e abatendo do meu consumo, nas minhas residências.
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
              A minha experiência com energia solar foi a partir da percepção de
              buscarmos uma economia financeira no nosso dia a dia aliado a
              termos, tb uma obrigação com o meio ambiente aonde vivemos. Daí
              veio a indicação por parte de amigos da 3P Energia. O atendimento
              da 3P Energia com muita clareza sobre o projeto, o orçamento, sua
              instalação e assistência após venda principalmente tem sido
              excelente. Até o momento estou muito satisfeito em ter escolhido a
              empresa 3P Energia.
            </p>
            <h5>Pedro Avelino</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
