import styled from "@emotion/styled";
import { colors, mq, shadow } from "../styles/basic";

export const LoginWrap = styled.div`
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    > div {
      :first-of-type {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 28px;
        color: #6a1b1b;
        padding-bottom: 50px;
      }
      :last-of-type {
        width: 330px;
        display: flex;
        flex-direction: column;
        h3 {
          padding-bottom: 20px;
        }
        span {
          padding-bottom: 20px;
        }
      }
    }
  }
`;

export const LoginInputWrap = styled.div`
  width: 330px;
  .warning-message {
    font-size: 12px;
    color: #eb5757;
  }
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    > div > div {
      position: relative;
      font-size: 16px;
      font-weight: 500;
      > label {
        margin-left: 2px;
        width: 100%;
      }
      > input {
        width: 330px;
        height: 25px;
        border: none;
        border-bottom: 1px solid ${colors.disabled};
        padding: 0 5px;
        font-size: 16px;
      }
      input::placeholder {
        font-size: 13px;
        color: ${colors.disabled};
      }
      .isActiveLine {
        border-bottom: 1px solid ${colors.point};
      }
    }
    > ul {
      li {
        > div {
          cursor: pointer;
        }

        :first-of-type {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 10px;
          & input {
            margin-right: 5px;
            cursor: pointer;
          }
          & label {
            cursor: pointer;
          }
        }
        :last-of-type {
          padding-top: 20px;
          // 컴포넌트로 뽑겠습니다.
          // & button {
          //   width: 334px;
          //   height: 45px;
          //   font-size: 17px;
          //   font-weight: 600;
          //   color: #f7f7f7;
          //   background: #BF8A30;
          //   border: none;
          //   border-radius: 8px;
          //   cursor: pointer;
          // }
        }
        a:hover {
          color: #6a1b1b;
          transition: 0.2s;
          font-weight: 700;
        }
      }
    }
  }
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    > a {
      color: #444;
    }
    a:hover {
      color: #6a1b1b;
      transition: 0.2s;
      font-weight: 700;
    }
  }
`;
