import styled from "@emotion/styled";
import { colors, ellipsis } from "./basic";

export const MenuCartWrap = styled.div`
  button {
    border: none;
    /* background: transparent; */
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
  .cart-noitem {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
    padding-top: 250px;
    span {
      font-size: 25px;
      font-weight: 600;
    }
    button {
      width: 300px;
      height: 60px;
      font-size: 23px;
      font-weight: 500;
      border-radius: 8px;
      cursor: pointer;
      color: ${colors.white};
      background: ${colors.main};
    }
  }
`;

export const MenuCartItemsWrap = styled.div`
  width: 100%;
  padding-top: 10px;
  color: ${colors.point};
  display: flex;
  flex-direction: column;
  align-items: center;
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
          .pm-icon-none {
            width: 80px;
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
  .item-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .total-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    padding: 20px 0 20px 10px;
    .price {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 18px;
      font-weight: 500;
    }
    .buttons {
      display: flex;
      align-items: center;
      /* justify-content: center; */
      gap: 5px;
      .custom {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        font-size: 20px;
        border-radius: 8px;
        background: ${colors.point};
        color: ${colors.white};
        cursor: pointer;
      }
      & button {
        width: 280px;
        height: 50px;
        background: ${colors.main};
        border: none;
        border-radius: 8px;
        color: ${colors.white};
        font-size: 24px;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
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
    width: 400px;
    max-width: 480px;
    height: 90%;
    max-height: 600px;
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
      img {
        width: 120px;
        height: 120px;
        border-radius: 12px;
        box-shadow: 1px 1px 10px 1px rgba(51, 51, 51, 0.3);
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
    .ice-radio-wrap {
      li {
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
    .size-radio-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 25px 10px 8px 10px;
      font-size: 18px;
      border-bottom: 1px solid ${colors.disabled};
      .size-radio {
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
          width: 70px;
          height: 40px;
          border: 1px solid ${colors.disabled};
          line-height: 40px;
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
  }
  .option_item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${colors.disabled};
    margin: 20px 0;
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

  .modal_btns {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    & > button {
      :first-of-type {
        background: ${colors.disabled};
        color: ${colors.black};
      }
      width: 120px;
      height: 40px;
      border-radius: 8px;
      background: rgb(185, 148, 112);
      color: ${colors.white};
      font-size: 17px;
      font-weight: 600;
      text-align: center;
      background: ${colors.main};
    }
  }
`;
