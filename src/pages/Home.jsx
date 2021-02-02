import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { getGenreList, searchMovies, setCurrentPage } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../components/MovieList/MovieList";
import Header from "../components/Header/Header";
import Paginate from "../components/Paginate/Paginate";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies);
  const currentPage = useSelector((state) => state.movieReducer.currentPage);
  const keywordID = useSelector(
    (state) => state.searchOptionsReducer.keywordID
  );
  const year = useSelector((state) => state.searchOptionsReducer.year);
  const language = useSelector((state) => state.searchOptionsReducer.language);
  const totalPage = movies.total_pages;
  
  useEffect(() => {
    // fetch movie data
    dispatch(searchMovies({ keywordID, language, year, page: currentPage }));
    dispatch(getGenreList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const changeCurrentPage = (current) => {
    dispatch(setCurrentPage(current));
    dispatch(searchMovies({ keywordID, language, year, page: current }));
  };

  return (
    <Container fluid>
      <Header />
      <div className="movie_list">
        {movies.results && movies.results.length > 0 ? (
          <MovieList movies={movies} />
        ) : (
          "The movie is not exist, please try other keywords!"
        )}
      </div>
      <Paginate
        currentPage={currentPage}
        totalPage={totalPage}
        changeCurrentPage={(current) => changeCurrentPage(current)}
      />
    </Container>
  );
};

export default Home;
