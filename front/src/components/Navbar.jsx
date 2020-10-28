import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { connect } from "react-redux";

const Navbars = ({ user }) => {
  return (
    <Navbar id="navbar" fixed="top" bg="dark" expand="lg">
      <Nav className="mr-auto nav">
        <Navbar.Brand href="/">OMDB</Navbar.Brand>
      </Nav>
      <Nav className="nav"></Nav>
      {user.id ? (
        <Button href="/user" variant="dark">
          User
        </Button>
      ) : (
        <>
          <Button href="/login" variant="success">
            Login
          </Button>
          <Button href="/register" variant="primary">
            Register
          </Button>
        </>
      )}
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, null)(Navbars);
