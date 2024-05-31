import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../queries/Profile";
import { Alert, Card, Container, Row, Spinner } from "react-bootstrap";
import NavBar from "../components/NavBar";

interface Todo {
  id: number;
  title: string;
  completed: string;
}

const TodoPage = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading)
    return (
      <div className="spinner-container">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );

  if (error)
    return (
      <Alert variant="danger">
        <Alert.Heading>Oh No! An Error has occurred!</Alert.Heading>
        <p>{error.message}</p>
      </Alert>
    );

  return (
    <div>
      <NavBar />
      <Container>
        <h1>ToDo List</h1>
        <Row>
          {data.albums.data.map(({ id, title, completed }: Todo) => (
            <Card key={id}>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{completed}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TodoPage;
