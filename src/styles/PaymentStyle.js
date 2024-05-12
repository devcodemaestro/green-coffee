import styled from "@emotion/styled";
import { colors } from "./basic";

export const PaymentWrap = styled.div`
  .total-price-wrap {
    padding-top: 40px;
    & li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      :nth-of-type(2) {
        padding-bottom: 10px;
      }
      :nth-of-type(3) {
        font-size: 20px;
        border-top: 1px solid ${colors.disabled};
        padding-top: 10px;
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0 15px 0;
    button {
      width: 360px;
      height: 50px;
      border: none;
      border-radius: 10px;
      background: ${colors.main};
      color: ${colors.white};
      font-size: 20px;
      font-weight: 500;
    }
  }
`;
export const PaymentItemWrap = styled.div`
  width: 100%;
  padding-top: 10px;
  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    .item-wrap {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 15px;
      width: 100%;
      height: 120px;
      border-bottom: 1px solid ${colors.disabled};
      .item-img-wrap {
        width: calc(25% - 20px);
        height: 90px;
        border-radius: 20px;
        box-shadow: 1px 1px 10px 1px rgba(51, 51, 51, 0.3);
        background: red;
        img {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          object-fit: fill;
        }
      }
      .item-text-wrap {
        width: 60%;
        font-size: 13px;
        > div {
          :nth-of-type(1) {
            font-size: 16px;
            font-weight: 600;
          }
        }
      }
      .item-price-wrap {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: column;
        padding: 11px 0;
        > div {
          font-size: 16px;
          font-weight: 600;
          :last-of-type {
            font-size: 18px;
            font-weight: 600;
            color: ${colors.point};
          }
        }
      }
    }
  }
`;
export const PaymentCouponWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  .coupon-use-wrap {
    width: 100%;
    height: 80px;
    border-bottom: 1px solid ${colors.disabled};
    .coupon-have {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 30px;
      padding-left: 15px;
      color: ${colors.disabled};
      span {
        :last-of-type {
          color: ${colors.black};
          font-weight: 600;
        }
      }
    }
    .coupon-use {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 25px;
      padding-left: 15px;
      margin-top: 5px;
      color: ${colors.disabled};
      > div {
        display: flex;
        align-items: center;
        gap: 8px;
        > div {
          height: 100%;
          :nth-of-type(2) {
            color: ${colors.black};
          }
          :not(:nth-of-type(2)) {
            width: 25px;
            height: 25px;
            line-height: 23px;
            text-align: center;
            border-radius: 50%;
            border: 1px solid ${colors.main};
            color: ${colors.main};
            cursor: pointer;
          }
        }
      }
    }
  }
  .coupon-remine-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
  }
`;
