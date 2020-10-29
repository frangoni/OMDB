import axios from "axios";

const receiveMovies = (movies) => {
  return {
    type: "MOVIES",
    movies,
  };
};
const receiveMovie = (movie) => {
  return {
    type: "MOVIES",
    movies: movie,
  };
};

const receiveFavs = (movies) => {
  return {
    type: "FAVS",
    movies,
  };
};

export const fetchMovies = () => (dispatch) =>
  axios
    .get("https://www.omdbapi.com/?apikey=2d0964df&s=ac/dc")
    .then((res) => res.data)
    .then((movies) => dispatch(receiveMovies(movies)));

export const fetchMovie = (title) => (dispatch) =>
  axios
    .get(`https://www.omdbapi.com/?apikey=2d0964df&s=${title}`)
    .then((res) => res.data)
    .then((movie) => dispatch(receiveMovie(movie)));

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
