import styled from "@emotion/styled";

export const SignUpWrap = styled.div`
  width: 100%;
  padding-top: 30px;
`;

export const SignInputWrap = styled.div`
  width: 100%;
  & form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 5px;
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        > label {
          margin-left: 2px;
          width: 100%;
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
      button {
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
`;
