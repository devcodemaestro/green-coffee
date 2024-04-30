import styled from "@emotion/styled";

export const LoginWrap = styled.div`
  width: 100%;
  .inner {
    padding-top: 30px;
    .logo {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 50px;
    }
  }
`;

export const LoginInputWrap = styled.div`
  width: 100%;
  & form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
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
        border-bottom: 1px solid #583732;
        padding: 0 5px;
        font-size: 16px;
      }
      input::placeholder {
        font-size: 13px;
      }
    }
    > ul {
      li {
        :first-of-type {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 10px;
          & input {
            margin-right: 5px;
          }
        }
        :last-of-type {
          padding-top: 20px;
          & button {
            width: 334px;
            height: 45px;
            font-size: 17px;
            font-weight: 600;
            color: #f7f7f7;
            background: #b99470;
            border: none;
            border-radius: 8px;
          }
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
  }
`;
