import { useMutation, useQuery } from "@apollo/client";
import { GET_POSTS } from "../queries/Queries";
import { DELETE_POST } from "../mutations/Mutations";
import { Alert, Card, Container, Row, Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

interface Post {
  id: number;
  title: string;
}

const PostsPage = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [deletePost] = useMutation(DELETE_POST);

  const handleClick = (id: number) => {
    deletePost({
      variables: {
        id: id,
      },
    });
    console.log("Post has been deleted");
  };

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
    <>
      <NavBar />
      <Container>
        <h1>Posts 🤑</h1>
        <Link to={`/post/create`}>
          <Button variant="primary">Create Post</Button>
        </Link>

        <Row className="my-4">
          {data.posts.data.map(({ id, title }: Post) => (
            <Card key={id} className="mb-3">
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div className="d-flex justify-content-between">
                  <Link to={`/post/${id}`}>
                    <Button variant="primary">More</Button>
                  </Link>
                  <Button variant="primary" onClick={() => handleClick(id)}>
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default PostsPage;
