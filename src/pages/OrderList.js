import React, { useEffect, useState } from "react";
import { OrderListWrap } from "../styles/OrderListStyle";
import OrderListItem from "../components/orderlist/OrderListItem";
import { getOderList } from "../api/orderAxios";

const OrderList = () => {
  const [listData, setListData] = useState([])
  const dummy = [{
    pk: "1",
    img: "ggg",
    name: "카푸치노 외",
    date: "2024.3.18",
    time: "18:18",
    gps: "대구 중구",
    price: "8,000",
    state: "수령완료",
  }, {
    pk: "2",
    img: "ggg",
    name: "아메리카노 외",
    date: "2024.3.20",
    time: "11:18",
    gps: "대구 서구",
    price: "8,000",
    state: "수령완료",
  }, {
    pk: "3",
    img: "ggg",
    name: "카푸치노 외",
    date: "2024.3.21",
    time: "15:18",
    gps: "대구 달서구",
    price: "8,000",
    state: "수령완료",
  }, {
    pk: "4",
    img: "ggg",
    name: "돌체라떼 외",
    date: "2024.3.23",
    time: "14:18",
    gps: "대구 북구",
    price: "8,000",
    state: "수령완료",
  }, {
    pk: "5",
    img: "ggg",
    name: "카페라떼 외",
    date: "2024.3.25",
    time: "19:18",
    gps: "대구 남구",
    price: "7,000",
    state: "수령완료",
  },]

  useEffect(()=>{
    getOderList(setListData)
  },[])

  return (
    <OrderListWrap>
      <div className="mypage_order_list">
        <div className="date_select">
          <div className="date_state">2024.03.23 ~ 2024.04.01</div>
          <div className="btn">
            <button type="button">기간설정</button>
          </div>
        </div>
        <OrderListItem dummy={dummy} listData={listData} />
      </div>
    </OrderListWrap>);

};

export default OrderList;
