import React, { useEffect, useState } from "react";
import { OrderListWrap } from "../styles/OrderListStyle";
import OrderListItem from "../components/orderlist/OrderListItem";
import { getOderList } from "../api/orderAxios";

const OrderList = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    getOderList(setListData);
  }, []);

  return (
    <OrderListWrap>
      <div className="mypage_order_list">
        <div className="date_select">
          <div className="date_state">2024.05.13 ~ 2024.05.13</div>
          <div className="btn">
            <button type="button">기간설정</button>
          </div>
        </div>
        <OrderListItem listData={listData} />
      </div>
    </OrderListWrap>
  );
};

export default OrderList;
