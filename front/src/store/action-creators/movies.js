import axios from "axios";

const receiveMovies = (movies) => {
  return {
    type: "MOVIES",
    movies,
  };
};
const receiveMovie = (movie) => {
  return {
    type: "MOVIE",
    movie,
  };
};

const receiveFavs = (movies) => {
  return {
    type: "FAVS",
    movies,
  };
};
const addMoreMovies = (movies) => {
  return {
    type: "ADD_MOVIES",
    movies,
  };
};

export const fetchMovies = () => (dispatch) =>
  axios
    .get("https://www.omdbapi.com/?apikey=2d0964df&s=batman")
    .then((res) => res.data)
    .then((movies) => dispatch(receiveMovies(movies.Search)));

export const fetchMovie = (title) => (dispatch) =>
  axios
    .get(`https://www.omdbapi.com/?apikey=2d0964df&s=${title}`)
    .then((res) => res.data)
    .then((movie) => dispatch(receiveMovies(movie.Search)));

export const fetchId = (id) => (dispatch) =>
  axios
    .get(`https://www.omdbapi.com/?apikey=2d0964df&i=${id}&plot=full`)
    .then((res) => res.data)
    .then((movie) => dispatch(receiveMovie(movie)));

export const fetchFavs = () => (dispatch) =>
  axios
    .get("/fav")
    .then((res) => res.data)
    .then((movies) => dispatch(receiveFavs(movies)));

export const addMovies = (title, page) => (dispatch) =>
  axios
    .get(`https://www.omdbapi.com/?apikey=2d0964df&s=${title}&page=${page}`)
    .then((res) => res.data)
    .then((movies) => dispatch(addMoreMovies(movies.Search)));
