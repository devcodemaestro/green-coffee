import React from "react";
import { PopularMenuWrap } from "../../styles/HomeStyle";
import { Link, useNavigate } from "react-router-dom";

const PopularMenu = ({ popularData }) => {
  const navigate = useNavigate();
  const formatPrice = price => {
    if (price == null) {
      return popularData.menu_price;
    }
    return price.toLocaleString();
  };

  const handleMenuClick = (cate, id, name) => {
    navigate(`/menudetail/${cate}/${id}/${name}`);
  };
  return (
    <PopularMenuWrap>
      <div className="inner">
        <h3>추천메뉴</h3>
        <div className="content">
          {popularData.map(item => (
            <ul
              key={item.menu_id}
              onClick={() =>
                handleMenuClick(item.category, item.menu_id, item.name)
              }
            >
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
            </ul>
          ))}
        </div>
      </div>
    </PopularMenuWrap>
  );
};

export default PopularMenu;
