import React from "react";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import axios from "axios";

const Movie = ({ movie, user }) => {
  const addFav = () => {
    axios.post("/fav", {
      title: movie.Title,
      imdbId: movie.imdbID,
      poster: movie.Poster,
      genre: movie.Genre,
    });
  };
  return (
    <Figure>
      <Figure.Image
        width={2500}
        height={3000}
        src={movie.Poster}
        className="movieCard"
      />
      <Figure.Caption id="caption">
        <h1>
          {movie.Title} ({movie.Year})
        </h1>
        <h3>Rating: {movie.imdbRating}</h3>
        <h4> Actors: {movie.Actors}</h4>
        <h4> Genres: {movie.Genre}</h4>
        <br />
        <h5>
          Plot: {movie.Plot} <br /> <br />
          Awards: {movie.Awards}
        </h5>
        <br />
        <br />
        {user.id && (
          <Button variant="warning" onClick={addFav}>
            Add to Favorites
          </Button>
        )}
      </Figure.Caption>
    </Figure>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    movie: ownProps.movie,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
