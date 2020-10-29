import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { fetchFavs } from "../store/action-creators/movies";
import axios from "axios";

const UserContainer = ({ user, favs, fetchFavs, history }) => {
  useEffect(() => {
    fetchFavs();
  }, []);
  const removeFav = (e) => {
    const imdbId = e.target.value;
    const userId = user.id;
    axios
      .delete("/fav", { data: { imdbId, userId } })
      .then(() => history.push("/user"));
  };
  return (
    <div id="carouselContainer">
      <span>
        <h1>Welcome {user.name}!</h1>
        <h3>This are your favourites movies:</h3>
      </span>
      {favs.length ? (
        <Carousel id="carousel">
          {favs &&
            favs.map((movie) => {
              return (
                <Carousel.Item key={movie.imdbId}>
                  {/*    <Carousel.Caption>
                  <h3>{movie.title}</h3>
                  <p>{movie.genre}</p>
                </Carousel.Caption> */}
                  <img
                    className="d-block w-100"
                    src={movie.poster}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <Link to={`/movie/${movie.imdbId}`}>
                      <Button variant="warning" text="primary">
                        See details
                      </Button>
                    </Link>
                    <Button
                      onClick={removeFav}
                      value={movie.imdbId}
                      variant="danger"
                      text="primary"
                    >
                      Remove from favourites
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
        </Carousel>
      ) : (
        <h2>No favourites movies in your list!</h2>
      )}
    </div>
  );
};

const mapStateToProps = (state, { history }) => {
  return {
    user: state.user,
    favs: state.favs,
    history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFavs: () => dispatch(fetchFavs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
