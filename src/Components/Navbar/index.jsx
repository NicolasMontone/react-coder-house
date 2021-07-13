import './styles.css'
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { CartComponent } from '../CartComponent/index'
import { Link, NavLink } from "react-router-dom";
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react';
export const NavbarComponent = () => {
  const { carrito } = useContext(CartContext)
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><Link to={"/"} className="link">Logo</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Categorías" id="collasible-nav-dropdown">
              <NavDropdown.Item as={NavLink} activeClassName="active" to="/category/Mangas" >
                Mangas
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} activeClassName="active" to="/category/Teclados">
                Teclados
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} activeClassName="active" to="/category/Mouse">
                Mouse
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} activeClassName="active" to="/category/Procesadores">
                Procesadores
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} activeClassName="active" to="/category/Mothers">
                Mothers
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} activeClassName="active" to="/category/Juegos de Play">
                Juegos
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} activeClassName="active" to="/category/Playstation4">
                PlayStation
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} activeClassName="active" to="/category/Discos-Sólidos">
                Discos Sólidos
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link ><Link to={"/cart"} className="link">{carrito.length == 0 ? '' : <span>{carrito.length}</span>}<CartComponent /></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
