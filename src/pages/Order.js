import React, { useEffect, useState } from "react";
import Banner from "../components/order/Banner";
import { OrderWrap } from "../styles/OrderStyle";
import { getMenuCate } from "../api/orderAxios";
import ItemBox from "../components/order/ItemBox";

const Order = () => {
  const [cateId, setCateId] = useState(2);
  const [menuData, setMenuData] = useState([]);
  const menuCate = [
    {
      id: 1,
      mname: "Coffee",
    },
    {
      id: 2,
      mname: "Beverage",
    },
    {
      id: 3,
      mname: "Food",
    },
    {
      id: 4,
      mname: "Goods",
    },
  ];
  const handleSelectBox = id => {
    setCateId(id);
  };

  useEffect(() => {
    getMenuCate(cateId, setMenuData);
  }, [cateId]);

  return (
    <OrderWrap>
      <Banner />
      <ul>
        {menuCate.map(item => (
          <li key={item.id} onClick={() => handleSelectBox(item.id)}>
            <span>{item.mname}</span>
          </li>
        ))}
      </ul>
      <ItemBox menuData={menuData} />
    </OrderWrap>
  );
};

export default Order;
