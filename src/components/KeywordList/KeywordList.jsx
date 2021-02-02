import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./KeywordList.scss";
import {
  emptyKeywordList,
  setKeywordID,
  setKeyword,
} from "../../store/actions";

export default function KeywordList() {
  const dispatch = useDispatch();
  const keywordList = useSelector(
    (state) => state.keywordReducer.keywordList.results
  );
  const handleKeywordClick = (event) => {
    const data = event.target.dataset;
    dispatch(setKeyword(data.name));
    dispatch(setKeywordID(data.id));
    dispatch(emptyKeywordList());
  };
  return (
    <div className="keyword_list">
      <ul>
        {keywordList.map((item) => {
          return (
            <li
              data-id={item.id}
              data-name={item.name}
              key={item.id}
              onClick={(event) => handleKeywordClick(event)}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
