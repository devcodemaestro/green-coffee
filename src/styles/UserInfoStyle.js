import styled from "@emotion/styled";
import { colors } from "./basic";

export const UserInfoWrap = styled.div`
  width: 100%;
  padding-top: 30px;
`;

export const UserInputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & form {
    > div {
      font-size: 16px;
      font-weight: 500;
      padding-bottom: 20px;
      > div {
        position: relative;
      }
      & label {
        margin-left: 5px;
        width: 330px;
      }
      & input {
        width: 330px;
        height: 30px;
        border: none;
        border-bottom: 1px solid #583732;
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
      }
    }
    ul {
      width: 100%;
      padding-bottom: 30px;
      display: flex;
      justify-content: space-between;
      li {
        width: 160px;
        position: relative;
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
    .warning-message {
      padding-top: 3px;
      font-size: 12px;
      color: #eb5757;
    }
    .buttons {
      width: 100%;
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

export const UserConfirmWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #444;
  > h3 {
    padding-bottom: 30px;
  }
  > span {
    font-size: 13px;
  }
  > form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding-top: 30px;
    input {
      width: 330px;
      height: 25px;
      padding: 0 5px;
      font-size: 16px;
      border: none;
      border-bottom: 1px solid #d9d9d9;
    }
    button {
      width: 335px;
      height: 45px;
      font-size: 17px;
      font-weight: 600;
      color: #fff;
      background: #bf8a30;
      border-radius: 8px;
      border: none;
      cursor: pointer;
    }
    .err-message {
      color: #eb5757;
    }
  }
`;
