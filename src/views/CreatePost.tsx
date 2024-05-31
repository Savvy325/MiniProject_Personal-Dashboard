import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../mutations/Mutations";
import { FormEvent, useRef } from "react";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import NavBar from "../components/NavBar";

const CreatePost = () => {
  const [createPost, { loading, error, data }] = useMutation(CREATE_POST);

  const inputTitle = useRef<HTMLInputElement>(null);
  const inputBody = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (inputTitle.current && inputBody.current) {
      createPost({
        variables: {
          title: inputTitle.current.value,
          body: inputBody.current.value,
        },
      });
      inputTitle.current.value = "";
      inputBody.current.value = "";
    }
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

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
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title: </Form.Label>
            <Form.Control
              type="text"
              ref={inputTitle}
              placeholder="Enter Title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="body">
            <Form.Label>Body: </Form.Label>
            <Form.Control
              type="text"
              ref={inputBody}
              placeholder="Enter Body"
            />
          </Form.Group>
          <Button type="submit">Create Post</Button>
        </Form>

        {data && data.createPost && (
          <div>
            <h1>New Created Post</h1>
            <p>ID: {data.createPost.id}</p>
            <p>Title: {data.createPost.title}</p>
            <p>Body: {data.createPost.body}</p>
          </div>
        )}
      </Container>
    </>
  );
};

export default CreatePost;
