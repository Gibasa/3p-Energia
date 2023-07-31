import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
    <Navbar expand="lg" className="header-bg">
      <Container className="header-container">
        <Navbar.Brand className="header-logo order-lg-first" as={Link} to="/">
          <img
            src="/3p-Energia/images/REDESIGN 3P ENERGIA BRANCO.png"
            height="80"
            className="d-inline-block align-top"
            alt="3P logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="header-toggle" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="mx-auto header-links">
            <Nav.Link as={Link} className="header-link" to="/">Home</Nav.Link>
            <Nav.Link as={Link} className="header-link" to="/portfolio">Portfólio</Nav.Link>            
            <Nav.Link as={Link} className="header-link" to="/politicaegestao">Política e Gestão</Nav.Link>            
            <Nav.Link as={Link} className="header-link" to="/contato">Contato</Nav.Link>  
          </Nav>
            <Button className="header-btn ms-auto">Conheça a 3P</Button>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
