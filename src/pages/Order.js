import React from "react";
import { OrderWrap } from "../styles/OrderListStyle";
import Banner from "../components/order/Banner";

const Order = () => {
  const menuCate = [
    {
      id: "1",
      mname: "Coffee",
    },
    {
      id: "2",
      mname: "Beverage",
    },
    {
      id: "3",
      mname: "Food",
    },
    {
      id: "4",
      mname: "Goods",
    },
  ];
  return (
    <OrderWrap>
      <Banner />
      <ul>
        {menuCate.map(item => (
          <li key={item.id}>
            <span>{item.mname}</span>
          </li>
        ))}
      </ul>
    </OrderWrap>
  );
};

export default Order;
