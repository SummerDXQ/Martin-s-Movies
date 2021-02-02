import React from "react";
import { Row } from "react-bootstrap";
import MovieInfo from "../MovieInfo/MovieInfo";
import './MovieList.scss';

const MovieList = ({ movies }) => {
  return (
    <Row>
      {movies.results.map((item) => {
        return <MovieInfo key={item.id} movieDetail={item} />;
      })}
    </Row>
  );
};

export default MovieList;
