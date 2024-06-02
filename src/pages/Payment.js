import React, { useEffect, useState } from "react";
import PaymentCoupon from "../components/payment/PaymentCoupon";
import PaymentItem from "../components/payment/PaymentItem";
import { PaymentWrap } from "../styles/PaymentStyle";
import { getCartList } from "../api/menuAxios";
import { useRecoilValue } from "recoil";
import { UserStateAtom } from "../recoil/atoms/UserState";
import { loadTossPayments } from "@tosspayments/payment-sdk";
import { getCartTotalPrice } from "../api/cartAxios";
import { postTossPay } from "../api/payAxios";

const Payment = () => {
  const [payload, setPayload] = useState({
    ice: 0,
    shot: 0,
    cream: 0,
    price: 0,
    totalPrice: 0,
    discountPrice: 0,
    useCoupon: 0,
  });
  const [menuData, setMenuData] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [tossPayments, setTossPayments] = useState(null);
  const userData = useRecoilValue(UserStateAtom);
  const userEmail = userData?.email;
  const userName = userData?.nickname;

  useEffect(() => {
    const initossPayments = async () => {
      const clientKey = "test_ck_vZnjEJeQVxemQ6LLkv49rPmOoBN0";
      const tossPaymentsInstance = await loadTossPayments(clientKey);
      setTossPayments(tossPaymentsInstance);
    };

    initossPayments();
  }, []);

  const handleClick = async () => {
    if (!tossPayments) {
      return;
    }

    try {
      const payReq = {
        payType: "CARD",
        amount: totalPrice,
        email: userEmail,
        customerName: userName,
      };

      await tossPayments.requestPayment("카드", {
        amount: totalPrice,
        orderId: Math.random().toString(36).slice(2),
        orderName: `${menuData[0]?.menu.name} 외 ${menuData.length}개`,
        customerName: userEmail,
        successUrl: `${window.location.origin}/orderlist`,
        failUrl: `${window.location.origin}/cart`,
      });
      const { result } = await postTossPay(payReq);

      // if (result === 200) {
      // }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePlusMinus = (option, value) => {
    setPayload(prev => {
      const newValue = prev[option] + value;

      const updatedValue = newValue < 0 ? 0 : newValue;
      return {
        ...prev,
        [option]: updatedValue,
      };
    });
  };
  const formatPrice = price => {
    if (price == null) {
      return totalPrice;
    }
    return totalPrice.toLocaleString();
  };

  useEffect(() => {
    getCartList(setMenuData);
    getCartTotalPrice(setTotalPrice);
  }, []);

  return (
    <PaymentWrap>
      <h2>주문내역</h2>
      <PaymentItem menuData={menuData} />
      <PaymentCoupon payload={payload} handlePlusMinus={handlePlusMinus} />
      <ul className="total-price-wrap">
        <li>
          <h3>주문금액</h3>
          <h3>{formatPrice(totalPrice)}원</h3>
        </li>
        <li>
          <h3>할인금액</h3>
          <h3>-4,000원</h3>
        </li>
        <li>
          <h3>최종 결제 금액</h3>
          <h3>10,000원</h3>
        </li>
      </ul>
      <div className="buttons">
        <button onClick={handleClick}>
          총 {formatPrice(totalPrice)}원 결제하기
        </button>
      </div>
    </PaymentWrap>
  );
};

export default Payment;
