import "./ContatoForm.css"
import { Form, Button } from "react-bootstrap"

function ContatoForm(){

    return(
        <Form className="contato-form">
        <Form.Group
          className="mb-3 contato-form-group"
          controlId="formBasicEmail"
        >
          <div className="contato-form-item">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="email" placeholder="Digite seu nome" />
          </div>
          <div className="contato-form-item">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Digite seu email" />
          </div>
          <div className="contato-form-item">
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="email" placeholder="Digite seu telefone" />
          </div>
          <div className="contato-form-item">
            <Form.Label>Mensagem</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Digite sua mensagem"
            />
          </div>
        </Form.Group>
        <Button className="portfolio-btn" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default ContatoForm