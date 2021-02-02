import * as types from "./actionTypes";
import axios from "../api/http";
import { errorHandle } from "../utils/common";

const api_key = process.env.REACT_APP_API_KEY;

export const searchMovies = ({ language, keywordID, year, page }) => async (
  dispatch
) => {
  language = language || "";
  keywordID = keywordID || "";
  year = year || "";
  page = page || 1;
  let movies = await axios("discover/movie", {
    params: {
      page,
      language,
      with_keywords: keywordID,
      year,
    },
  });
  if (errorHandle(movies)) return; //error happen
  dispatch({
    type: types.SEARCH_MOVIES_SUCCESS,
    payload: movies,
  });
};

export const searchKeywords = (keyword) => async (dispatch) => {
  if (!keyword) return;
  let keywords = await axios("/search/keyword", {
    params: {
      query: keyword,
    },
  });
  if (errorHandle(keywords)) return;
  dispatch({
    type: types.SEARCH_KEYWORDS_SUCCESS,
    payload: keywords,
  });
};

export const getGenreList = () => async (dispatch) => {
  dispatch({
    type: types.GET_GENRE_REQUEST,
  });
  let genreList = await axios("/genre/movie/list");
  if (errorHandle(genreList)) return;
  dispatch({
    type: types.GET_GENRE_SUCCESS,
    payload: genreList,
  });
};

export const addToWatchList = (payload) => ({
  type: types.ADD_TO_WATCHLIST,
  payload,
});

export const emptyKeywordList = () => ({
  type: types.EMPTY_KEYWORDS_LIST,
  payload: [],
});

export const setKeyword = (payload) => ({
  type: types.SET_KEYWORD,
  payload,
});
export const setKeywordID = (payload) => ({
  type: types.SET_KEYWORD_ID,
  payload,
});
export const setYear = (payload) => ({
  type: types.SET_YEAR,
  payload,
});
export const setLanguage = (payload) => ({
  type: types.SET_LANGUAGE,
  payload,
});
export const setCurrentPage = (payload) => ({
  type: types.SET_CURRENT_PAGE,
  payload,
});
