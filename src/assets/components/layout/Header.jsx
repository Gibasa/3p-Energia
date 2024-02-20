import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "./Header.css"

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false)
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [currentPath]);

  const handleNavToggle = () => {
    setExpanded(!expanded); 
  };

  const handleNavItemClick = () => {
    setExpanded(false); 
  };
  
  return (
    <Navbar expand="lg" className={`header-bg ${scrolled ? "scrolled" : ""}`}>
      <Container className="header-container">
        <Navbar.Brand className="header-logo order-lg-first" as={Link} to="/">
          <img
            height="80"
            className="d-inline-block align-top"
            alt="3P logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="header-toggle" onClick={handleNavToggle} />
        <Navbar.Collapse id="basic-navbar-nav" in={expanded}>
          <Nav className="mx-auto header-links">
            <Nav.Link as={Link} className={`header-link ${currentPath === '/' ? 'active' : ''}`} to="/" onClick={handleNavItemClick}>Home</Nav.Link>
            <Nav.Link as={Link} className={`header-link ${currentPath === '/portfolio' ? 'active' : ''}`} to="/portfolio" onClick={handleNavItemClick} >Portfólio</Nav.Link>            
            <Nav.Link as={Link} className={`header-link ${currentPath === '/politicaegestao' ? 'active' : ''}`} to="/politicaegestao" onClick={handleNavItemClick} >Política e Gestão</Nav.Link>            
            <Nav.Link as={Link} className={`header-link ${currentPath === '/contato' ? 'active' : ''}`} to="/contato" onClick={handleNavItemClick} >Contato</Nav.Link>  
          </Nav>       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
