import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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

const App = ({ getUser, user }) => {
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <Navbars />
      <Route component={Sidebar} />
      <Switch>
        <Route exact path="/" component={MoviesContainer} />
        <Route exact path="/movie/:id" component={MovieContainer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route
          exact
          path="/user"
          component={({ history }) =>
            user.id ? (
              <UserContainer history={history} />
            ) : (
              <Login history={history} />
            )
          }
        />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
