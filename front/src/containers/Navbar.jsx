import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { connect } from "react-redux";

const Navbars = ({ user }) => {
  return (
    <Navbar id="navbar" fixed="top" bg="dark" expand="lg">
      <Nav className="mr-auto nav">
        <Navbar.Brand href="/">
          <img id="logo" src="omdb.png" alt="" />
        </Navbar.Brand>
      </Nav>
      <Nav className="nav">
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
      </Nav>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, null)(Navbars);
