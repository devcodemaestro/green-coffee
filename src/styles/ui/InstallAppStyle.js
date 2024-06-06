import styled from "@emotion/styled";
import { colors } from "../basic";

export const PwaInstall = styled.div`
padding-top: 30px;
  div {
    span {
      font-size: 17px;
      font-weight: 600;
      color: ${colors.point};
    }
  }
  button {
    width: 330px;
    height: 40px;
    border: none;
    background: ${colors.main};
    color: ${colors.white};
    font-size: 18px;
    font-weight: 600s;
    border-radius: 8px;
    cursor: pointer;
  }
`;
