import React from "react";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import './Paginate.scss';

export default function Paginate({
  currentPage,
  totalPage,
  changeCurrentPage,
}) {
  const changePageNumber = (current) => {
    changeCurrentPage(current);
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className="paginate">
      <Pagination
        className="ant-pagination"
        current={currentPage}
        total={totalPage}
        onChange={changePageNumber}
      />
    </div>
  );
}
