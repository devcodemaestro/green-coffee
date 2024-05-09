import styled from "@emotion/styled";
import { colors } from "./basic";

export const PassChangeWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  form {
    > div {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 20px;
      font-size: 16px;
      font-weight: 500;
      > label {
        margin-left: 2px;
        width: 330px;
      }
      > input {
        width: 330px;
        height: 30px;
        border: none;
        border-bottom: 1px solid ${colors.disabled};
        padding: 0 5px;
        font-size: 16px;
      }
      .isActive-input {
        width: 330px;
        height: 25px;
        border: none;
        border-bottom: 1px solid ${colors.point};
        padding: 0 5px;
        font-size: 16px;
      }
      input::placeholder {
        font-size: 13px;
      }
    }
    .warning-message {
      width: 330px;
      font-size: 12px;
      color: ${colors.red};
      padding-top: 5px;
    }
    .buttons {
      width: 100%;
      padding-top: 20px;
      button {
        width: 330px;
        height: 45px;
        font-size: 17px;
        font-weight: 600;
        color: #f7f7f7;
        background: #bf8a30;
        border: none;
        border-radius: 8px;
        cursor: pointer;
      }
    }
  }
`;
