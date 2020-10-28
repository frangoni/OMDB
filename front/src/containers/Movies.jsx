import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default (props) => {
  const movies = props.movies;
  return (
    <div id="container">
      {movies &&
        movies.map((movie) => {
          return (
            <Card
              border={"warning"}
              className="movieCard"
              key={movie.imdbID}
              style={{ width: "15rem" }}
            >
              <Card.Img variant="top" src={movie.Poster} />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Year}</Card.Text>
                <Link to={`/movie/${movie.imdbID}`}>
                  <Button variant="warning" text="primary">
                    See details
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
};
