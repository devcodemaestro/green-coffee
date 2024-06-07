import React from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PagingSty } from "../styles/ui/PasingStyle";
import Pagination from "react-js-pagination";

const Paging = ({ page, setPage, count }) => {
  return (
    <PagingSty>
      <Pagination
        activePage={page}
        itemsCountPerPage={5}
        totalItemsCount={count}
        pageRangeDisplayed={10}
        marginPagesDisplayed={0}
        prevPageText={<FontAwesomeIcon icon={faChevronLeft} />}
        nextPageText={<FontAwesomeIcon icon={faChevronRight} />}
        firstPageText={""}
        lastPageText={""}
        onChange={setPage}
      />
    </PagingSty>
  );
};

export default Paging;
