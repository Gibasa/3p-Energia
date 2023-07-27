import "./PortfolioForm.css";
import { Form, Button } from "react-bootstrap";

function PortfolioForm() {
  return (

      <Form className="portfolio-form">
        <h2>Solicite nosso portfólio completo!</h2>
        <div className="portfolio-form-form">
        <Form.Group
          className="mb-3 portfolio-form-group"
          controlId="formBasicEmail"
        >
          <div className="portfolio-form-item">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="email" placeholder="Digite seu nome" />
          </div>
          <div className="portfolio-form-item">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Digite seu email" />
          </div>
          <div className="portfolio-form-item">
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="email" placeholder="Digite seu telefone" />
          </div>
          <div className="portfolio-form-item">
            <Form.Label>Empresa</Form.Label>
            <Form.Control type="email" placeholder="Digite sua empresa" />
          </div>
          <div className="portfolio-form-item">
            <Form.Label>Mensagem</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Digite sua mensagem"
            />
          </div>
        </Form.Group>
        <Button className="portfolio-btn" variant="primary" type="submit">
          Enviar
        </Button>
        </div>
      </Form>
  );
}

export default PortfolioForm;
