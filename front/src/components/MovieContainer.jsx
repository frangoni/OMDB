import React from "react";
import { connect } from "react-redux";
import { fetchId } from "../store/action-creators/movies";
import Movie from "../containers/Movie";

class MovieContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchId(this.props.id);
  }

  render() {
    return <Movie movie={this.props.movie} history={this.props.history} />;
  }
}

const mapStateToProps = (state, { match }) => {
  return {
    movie: state.content,
    id: match.params.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchId: (id) => dispatch(fetchId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
