import React from "react";
import { SearchListWrap } from "../../styles/SearchStyle";

const SearchList = ({ searchData, handleMenuClick }) => {
  const totalEa = searchData.length;
  return (
    <SearchListWrap>
      {searchData?.length > 1 && (
        <div className="search-result">검색 결과 {totalEa}개</div>
      )}
      <div className="search-inner">
        {searchData?.map(item => (
          <div
            key={item.menu_id}
            className="box-wrap"
            onClick={() => handleMenuClick(item.menu_id, item.name)}
          >
            <div className="box-img">
              <img src={`${item.menu_imgurl}`} alt="" />
            </div>
            <div className="box-text">
              <div>{item.name}</div>
              <div>{item.menu_ename}</div>
              <div>{item.menu_price}원</div>
            </div>
          </div>
        ))}
      </div>
    </SearchListWrap>
  );
};

export default SearchList;
