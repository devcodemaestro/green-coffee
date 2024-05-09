import styled from "@emotion/styled";
import { colors } from "./basic";

export const MyPageWrap = styled.div`
  padding-top: 30px;
  margin: 0;
  width: 100%;
  > div {
    color: ${colors.black};
    :nth-of-type(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: ${colors.main};
      padding-bottom: 20px;
    }
    :nth-of-type(2) {
      padding: 0 0 5px 10px;
    }
    :nth-of-type(3) {
      padding: 0 0 50px 10px;
    }
  }
`;

export const ItemWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  color: ${colors.black};
  & div {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 20px;
    border-bottom: 1px solid ${colors.disabled};
    padding: 0 0 10px 15px;
    a {
      width: 100%;
    }
    :last-of-type {
      margin-bottom: 5px;
      span {
        width: 100%;
        cursor: pointer;
      }
    }
  }
`;
