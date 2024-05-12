import styled from "@emotion/styled";
import { colors } from "./basic";

export const OrderWrap = styled.div`
  padding-top: 35px;
  .menu-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid ${colors.disabled};
    & .menu-tab {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 45px;
      cursor: pointer;
    }
    & .menu-active {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 45px;
      cursor: pointer;
      border-bottom: 2px solid ${colors.main};
    }
    .search-wrap {
      width: calc(100% - 260px);
      display: flex;
      justify-content: flex-end;
    }
    .search-icon {
      color: ${colors.main};
      cursor: pointer;
    }
  }
  .bottom-info {
    display: flex;
    flex-direction: column;
    padding: 30px 0 10px 10px;
    span {
      font-size: 16px;
      font-weight: 500;
      :last-of-type {
        color: #9b9b9b;
        font-size: 13px;
      }
    }
  }
`;

export const ItemBoxWrap = styled.div`
  width: 100%;
  padding-top: 20px;
  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    .box-wrap {
      display: flex;
      align-items: center;
      gap: 15px;
      width: 100%;
      height: 120px;
      border-bottom: 1px solid ${colors.disabled};
      .box-img {
        width: calc(23% - 20px);
        height: 85px;
        border-radius: 20px;
        box-shadow: 1px 1px 10px 1px rgba(51, 51, 51, 0.5);
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          object-fit: fill;
        }
      }
      .box-text {
        width: 78%;
        cursor: pointer;
        > div {
          :nth-of-type(1) {
            font-size: 20px;
            font-weight: 500;
          }
          :nth-of-type(2) {
            font-size: 13px;
            color: ${colors.disabled};
          }
          :nth-of-type(3) {
            margin-top: 10px;
          }
        }
      }
    }
  }
`;
