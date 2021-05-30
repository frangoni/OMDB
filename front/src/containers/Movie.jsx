import React, { useEffect, useState } from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchFavs } from '../store/action-creators/movies';

const Movie = ({ movie, user, history, favs, fetchFavs }) => {
  const addFav = () => {
    axios
      .post('/fav', {
        title: movie.Title,
        imdbId: movie.imdbID,
        poster: movie.Poster,
        genre: movie.Genre,
      })
      .then((a) => {
        console.log(a);
        history.goBack();
      });
  };

  return (
    <Figure>
      <Figure.Image width={2500} height={3000} src={movie.Poster} className='movieCard' />
      <Figure.Caption id='caption'>
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
          <Button variant='warning' onClick={addFav}>
            Add to Favorites
          </Button>
        )}
        {/* {user.id && inFavs &&(
          <Button variant="danger" onClick={addFav}>
            Remove from Favorites
          </Button>
        )} */}
      </Figure.Caption>
    </Figure>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    movie: ownProps.movie,
    user: state.user,
    history: ownProps.history,
    favs: state.favs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFavs: () => dispatch(fetchFavs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
