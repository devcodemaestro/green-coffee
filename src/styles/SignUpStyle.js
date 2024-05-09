import styled from "@emotion/styled";
import { colors } from "./basic";

export const SignUpWrap = styled.div`
  padding-top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SignInputWrap = styled.form`
  width: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  .warning-message {
    font-size: 12px;
    color: #eb5757;
  }
  div {
    font-size: 16px;
    font-weight: 500;
    & label {
      margin-left: 2px;
    }
    & input {
      width: 330px;
      height: 25px;
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
    & input::placeholder {
      font-size: 13px;
      color: ${colors.disabled};
    }
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    li {
      width: 160px;
      & label {
        margin-left: 2px;
      }
      & input {
        width: 160px;
        height: 25px;
        border: none;
        border-bottom: 1px solid #d9d9d9;
        padding: 0 5px;
        font-size: 16px;
        margin-top: 5px;
      }
      .isActive-input {
        width: 160px;
        height: 25px;
        border: none;
        border-bottom: 1px solid #6a1b1b;
        padding: 0 5px;
        font-size: 16px;
        margin-top: 5px;
      }
      & input::placeholder {
        font-size: 13px;
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
  }
`;
