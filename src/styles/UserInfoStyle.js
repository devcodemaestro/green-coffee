import styled from "@emotion/styled";

export const UserInfoWrap = styled.div`
  width: 100%;
  padding-top: 30px;
`;

export const UserInputWrap = styled.div`
  width: 100%;
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      font-size: 16px;
      font-weight: 500;
      > label {
        margin-left: 2px;
        width: 350px;
      }
      > input {
        width: 350px;
        height: 30px;
        border: none;
        border-bottom: 1px solid #583732;
        padding: 0 5px;
        font-size: 16px;
      }
      input::placeholder {
        font-size: 13px;
      }
    }
    .password {
      > div {
        width: 350px;
        display: flex;
        justify-content: space-between;
        padding-right: 5px;
        margin-left: 2px;
        button {
          width: 70px;
          height: 25px;
          background: #583732;
          color: #fff;
          border: none;
          cursor: pointer;
          border-radius: 4px;
        }
      }
    }
    > ul {
      width: 350px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        width: 160px;
        > label {
          margin-left: 2px;
        }
        > input {
          width: 160px;
          height: 25px;
          border: none;
          border-bottom: 1px solid #583732;
          padding: 0 5px;
          font-size: 16px;
          margin-top: 5px;
        }
        input::placeholder {
          font-size: 13px;
        }
      }
    }
    .buttons {
      width: 100%;
      button {
        width: 350px;
        height: 45px;
        font-size: 17px;
        font-weight: 600;
        color: #f7f7f7;
        background: #b99470;
        border: none;
        border-radius: 8px;
        cursor: pointer;
      }
    }
  }
`;
