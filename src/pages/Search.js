import React, { useEffect, useState } from "react";
import SearchList from "../components/search/SearchList";
import { SearchWrap } from "../styles/SearchStyle";
import SearchInput from "../components/search/SearchInput";
import { getSearchMenu } from "../api/searchAxios";
import { useNavigate } from "react-router";

const Search = () => {
  const [payload, setPayload] = useState("");
  const [searchData, setSearchData] = useState([]);
  const navigate = useNavigate();

  const handleSearch = e => {
    if (e.key === "Enter" && payload) {
      getSearchMenu(payload, setSearchData);
    }
  };

  const handleMenuClick = (id, name) => {
    navigate(`/menudetail/${id}/${name}`);
    console.log(id, name);
  };

  useEffect(() => {
    if (payload.length === 0) {
      setSearchData([]);
    }
  }, [payload]);

  return (
    <SearchWrap>
      <SearchInput
        payload={payload}
        setPayload={setPayload}
        handleSearch={handleSearch}
      />
      <SearchList searchData={searchData} handleMenuClick={handleMenuClick} />
    </SearchWrap>
  );
};

export default Search;
