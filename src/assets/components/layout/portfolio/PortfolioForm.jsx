import "./PortfolioForm.css";
import { Button, Form } from "react-bootstrap";

function PortfolioForm() {
  return (

      <Form className="portfolio-form" action="mailto:gibasa@gmail.com" method="POST" encType="text/plain">
        <h2>Solicite nosso portfólio completo!</h2>
        <div className="portfolio-form-form">
        <Form.Group
          className="mb-3 portfolio-form-group"
          controlId="formBasicEmail"
        >
          <div className="portfolio-form-item">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Digite seu nome" />
          </div>
          <div className="portfolio-form-item">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Digite seu email" />
          </div>
          <div className="portfolio-form-item">
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="text" placeholder="Digite seu telefone" />
          </div>
          <div className="portfolio-form-item">
            <Form.Label>Empresa</Form.Label>
            <Form.Control type="text" placeholder="Digite sua empresa" />
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
        <Button variant="primary" className="portfolio-btn" type="submit">
          Enviar
        </Button>
        </div>
      </Form>
  );
}

export default PortfolioForm;
