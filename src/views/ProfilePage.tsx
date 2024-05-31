import { useQuery } from "@apollo/client";
import { GET_USERS } from "../queries/Profile";
import { Alert, Card, Container, Row, Spinner } from "react-bootstrap";
import NavBar from "../components/NavBar";

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const ProfilePage = () => {
  const { loading, error, data } = useQuery(GET_USERS);

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
        <h1 className="mb-4">Profiles</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {data.users.data.map(
            ({ id, name, email, address, phone, website, company }: User) => (
              <Card key={id}>
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>Email: {email}</Card.Text>
                  <Card.Text>Phone: {phone}</Card.Text>
                  <Card.Text>Website: {website}</Card.Text>
                  <Card.Title className="mt-4">Address</Card.Title>
                  <Card.Text>Street: {address.street}</Card.Text>
                  <Card.Text>Suite: {address.suite}</Card.Text>
                  <Card.Text>City: {address.city}</Card.Text>
                  <Card.Text>Zipcode: {address.zipcode}</Card.Text>
                  <Card.Title className="mt-4">Company</Card.Title>
                  <Card.Text>Name: {company.name}</Card.Text>
                  <Card.Text>Catch Phrase: {company.catchPhrase}</Card.Text>
                  <Card.Text>BS: {company.bs}</Card.Text>
                </Card.Body>
              </Card>
            )
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ProfilePage;
