import React from "react";
import { PopularMenuWrap } from "../../styles/HomeStyle";

const PopularMenu = ({ popularData }) => {
  return (
    <PopularMenuWrap>
      <div className="inner">
        <h3>추천메뉴</h3>
        <div className="content">
          {popularData.map(item => (
            <ul key={item.recommendId}>
              <li>
                <img
                  src={`http://back.green-coffee.shop/${item.imageUrl}`}
                  alt=""
                />
              </li>
              <li>
                <span>{item.recommendName}</span>
                <span>{item.price}원</span>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </PopularMenuWrap>
  );
};

export default PopularMenu;
