import React from "react";
import { connect } from "react-redux";
import { fetchMovies, fetchMovie } from "../store/action-creators/movies";
import Movies from "../containers/Movies";
import { FormControl, Form } from "react-bootstrap";

class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let value = e.target.value;
    this.props.fetchMovie(value);
    this.setState({ searchValue: value });
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
        <Movies movies={this.props.movies} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.content.Search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    fetchMovie: (title) => dispatch(fetchMovie(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
