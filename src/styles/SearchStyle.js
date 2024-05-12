import styled from "@emotion/styled";
import { colors } from "./basic";

export const SearchWrap = styled.div``;

export const SearchInputWrap = styled.div`
  padding: 30px 0 0 0;
  span {
    :first-of-type {
      color: ${colors.main};
      padding-left: 25px;
    }
  }
  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    input {
      width: calc(100% - 40px);
      height: 50px;
      border: 1px solid ${colors.main};
      border-radius: 10px;
      background: ${colors.white};
      padding-left: 40px;
    }
    .search-icon {
      position: absolute;
      top: 45%;
      left: 8%;
      color: ${colors.main};
    }
  }
`;

export const SearchListWrap = styled.div`
  .search-result {
    padding: 15px 0 10px 23px;
    border-bottom: 1px solid ${colors.main};
  }
  .search-inner {
    padding-top: 20px;
  }
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
`;
