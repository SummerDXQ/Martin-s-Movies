import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  movieReducer,
  keywordReducer,
  watchedListReducer,
  genreListReducer,
  searchOptionsReducer,
} from "./reducers";

const middleware = [thunk];
const reducer = combineReducers({
  movieReducer,
  keywordReducer,
  watchedListReducer,
  genreListReducer,
  searchOptionsReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
