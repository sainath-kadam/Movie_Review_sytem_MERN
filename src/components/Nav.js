import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container fluid>
        <Navbar.Brand href="#">Movie Review</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          

            <Nav.Link href="/">Home</Nav.Link>
            
            <Nav.Link href="/ShowMovieList">Revew List</Nav.Link>
            <Nav.Link href="/contact">Contact Me</Nav.Link>
            
           
          </Nav>
          
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;