import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Dashboard</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/users">Profiles</Nav.Link>
          <Nav.Link as={Link} to="/albums">Albums</Nav.Link>
          <Nav.Link as={Link} to="/todos">To Do List</Nav.Link>
          <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
