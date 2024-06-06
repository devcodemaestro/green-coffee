import styled from "@emotion/styled";
import { colors } from "../basic";

export const DropboxWrap = styled.div`
  position: relative;
  display: inline-block;
  div {
    button {
      width: 390px;
      height: 40px;
      font-size: 17px;
      border: 1px solid ${colors.main};
      border-radius: 4px;
      background: ${colors.white};
      cursor: pointer;
    }
  }
  ul {
    position: absolute;
    margin: 0;
    padding: 0;
    list-style: none;
    background: white;
    border: 1px solid #ccc;
    width: 100%;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.9s ease-out;
    li {
      width: 390px;
      padding: 15px 0;
      border-top: 1px solid ${colors.disabled};
      cursor: pointer;
      text-align: center;
      :hover {
        background: ${colors.disabled};
      }
    }
  }

  ul.show {
    max-height: 800px;
    bottom: 100%;
    opacity: 1;
    z-index: 1200;
    border: 1px solid ${colors.main};
    border-bottom: none;
    transition: max-height 0.9s ease-in;
  }
`;
