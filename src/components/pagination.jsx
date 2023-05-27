import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import gitService from "../services/api";

function PaginatedItems({ text, setGitList, setTotalCount }) {
  const handlePageClick = async (event) => {
    let data = {
      q: text,
      page: event.selected + 1,
    };
    try {
      let response = await gitService.getgitRepo(data);

      setGitList(response.data.items);
      setTotalCount(response.data.total_count);
    } catch (error) {
      if (error) {
        setTotalCount(0);
      }
    }
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount="100"
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}
export default PaginatedItems;
