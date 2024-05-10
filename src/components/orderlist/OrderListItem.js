import React from "react";
import { OrderListItemWrap } from "../../styles/OrderListStyle";

const OrderListItem = ({ listData }) => {
  const formatDate = createDate => {
    const dateObj = new Date(createDate);

    const year = dateObj.getFullYear();

    let month = dateObj.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;

    let day = dateObj.getDate();
    day = day < 10 ? `0${day}` : day;

    let hour = dateObj.getHours();
    hour = hour < 10 ? `0${hour}` : hour;

    let minute = dateObj.getMinutes();
    minute = minute < 10 ? `0${minute}` : minute;

    return `${year}-${month}-${day} ${hour}:${minute}`;
  };

  const formatPrice = price => {
    return price.toLocaleString();
  };

  return (
    <OrderListItemWrap>
      <ul>
        {listData.map(item => (
          <li key={item.orderId}>
            <div className="left_area">
              <div className="img_wrap">
                <img src={item.orderItems[0].menu.menu_imgurl} alt="" />
              </div>
            </div>
            <div className="right_area">
              <div className="name">{item.orderItems[0].menu.name} 외</div>
              <div className="info">
                <div className="box box01">{formatDate(item.create_date)}</div>
                {/* <div className="box box02">
                  대구 중앙로점 {formatPrice(item.totalOrderPrice)}원
                </div> */}
              </div>
              <div className="state">수령완료 (대구 중앙로점 {formatPrice(item.totalOrderPrice)}원)</div>
            </div>
          </li>
        ))}
      </ul>
    </OrderListItemWrap>
  );
};

export default OrderListItem;
