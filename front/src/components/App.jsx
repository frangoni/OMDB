import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbars from "./Navbar";
import Sidebar from "./Sidebar";
import MoviesContainer from "./MoviesContainer";
import MovieContainer from "./MovieContainer";
import Footer from "../containers/Footer";
import Login from "../containers/Login";
import Register from "../containers/Register";
import { getUser } from "../store/action-creators/user";
import { connect } from "react-redux";
import UserContainer from "./UserContainer";

const App = ({ getUser }) => {
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <Navbars />
      <Route component={Sidebar} />
      <Switch>
        <Route exact path="/" component={MoviesContainer} />
        <Route path="/movie/:id" component={MovieContainer} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/user" component={UserContainer} />
      </Switch>
      <Footer />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
  };
};

export default connect(null, mapDispatchToProps)(App);