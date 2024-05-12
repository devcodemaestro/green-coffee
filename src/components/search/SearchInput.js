import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SearchInputWrap } from "../../styles/SearchStyle";

const SearchInput = ({ payload, setPayload, handleSearch }) => {
  return (
    <SearchInputWrap>
      <span>메뉴명</span>
      <span>을 입력하세요.</span>
      <div>
        <input
          type="text"
          name="search-bar"
          value={payload}
          onChange={e => setPayload(e.target.value)}
          onKeyDown={handleSearch}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      </div>
    </SearchInputWrap>
  );
};

export default SearchInput;
