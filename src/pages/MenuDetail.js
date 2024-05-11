import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { postOrderDetail } from "../api/orderAxios";
import SizeItem from "../components/menudetail/SizeItem";
import OptionItem from "../components/menudetail/OptionItem";
import { DetailWrap } from "../styles/MenuDetailStyle";
import TotalPrice from "../components/menudetail/TotalPrice";

const MenuDetail = () => {
  const [menuData, setMenuData] = useState([]);
  const { menu_id, name } = useParams();

  const formData = { menu_id: menu_id, name: name };

  useEffect(() => {
    postOrderDetail(formData, setMenuData);
  }, [menu_id]);
  console.log(menuData);
  console.log(menuData[0]?.menu_imgurl);

  return (
    <DetailWrap>
      <div className="menu-info-wrap">
        <div className="menu-img">
          <img
            src={`http://back.green-coffee.shop/${menuData[0]?.menu_imgurl}`}
            alt=""
          />
        </div>
        <div className="menu-info-text">
          <span>{menuData[0]?.name}</span>
          <span>{menuData[0]?.menu_ename}</span>
        </div>
        <div>
          <span>{menuData[0]?.menu_price}원</span>
        </div>
      </div>
      <SizeItem />
      <div className="menu-notice">
        <span>유의사항</span>
        <span>※메뉴 이미지는 이미지컷으로 실제 음식과 다를 수 있습니다.</span>
      </div>
      <OptionItem />
      <TotalPrice />
    </DetailWrap>
  );
};

export default MenuDetail;
