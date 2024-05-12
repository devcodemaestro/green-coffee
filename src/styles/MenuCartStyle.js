import styled from "@emotion/styled";
import { colors, ellipsis } from "./basic";

export const MenuCartWrap = styled.div`
  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
  .store_title {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${colors.disabled};
    padding: 15px;
    color: ${colors.black};
    font-weight: 700;
  }
`;

export const MenuCartItemsWrap = styled.div`
  width: 100%;
  padding-top: 10px;
  color: ${colors.point};
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
      height: 140px;
      border-bottom: 1px solid ${colors.disabled};
      .item-img-wrap {
        width: calc(25% - 20px);
        height: 100px;
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
        width: 35%;
        font-size: 12px;
        > div {
          :nth-of-type(1) {
            font-size: 14px;
            font-weight: 500;
            ${ellipsis.line1}
          }
          :nth-of-type(2) {
            display: flex;
            align-items: center;
            gap: 10px;
            position: relative;
            & span {
              display: block;
              ::before {
                content: "";
                position: absolute;
                top: 50%;
                left: 16.5%;
                transform: translate(-50%, -50%);
                display: block;
                width: 1px;
                height: 14px;
                background: ${colors.disabled};
              }
            }
          }
          :nth-of-type(3) {
            display: flex;
            align-items: center;
            gap: 10px;
            position: relative;
            & span {
              display: block;
              ::before {
                content: "";
                position: absolute;
                top: 50%;
                left: 19.5%;
                transform: translate(-50%, -50%);
                display: block;
                width: 1px;
                height: 14px;
                background: ${colors.disabled};
              }
            }
          }
          :nth-of-type(4) {
            font-size: 20px;
            font-weight: 600;
            padding-top: 10px;
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
          :nth-of-type(2) {
          }
        }
        .pm-icon-wrap {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 10px;
          button {
            width: 80px;
            height: 30px;
            background: ${colors.main};
            border-radius: 8px;
            color: ${colors.white};
          }
          .pm-icon {
            width: 25px;
            height: 25px;
            line-height: 21px;
            text-align: center;
            border: 1px solid ${colors.point};
            border-radius: 50%;
            cursor: pointer;
          }
        }
        .del-btn {
          cursor: pointer;
          .del-bt {
            color: ${colors.disabled};
          }
        }
      }
    }
  }
`;

export const PaymentBtn = styled.button`
  position: fixed;
  left: 50%;
  bottom: 80px;
  transform: translateX(-50%);
  width: 90%;
  max-width: 300px;
  padding: 9px 18px;
  border-radius: 24px;
  background: rgb(88, 55, 50) !important;
  color: white;
  font-size: 24px;
  font-weight: 700;
`;

export const ChangeOptionWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  backdrop-filter: blur(2px);
  overflow: "unset";

  .modal_box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 95%;
    max-width: 480px;
    height: 95%;
    max-height: 500px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 16px;
    background: white;
    .modal_title {
      font-weight: 700;
      font-size: 24px;
      line-height: 2;
    }
    .modal_img {
      width: 120px;
      height: 120px;
      margin: 16px;
      border: 2px solid #583732;
      border-radius: 12px;
      .img_wrap {
        width: 100%;
        height: 100%;
        border-radius: 12px;
        background: lightgray;
      }
    }
  }

  .modal_options {
    width: 100%;
    font-weight: 500;
    & > span {
      font-size: 18px;
      font-weight: 700;
    }
  }
  .option_item {
    display: flex;
    align-items: center;
    border-top: 2px solid #583732;
    border-bottom: 2px solid #583732;
    margin: 10px 0;
    padding: 0 8px;
    font-weight: 500;
    & > span:first-of-type {
      width: 80%;
    }
    & > div {
      display: flex;
      align-items: center;
      margin-left: 16px;
      span {
        display: block;
        padding: 0 8px;
      }
    }
    button {
      position: relative;
      width: 30px;
      height: 30px;
      border: 3px solid rgb(112, 65, 22);
      border-radius: 50%;
      &::before {
        content: "";
        position: relative;
        top: 1.5px;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 18px;
        height: 3px;
        background: rgb(112, 65, 22);
      }
      &:last-of-type::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 3px;
        height: 18px;
        background: rgb(112, 65, 22);
      }
    }
  }

  .modal_btns {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    & > button {
      height: 33px;
      line-height: 33px;
      border-radius: 12px;
      padding: 0 12px;
      background: rgb(185, 148, 112);
      color: white;
      font-size: 15px;
      font-weight: 700;
      text-align: center;
    }
  }
`;
