import styled from "@emotion/styled";

export const TermsWrap = styled.div`
  padding-top: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;
  }
  .info-text {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    padding-bottom: 20px;
  }
  & input[type="checkbox"] {
    display: none;
  }
  & input[type="checkbox"] + label {
    display: inline-block;
    cursor: pointer;
    width: 334px;
    height: 45px;
    border: 1px solid #583732;
    border-radius: 8px;
    line-height: 45px;
    text-align: center;
    font-size: 18px;
  }
  & input[type="checkbox"] + label {
    background-color: #fff;
    color: #583732;
  }
  & input[type="checkbox"]:checked + label {
    background-color: #b99470;
    color: #222;
    border: none;
  }
  & button {
    width: 334px;
    height: 45px;
    font-size: 16px;
    font-weight: 500;
    color: #f7f7f7;
    border: none;
    border-radius: 8px;
    background: #b99470;
    cursor: pointer;
    margin-top: 20px;
  }
`;

export const TermsButtonWrap = styled.div`
  ul {
    li {
      margin-bottom: 20px;
      & input[type="checkbox"] {
        display: none;
      }
      & input[type="checkbox"] + label {
        display: inline-block;
        cursor: pointer;
        width: 334px;
        height: 45px;
        border: 1px solid #583732;
        border-radius: 8px;
        line-height: 45px;
        text-align: center;
        font-size: 18px;
      }
      & input[type="checkbox"] + label {
        background-color: #fff;
        color: #d9d9d9;
      }
      & input[type="checkbox"]:checked + label {
        background-color: #b99470;
        color: #222;
        border: none;
      }
    }
    .text {
      padding-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        :last-of-type {
          font-size: 12px;
          cursor: pointer;
        }
      }
    }
    .markecting-consent {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      > input[type="checkbox"] {
        display: none;
      }
      > input[type="checkbox"] + label {
        display: inline-block;
        cursor: pointer;
        height: 45px;
        width: 160px;
        border: 1px solid #583732;
        border-radius: 8px;
        line-height: 45px;
        text-align: center;
        font-size: 18px;
      }
      > input[type="checkbox"] + label {
        background-color: #fff;
        color: #d9d9d9;
      }
      > input[type="checkbox"]:checked + label {
        background-color: #b99470;
        color: #222;
        border: none;
      }
    }
  }
`;
