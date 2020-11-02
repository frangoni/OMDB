import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOutUser } from "../store/action-creators/user";

const Sidebar = ({ user, history, logOutUser }) => {
  const handleLogout = () => {
    logOutUser().then(() => history.push("/login"));
  };
  return (
    <div id="sidebar">
      <Link to="/">
        <Button className="sb" variant="warning">
          Movies
        </Button>
      </Link>
      <Link to="/users">
        <Button className="sb" variant="warning">
          Users
        </Button>
      </Link>
      <Button className="sb" variant="warning">
        Genres
      </Button>
      {user.id && (
        <Button className="sb" variant="danger" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </div>
  );
};

const mapStateToProps = (state, { history }) => {
  return {
    user: state.user,
    history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOutUser: () => dispatch(logOutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
