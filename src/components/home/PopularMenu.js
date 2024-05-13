import React, { useEffect, useState } from "react";
import { PopularMenuWrap } from "../../styles/HomeStyle";
import { Link, useNavigate } from "react-router-dom";
import { getMenuCate } from "../../api/orderAxios";
import { getPopularMenu } from "../../api/homeAxios";

const PopularMenu = ({ popularData }) => {
  const navigate = useNavigate();
  const [popularMenuData, setPopularMenuData] = useState([]);
  useEffect(() => {
    getPopularMenu(setPopularMenuData);
  }, []);

  const formatPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  console.log("menuData", popularMenuData);
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
                    src={`http://back.green-coffee.shop/${item.imageUrl}`}
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
