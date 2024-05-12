import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOderList } from "../api/orderAxios";
import { OrderListDetailWrap } from "../styles/OrderListStyle";
import OrderDetailItem from "../components/orderlist/OrderDetailItem";

const OrderListDetail = () => {
  const { order_id } = useParams();

  const [detailData, setDetailData] = useState();
  const [index, setIndex] = useState();
  const [orderDetail, setOrderDetail] = useState();

  useEffect(() => {
    getOderListWait();
  }, []);
  console.log(order_id);

  const getOderListWait = async () => {
    const data = await getOderList(setDetailData);
    const idx = await data.findIndex(item => item?.orderId == order_id);
    setIndex(idx);
    console.log(data);
    console.log(data[idx].orderItems);
    setOrderDetail(data[idx].orderItems);
  };

  return (
    <OrderListDetailWrap>
      <div className="order_status">OrderListDetail</div>
      <span className="hr"></span>
      <div className="detail_item">
        <div className="item_title">매장정보</div>
        <ul>
          <li>
            <span className="lightgray">매장명</span>
            <span>그린커피(대구 중구 중앙로점)</span>
          </li>
          <li>
            <span className="lightgray">매장연락처</span>
            <span>053-123-4567</span>
          </li>
        </ul>
      </div>
      <OrderDetailItem
        detailData={detailData}
        orderDetail={orderDetail}
        index={index}
      />
      <span className="hr"></span>
      <div className="detail_item">
        <div className="item_title">사업자정보</div>
        <ul style={{ paddingLeft: "8px" }}>
          <li>대표: 김수한무</li>
          <li>주소: 대구광역시 중구 111-111(중앙로)</li>
          <li>사업자등록번호: 303312345</li>
        </ul>
        <div className="lightgray" style={{ padding: "52px 0 16px" }}>
          주문취소는 카운터로 문의 부탁드립니다. <br />
          준비완료 후 20분이 지나면 모든 음식은 폐기될 수 있습니다.
        </div>
      </div>
    </OrderListDetailWrap>
  );
};

export default OrderListDetail;
