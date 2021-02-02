import * as types from "./actionTypes";

const moviesInitialState = {
  loading: false,
  movies: [],
  currentPage: 1
};
export const movieReducer = (state = moviesInitialState, action) => {
  switch (action.type) {
    case types.SEARCH_MOVIES_REQUEST:
      return { ...state, loading: true };
    case types.SEARCH_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.payload };
    case types.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return { ...state };
  }
};

const keywordsInitialState = {
  loading: false,
  keywordList: []
};
export const keywordReducer = (state = keywordsInitialState, action) => {
  switch (action.type) {
    case types.SEARCH_KEYWORDS_REQUEST:
      return { ...state, loading: true };
    case types.SEARCH_KEYWORDS_SUCCESS:
      return { ...state, loading: false, keywordList: action.payload };
    case types.EMPTY_KEYWORDS_LIST:
      return { ...state, keywordList: action.payload };
    default:
      return { ...state };
  }
};

const watchListInitialState = {
  watchedList: JSON.parse(localStorage.getItem("watchedList")) || [],
};
export const watchedListReducer = (state = watchListInitialState, action) => {
  switch (action.type) {
    case types.ADD_TO_WATCHLIST:
      // deep copy (can also use immutable.js)
      let newWatchedList = JSON.parse(JSON.stringify(state.watchedList));
      if (!newWatchedList.includes(action.payload)) {
        newWatchedList.push(action.payload);
        localStorage.setItem("watchedList", JSON.stringify(newWatchedList));
      }
      return { ...state, watchedList: newWatchedList };
    default:
      return { ...state };
  }
};

const genresInitialState = {
  loading: false,
  genreList: [],
};
export const genreListReducer = (state = genresInitialState, action) => {
  switch (action.type) {
    case types.GET_GENRE_REQUEST:
      return { ...state, loading: true };
    case types.GET_GENRE_SUCCESS:
      return { ...state, loading: false, genreList: action.payload };
    default:
      return { ...state };
  }
};

const searchOptionsInitialState = {
  year: "",
  language: "",
  keyword: "",
  keywordID: "",
};
export const searchOptionsReducer = (
  state = searchOptionsInitialState,
  action
) => {
  switch (action.type) {
    case types.SET_KEYWORD:
      return { ...state, keyword: action.payload };
    case types.SET_KEYWORD_ID:
      return { ...state, keywordID: action.payload };
    case types.SET_LANGUAGE:
      return { ...state, language: action.payload };
    case types.SET_YEAR:
      return { ...state, year: action.payload };
    default:
      return { ...state };
  }
};
