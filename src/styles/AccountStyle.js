import styled from "@emotion/styled";
import { colors } from "./basic";

export const AccountWrap = styled.div`
  color: ${colors.black};
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    & li {
      transition: ease-out 0.3s;
      width: 50%;
      padding: 30px 0 10px 0;
      font-size: 18px;
      font-weight: 600;
      color: ${colors.disabled};
      border-bottom: 2px solid ${colors.disabled};
      text-align: center;
      cursor: pointer;
    }
    .find-true {
      color: ${colors.main};
      border-bottom: 2px solid ${colors.main};
    }
  }
  .find-false {
    color: ${colors.main};
    border-bottom: 2px solid ${colors.main};
  }
`;

export const AccountIdWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  form > div {
    div {
      position: relative;
      padding-top: 5px;
    }
  }
  .warning-message {
    font-size: 12px;
    color: ${colors.red};
    margin: 3px 0 0 3px;
    height: 25px;
  }
  .spacer {
    width: 100%;
    height: 25px;
  }
  & label {
    font-weight: 500;
  }
  & input {
    width: 330px;
    height: 25px;
    border: none;
    border-bottom: 1px solid ${colors.disabled};
    padding: 0 5px;
    font-size: 15px;
  }

  .isActive-input {
    width: 330px;
    height: 25px;
    border: none;
    border-bottom: 1px solid ${colors.point};
    padding: 0 5px;
    font-size: 16px;
  }
  .buttons {
    padding-top: 10px;
    button {
      width: 20.875rem;
      height: 2.8125rem;
      font-size: 1rem;
      font-weight: 700;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.2s;
      :hover {
        box-shadow: 0rem 0rem 0.625rem 0rem rgba(0, 0, 0, 0.15);
      }
    }
    .isActive-button {
      background: ${colors.main};
      transition: ease-out 0.3s;
    }
  }
`;
