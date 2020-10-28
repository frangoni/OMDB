import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { connect } from "react-redux";
import { fetchFavs } from "../store/action-creators/movies";

const UserContainer = ({ user, favs, fetchFavs }) => {
  useEffect(() => {
    fetchFavs();
  }, []);
  return (
    <div id="carouselContainer">
      <span>
        <h1>Welcome {user.name}!</h1>
        <h3>This are your favourites movies:</h3>
      </span>
      <Carousel id="carousel">
        {favs &&
          favs.map((movie) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={movie.poster}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{movie.title}</h3>
                  <p>{movie.genre}</p>
                </Carousel.Caption>
                {/*       <Link to={`/movie/${movie.imdbID}`}>
                <Button variant="warning" text="primary">
                See details
                </Button>
              </Link> */}
              </Carousel.Item>
            );
          })}
      </Carousel>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    favs: state.favs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFavs: () => dispatch(fetchFavs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
