import React from "react";
import { OrderListDetailWrap } from "../styles/OrderListStyle";

const OrderListDetail = () => {
  const orderDetailArr = [
    { orderItem: '카페라떼', price: 4500,
      orderOption: [['컵사이즈', 'Grande'],['샷 추가', '1'],['얼음선택','많이'],['휘핑크림','1']]},
    { orderItem: '카페라떼', price: 4500,
      orderOption: [['컵사이즈', 'Grande'],['샷 추가', '1'],['얼음선택','많이'],['휘핑크림','1']]},
  ];

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
      <span className="hr"></span>
      <div className="detail_item">
        <div className="item_title">주문내역</div>
        <ul>
          {orderDetailArr.map((item, idx) => (
            <li key={idx}>
              <ul className="order_menu">
                <div>
                  <span>{ item.orderItem }</span>
                  <span>{ item.price }원</span>
                </div>
                  {item.orderOption.map((item, idx) => (
                    <li className="order_option" key={idx}>
                      <span className="lightgray">{item[0]}</span>
                      <span>
                        { parseInt(item[1]).toString() != 'NaN'
                          ? `${item[1]}개`
                          : item[1]
                        }
                      </span>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <span className="hr"></span>
      <div className="detail_item">
        <div className="item_title">
          <span>총 주문 금액</span>
          <span>9000원</span>
        </div>
      </div>
      <span className="hr"></span>
      <div className="detail_item">
        <div className="item_title">
          <span>총 결제 금액</span>
          <span>9000원</span>
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
      <span className="hr"></span>
      <div className="detail_item">
        <div className="item_title">사업자정보</div>
        <ul style={{'paddingLeft': '8px' }}>
          <li>대표: 김수한무</li>
          <li>주소: 대구광역시 중구 111-111(중앙로)</li>
          <li>사업자등록번호: 303312345</li>
        </ul>
        <div className="lightgray" style={{'padding': '52px 0 16px' }}>
          주문취소는 카운터로 문의 부탁드립니다. <br />
          준비완료 후 20분이 지나면 모든 음식은 폐기될 수 있습니다.
        </div>
      </div>
    </OrderListDetailWrap>
  );
};

export default OrderListDetail;
