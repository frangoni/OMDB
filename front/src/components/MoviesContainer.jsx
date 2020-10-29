import React from "react";
import { connect } from "react-redux";
import {
  fetchMovies,
  fetchMovie,
  addMovies,
} from "../store/action-creators/movies";
import Movies from "../containers/Movies";
import { FormControl, Form } from "react-bootstrap";

class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: "batman", page: 2 };
    this.handleChange = this.handleChange.bind(this);
    this.addMovies = this.addMovies.bind(this);
  }
  handleChange(e) {
    let value = e.target.value;
    this.setState({ searchValue: value });
    this.setState({ page: 2 });
    this.props.fetchMovie(value);
  }

  addMovies() {
    this.setState({ page: this.state.page + 1 });
    this.props.addMovies(this.state.searchValue, this.state.page);
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <>
        <div id="header">
          <h1 className="title">MOVIES</h1>
          <Form className="form">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={this.handleChange}
              value={this.state.searchValue}
            />
          </Form>
        </div>
        <Movies movies={this.props.movies} addMovies={this.addMovies} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.content,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    fetchMovie: (title) => dispatch(fetchMovie(title)),
    addMovies: (title, page) => dispatch(addMovies(title, page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
