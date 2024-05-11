import React, { useEffect, useState } from "react";
import { OrderWrap } from "../styles/OrderStyle";
import { getMenuCate } from "../api/orderAxios";
import ItemBox from "../components/order/ItemBox";
import { useNavigate, useParams } from "react-router";

const Order = () => {
  const [cateId, setCateId] = useState(1);
  const [menuData, setMenuData] = useState([]);
  const navigate = useNavigate();
  const menuCate = [
    {
      id: 1,
      mname: "커피",
    },
    {
      id: 2,
      mname: "음료",
    },
    {
      id: 3,
      mname: "푸드",
    },
    {
      id: 4,
      mname: "선물",
    },
  ];

  const handleSelectBox = id => {
    setCateId(id);
  };

  const handleMenuClick = (id, name) => {
    navigate(`/menudetail/${id}/${name}`);
    console.log(id, name);
  };

  useEffect(() => {
    getMenuCate(cateId, setMenuData);
  }, [cateId]);

  return (
    <OrderWrap>
      <ul className="menu-wrap">
        {menuCate.map(item => (
          <li
            key={item.id}
            className={`menu-${item.id === cateId ? "active" : "tab"}`}
            onClick={() => handleSelectBox(item.id)}
          >
            <span>{item.mname}</span>
          </li>
        ))}
      </ul>
      <ItemBox menuData={menuData} handleMenuClick={handleMenuClick} />
      <div className="bottom-info">
        <span>유의사항</span>
        <span>※메뉴 이미지는 이미지컷으로 실제 음식과 다를 수 있습니다.</span>
      </div>
    </OrderWrap>
  );
};

export default Order;
