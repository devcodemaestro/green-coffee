import styled from "@emotion/styled";
import { colors } from "./basic";

export const FavoriteWrap = styled.div`
  padding-top: 25px;
  .no-item {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 150px;
  }
`;
export const FavoriteItemWrap = styled.div`
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 20px;
  > div {
    :first-of-type {
      display: flex;
      align-items: center;
    }
    :last-of-type {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 10px;
      /* padding: 20px 10px 0 0; */
    }
  }
  .buttons {
    button {
      width: 90px;
      height: 40px;
      font-size: 17px;
      font-weight: 500;
      color: ${colors.white};
      background: ${colors.main};
      border: none;
      border-radius: 8px;
      cursor: pointer;
      :first-of-type {
        width: 50px;
        background: ${colors.point};
      }
    }
  }
`;

export const ItemImg = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    border-radius: 10px;
  }
`;

export const ItemDetail = styled.div`
  > div {
    padding-left: 15px;
    :first-of-type {
      display: flex;
      flex-direction: column;
      color: #444;
      > span {
        :nth-of-type(1) {
          font-weight: 500;
        }
        :nth-of-type(2) {
          font-size: 12px;
          color: #d9d9d9;
        }
        :nth-of-type(3) {
          font-size: 14px;
        }
      }
    }
    :last-of-type {
      display: flex;
      align-items: center;
      > span {
        position: relative;
        :not(:first-of-type) {
          padding-left: 8px;
          margin-left: 8px;
          ::before {
            position: absolute;
            left: 0;
            top: 3px;
            content: "";
            width: 1px;
            height: 16px;
            background-color: #bababa;
          }
        }
      }
    }
  }
`;
