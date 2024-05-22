import React from "react";
import { PopularMenuWrap } from "../../styles/HomeStyle";
import { Link } from "react-router-dom";

const PopularMenu = ({ popularData }) => {
  const formatPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <PopularMenuWrap>
      <div className="inner">
        <h3>추천메뉴</h3>
        <div className="content">
          {popularData.map(item => (
            <ul key={item.recommendId}>
              <Link to="/menudetail">
                <li>
                  <img
                    src={`https://back.green-coffee.shop/${item.imageUrl}`}
                    alt=""
                  />
                </li>
                <li>
                  <span>{item.recommendName}</span>
                  <span>{formatPrice(item.price)}원</span>
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
