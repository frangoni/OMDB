import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let name = e.target[0].value;
    let lastName = e.target[1].value;
    let email = e.target[2].value;
    let password = e.target[3].value;
    axios
      .post("/api/register", { name, lastName, email, password })
      .then(() => this.props.history.push("/login"));
  }

  render() {
    return (
      <>
        <Form className="login" onSubmit={this.handleSubmit}>
          <h1>Register for a more complete experience!</h1>
          <Form.Group>
            <Form.Label className="loginLabel">Name*</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group>
            <Form.Label className="loginLabel">Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="loginLabel">Email address*</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="loginLabel">Password*</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default Register;
