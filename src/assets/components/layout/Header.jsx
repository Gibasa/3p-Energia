import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import "./Header.css"

function Header() {
  return (
    <Navbar expand="lg" className="header-bg">
      <Container className="header-container">
        <Navbar.Brand className="header-logo order-lg-first" href="#home">
          <img
            src="/src/assets/img/REDESIGN 3P ENERGIA BRANCO.png"
            height="80"
            className="d-inline-block align-top"
            alt="3P logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="header-toggle" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="mx-auto header-links">
            <Nav.Link className="/" href="/">Home</Nav.Link>
            <Nav.Link className="/portfolio" href="/portfolio">Portfólio</Nav.Link>            
            <Nav.Link className="/politicaegestao" href="/politicaegestao">Política e Gestão</Nav.Link>            
            <Nav.Link className="/contato" href="/contato">Contato</Nav.Link>  
          </Nav>
            <Button className="header-btn ms-auto">Conheça a 3P</Button>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
