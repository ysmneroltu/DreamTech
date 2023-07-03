import { Navbar, Nav, Container } from 'react-bootstrap';

import Logo from '../assets/logo.svg';
import Cart from '../assets/cart.svg';

import { BrowserRouter, Link } from 'react-router-dom';

export default function AppNavbar() {
    return (
      <header id="header">
        <Navbar expand="lg" className="basic-navbar-nav my-2">
        <Container>
          <Navbar.Brand href="/">
          <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            DreamTech
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/blog" className="nav-link">Blog</Link>
              <Link to="/catalog" className="nav-link">Catalog</Link>
              <Link to="/pcbuilder" className="nav-link">PC Builder</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <Link to="/cart" className="nav-link">
                <img
                  alt=""
                  src={Cart}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
    )
}