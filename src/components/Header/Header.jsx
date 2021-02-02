import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchMovies,
  searchKeywords,
  emptyKeywordList,
  setKeyword,
  setKeywordID,
  setLanguage,
  setYear,
  setCurrentPage
} from "../../store/actions";
import { Row, Col } from "react-bootstrap";
import KeywordList from "../KeywordList/KeywordList";
import "./Header.scss";

export default function Header() {
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.searchOptionsReducer.keyword);
  const language = useSelector((state) => state.searchOptionsReducer.language);
  const year = useSelector((state) => state.searchOptionsReducer.year);
  const keywordID = useSelector(
    (state) => state.searchOptionsReducer.keywordID
  );
  const keywordList = useSelector(
    (state) => state.keywordReducer.keywordList.results
  );
  const handleKeywordChange = (event) => {
    let keyword = event.target.value;
    if (keyword.length === 0) {
      dispatch(setKeywordID(""));
      dispatch(emptyKeywordList());
    }
    dispatch(setKeyword(keyword));
    dispatch(searchKeywords(keyword));
  };
  const handleLanguageChange = (event) => {
    dispatch(setLanguage(event.target.value));
  };
  const handleYearChange = (event) => {
    dispatch(setYear(event.target.value));
  };
  const search = () => {
    dispatch(setCurrentPage(1));
    dispatch(searchMovies({ keywordID, language, year,page:1 }));
  };
  return (
    <Row className="header">
      <Col xl={9} lg={9} md={6} sm={6} xs={6}>
        <Row>
          <Col xl={4} lg={4} md={12} sm={12} xs={12} className="column">
            <input
              type="text"
              value={keyword}
              onChange={handleKeywordChange}
              placeholder="please input keyword"
            />
            {keywordList && keywordList.length ? <KeywordList /> : null}
          </Col>
          <Col xl={4} lg={4} md={12} sm={12} xs={12} className="column">
            <input
              type="text"
              value={year}
              onChange={(event) => handleYearChange(event)}
              placeholder="please input year"
            />
          </Col>
          <Col xl={4} lg={4} md={12} sm={12} xs={12} className="column">
            <select onChange={(event) => handleLanguageChange(event)}>
              <option value="">please select language</option>
              <option value="en-US">English</option>
              <option value="other">Other</option>
            </select>
          </Col>
        </Row>
      </Col>

      <Col xl={3} lg={3} md={6} sm={6} xs={6} className="column search">
        <button onClick={search}>SERACH</button>
      </Col>
    </Row>
  );
}
