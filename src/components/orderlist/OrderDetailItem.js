import React from "react";

const OrderDetailItem = ({ detailData, orderDetail, index, formatPrice }) => {
  return (
    <>
      <span className="hr"></span>
      <div className="detail_item">
        <div className="item_title">주문내역</div>
        <ul>
          {orderDetail?.map((item, idx) => (
            <li key={idx}>
              <ul className="order_menu">
                <div>
                  <span>{item.menu.name}</span>
                  <span>{formatPrice(item.menu.menu_price)}원</span>
                </div>
                <li className="order_option">
                  <span className="lightgray">샷추가</span>
                  <span>
                    {parseInt(item.shot).toString() != "NaN"
                      ? `${item.shot}개`
                      : item.shot}
                  </span>
                </li>
                <li className="order_option">
                  <span className="lightgray">얼음선택</span>
                  <span>
                    {item.ice == 0 ? `적게` : item.ice == 1 ? `보통` : `많이`}
                  </span>
                </li>
                <li className="order_option">
                  <span className="lightgray">휘핑크림</span>
                  <span>
                    {item.cream == 0
                      ? `적게`
                      : item.cream == 1
                        ? `보통`
                        : `많이`}
                  </span>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <span className="hr"></span>
      <div className="detail_item">
        <div className="item_title">
          <span>총 주문 금액</span>
          <span>
            {index != undefined
              ? formatPrice(detailData[index]?.totalOrderPrice)
              : ""}
            원
          </span>
        </div>
      </div>
      <span className="hr"></span>
      <div className="detail_item">
        <div className="item_title">
          <span>총 결제 금액</span>
          <span>
            {index != undefined ? detailData[index]?.totalOrderPrice : ""}원
          </span>
        </div>
      </div>
      <span className="hr"></span>
      <div className="detail_item">
        <ul>
          <li>
            <span className="lightgray">승인일시</span>
            <span>20240513</span>
          </li>
          <li>
            <span className="lightgray">승인번호</span>
            <span>00607102</span>
          </li>
          <li>
            <span className="lightgray">결제수단</span>
            <span>삼성페이</span>
          </li>
        </ul>
      </div>
      <span className="hr"></span>
      <div className="detail_item">
        <div className="item_title">적립정보</div>
        <ul>
          <li>
            <span className="lightgray">적립 스탬프 수</span>
            <span>2개</span>
          </li>
          <li>
            <span className="lightgray">보유 스탬프 수</span>
            <span>4개</span>
          </li>
          <li>
            <span className="lightgray">사용 가능한 쿠폰</span>
            <span>1개</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default OrderDetailItem;
