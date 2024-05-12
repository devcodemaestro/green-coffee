import styled from "@emotion/styled";
import { colors } from "./basic";

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
    border-bottom: 1px solid #d9d9d9;
    padding: 15px;
    color: #583732;
    font-weight: 700;
  }
`;

export const MenuCartItemsWrap = styled.ul`
  li {
    position: relative;
    padding: 20px 15px;
    border-bottom: 1px solid #d9d9d9;
    display: flex;
    gap: 20px;
    .menu_img {
      display: flex;
      align-items: center;
      .img_wrap {
        width: 120px;
        height: 120px;
        min-width: 120px;
        border-radius: 15px;
        background: lightgray;
        img {
          border-radius: 15px;
          overflow: hidden;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .menu_info {
      position: relative;
      width: calc(100% - 120px);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      color: #583732;
      font-weight: 700;
      .del_btn {
        position: absolute;
        top: 0;
        right: 0;
        width: 24px;
        height: 24px;
        border: 2px solid lightgray;
        border-radius: 50%;
        transform: rotate(45deg);
        &::before {
          content: '';
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: block;
          width: 18px;
          height: 2px;
          background: lightgray;
        }
        &::after {
          content: '';
          position: relative;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: block;
          width: 2px;
          height: 18px;
          background: lightgray;
        }
      }
    }
    .menu_title {
      font-weight: 500;
    }
    .menu_price {
      margin: 4px 0 8px;
      font-size: 19px;
    }
    .menu_option {
      font-size: 13px;
    }
    .menu_change_option {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;
      & > button {
        // width: 60px;
        height: 32px;
        line-height: 32px;
        border-radius: 12px;
        padding: 0 8px;
        background: rgb(185, 148, 112);
        color: white;
        font-size: 13px;
        font-weight: 700;
        text-align: center;
      }
      .menu_add {
        display: flex;
        align-items: center;
        font-size: 19px;
        span {
          display: block;
          padding: 0 16px;
        }
        button {
          position: relative;
          width: 30px;
          height: 30px;
          border: 3px solid rgb(112, 65, 22);
          border-radius: 50%;
          &::before {
            content: '';
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
            content: '';
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
  background-color: rgba(0, 23, 60, 0.7);
  z-index: 1000;

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
        content: '';
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
        content: '';
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
