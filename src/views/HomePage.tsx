import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Container fluid className="bg-dark text-light py-5">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6} className="text-center">
              <h1 className="display-4 mb-4">Welcome to the Dashboard</h1>
              <p className="lead">Explore your data and manage your tasks with ease.</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default HomePage;
