import styled from "@emotion/styled";
import { colors } from "./basic";

export const DetailWrap = styled.div`
  width: 100%;
  padding-top: 30px;
  .menu-info-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid ${colors.disabled};
    padding-bottom: 20px;
    .menu-img {
      width: 400px;
      height: 155px;
      border-radius: 15px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
      }
    }
    .menu-info-text {
      width: 400px;
      display: flex;
      flex-direction: column;
      padding: 20px 0 0 5px;
      font-size: 20px;
      font-weight: 600;
      span {
        :last-of-type {
          font-size: 15px;
          font-weight: 500;
          color: ${colors.disabled};
          padding-left: 3px;
        }
      }
    }
    div {
      :last-of-type {
        width: 400px;
        display: flex;
        justify-content: flex-end;
        font-size: 20px;
        font-weight: 600;
        padding-right: 15px;
      }
    }
  }
  .menu-notice {
    display: flex;
    flex-direction: column;
    padding: 15px 0 0 20px;
    span {
      :first-of-type {
        font-size: 16px;
        font-weight: 600;
      }
      :last-of-type {
        padding: 3px 0 20px 3px;
        font-size: 14px;
        color: #9b9b9b;
      }
    }
  }
`;

export const SizeItemWrap = styled.div`
  width: 100%;
  padding: 30px 0;
  border-bottom: 1px solid ${colors.disabled};
  .size-radio {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    > input[type="radio"] {
      display: none;
    }
    > input[type="radio"] + label {
      display: inline-block;
      cursor: pointer;
      width: 120px;
      height: 100px;
      border: 1px solid ${colors.disabled};
      line-height: 95px;
      text-align: center;
      font-size: 18px;
      border-radius: 12px;
    }
    > input[type="radio"] + label {
      background-color: #fff;
      color: ${colors.disabled};
    }
    > input[type="radio"]:checked + label {
      background-color: ${colors.main};
      color: ${colors.white};
    }
  }
`;

export const OptionItemWrap = styled.div`
  .option-title {
    padding-left: 5px;
    font-size: 19px;
  }
  ul {
    & li {
      display: flex;
      justify-content: space-between;
      text-align: center;
      border-bottom: 1px solid ${colors.disabled};
      padding: 25px 10px 8px 10px;
      span {
        font-size: 18px;
        font-weight: 500;
      }
      :nth-of-type(1) {
        .ice-radio {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          > input[type="radio"] {
            display: none;
          }
          > input[type="radio"] + label {
            display: inline-block;
            cursor: pointer;
            width: 60px;
            height: 35px;
            border: 1px solid ${colors.disabled};
            line-height: 35px;
            text-align: center;
            border-radius: 10px;
          }
          > input[type="radio"] + label {
            background-color: #fff;
            color: ${colors.disabled};
          }
          > input[type="radio"]:checked + label {
            background-color: ${colors.main};
            color: ${colors.white};
          }
        }
      }
      :nth-of-type(2) {
        > div {
          display: flex;
          align-items: center;
          gap: 15px;
          > div {
            :not(:first-of-type, :nth-of-type(3)) {
              width: 30px;
              height: 30px;
              line-height: 30px;
              border-radius: 50%;
              text-align: center;
              background: ${colors.disabled};
              cursor: pointer;
            }
          }
        }
      }
      :nth-of-type(3) {
        > div {
          display: flex;
          align-items: center;
          gap: 15px;
          > div {
            :not(:first-of-type, :nth-of-type(3)) {
              width: 30px;
              height: 30px;
              line-height: 30px;
              border-radius: 50%;
              text-align: center;
              background: ${colors.disabled};
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;

export const TotalPriceWrap = styled.div`
  .total-price-wrap {
    display: flex;
    flex-direction: column;
    .qa-select {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      padding: 0 10px;
      margin: 30px 0;
      /* background: ${colors.disabled}; */
      background: #e9e9e9;
      span {
        font-size: 18px;
        font-weight: 500;
      }
      .ea-icon-wrap {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 15px;
        .ea-icon {
          width: 30px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          border-radius: 50%;
          background: ${colors.white};
          cursor: pointer;
        }
      }
    }
    .total-price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0 20px 10px;
      .price {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 18px;
        font-weight: 500;
      }
      button {
        width: 320px;
        height: 50px;
        background: ${colors.main};
        border: none;
        border-radius: 8px;
        color: ${colors.white};
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
`;
