import './styles.css'
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { CartComponent } from '../CartComponent/index'
import { Link, NavLink } from "react-router-dom";
export const NavbarComponent = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><Link to={"/"} className="link">Logo</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} activeClassName="active" to="/category/Mangas" >
              Mangas
            </Nav.Link>
            <Nav.Link as={NavLink} activeClassName="active" to="/category/Teclados">
              Teclados
            </Nav.Link>
            <NavDropdown title="Usuario" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Me gusta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mis compras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vender</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Cuenta</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link ><CartComponent /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
