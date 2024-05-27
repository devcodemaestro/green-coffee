import React from "react";
import { PopularMenuWrap } from "../../styles/HomeStyle";
import { Link } from "react-router-dom";

const PopularMenu = ({ popularData }) => {
  const formatPrice = price => {
    if (price == null) {
      return popularData.menu_price;
    }
    return price.toLocaleString();
  };

  return (
    <PopularMenuWrap>
      <div className="inner">
        <h3>추천메뉴</h3>
        <div className="content">
          {popularData.map(item => (
            <ul key={item.recommendId}>
              <Link to={"/menudetail/coffee/10/아이스%20카페%20아메리카노"}>
                <li>
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}/${item.menu_imgurl}`}
                    alt=""
                  />
                </li>
                <li>
                  <span>{item.name}</span>
                  <span>{formatPrice(item.menu_price)}원</span>
                </li>
              </Link>
            </ul>
          ))}
        </div>
      </div>
    </PopularMenuWrap>
  );
};

export default PopularMenu;
