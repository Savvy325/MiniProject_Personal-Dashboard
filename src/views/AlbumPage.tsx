import { useQuery } from "@apollo/client";
import { GET_ALBUMS } from "../queries/Profile";
import { Alert, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import NavBar from "../components/NavBar";

interface Album {
  id: number;
  title: string;
  photos: {
    data: {
      title: string;
      url: string;
      thumbnailUrl: string;
    }[];
  };
}

const AlbumPage = () => {
  const { loading, error, data } = useQuery(GET_ALBUMS);

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
        <h1>Albums</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {data.albums.data.map(({ id, title, photos }: Album) => (
            <Card key={id}>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Row xs={1} md={2} className="g-4">
                  {photos.data.map((photo, index) => (
                    <Col key={index} className="mb-3">
                      <Card>
                        <Card.Img variant="top" src={photo.thumbnailUrl} />
                        <Card.Body>
                          <Card.Text>{photo.title}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AlbumPage;
