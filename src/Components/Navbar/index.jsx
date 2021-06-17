import { Navbar, Button, Nav, Form, FormControl } from "react-bootstrap"
import { Cart } from 'react-bootstrap-icons'
export const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link >Home</Nav.Link>
          <Nav.Link >Features</Nav.Link>
          <Nav.Link>Pricing</Nav.Link>
          <Nav.Link ><i><Cart size={23} /></i></Nav.Link>
        </Nav>

      </Navbar>
    </>
  );
};
