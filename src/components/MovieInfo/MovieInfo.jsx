import React from "react";
import { Col } from "react-bootstrap";
import "./MovieInfo.scss";
import { addToWatchList } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const MovieInfo = ({ movieDetail }) => {
  const dispatch = useDispatch();
  const watchedList = useSelector(
    (state) => state.watchedListReducer.watchedList
  );
  const genreList = useSelector(
    (state) => state.genreListReducer.genreList.genres
  );

  // add a movie to watched list
  const addToWatched = (event) => {
    let movieId = event.target.dataset.id;
    dispatch(addToWatchList(movieId));
  };

  // genreID convert to name
  const genreName = (genreID) => {
    const genre = genreList.filter((item) => item.id === genreID);
    return genre[0].name;
  };

  return (
    <Col xl={4} lg={4} md={4} sm={6} xs={6} className="movie_info">
      <div className="content">
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
            alt="no poster"
          />
        </div>
        <div className="desc">
          <h2 className="title">{movieDetail.title}</h2>
          <div className="rating">
            <div className="score">
              <i className="fas fa-star"></i>
              <span>{movieDetail.vote_average}/10</span>
            </div>

            {genreList ? (
              <span className="genre">
                {movieDetail.genre_ids.map((item) => (
                  <span key={item}>{genreName(item)},</span>
                ))}
              </span>
            ) : null}
          </div>

          <p className="overview">{movieDetail.overview}</p>
          <div className="btns">
            <button
              data-id={movieDetail.id}
              onClick={(event) => {
                addToWatched(event);
              }}
              className="watched"
            >
              {watchedList.includes(String(movieDetail.id))
                ? "WATCHED"
                : "WATCH"}
            </button>
            <div className="read_more">
              {watchedList.imdb_id ? (
                <a href="https://www.themoviedb.org/">READ MORE</a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default MovieInfo;
