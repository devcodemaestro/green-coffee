import styled from "@emotion/styled";

export const TermsWrap = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    width: 76.15%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
    color: #444;
    padding-bottom: 20px;
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
    border: 1px solid #6a1b1b;
    border-radius: 8px;
    line-height: 43px;
    text-align: center;
    font-size: 16px;
  }
  & input[type="checkbox"] + label {
    background-color: #fff;
    color: #6a1b1b;
  }
  & input[type="checkbox"]:checked + label {
    background-color: #6a1b1b;
    color: #fff;
    border: none;
  }
`;
/* .no-active-button {
    width: 334px;
    height: 45px;
    font-size: 16px;
    font-weight: 500;
    color: #f7f7f7;
    border: none;
    border-radius: 8px;
    background: #d9d9d9;
    cursor: pointer;
    margin-top: 20px;
  }
  .active-button {
    width: 334px;
    height: 45px;
    font-size: 16px;
    font-weight: 500;
    color: #f7f7f7;
    border: none;
    border-radius: 8px;
    background: #BF8A30;
    cursor: pointer;
    margin-top: 20px;
  }
`; 
*/

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
        border: 1px solid #6a1b1b;
        border-radius: 8px;
        text-align: center;
        font-size: 16px;
      }
      & input[type="checkbox"] + label {
        background-color: #fff;
        color: #d9d9d9;
      }
      & input[type="checkbox"]:checked + label {
        background-color: #6a1b1b;
        color: #fff;
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
        border: 1px solid #6a1b1b;
        border-radius: 8px;
        text-align: center;
        font-size: 16px;
      }
      > input[type="checkbox"] + label {
        background-color: #fff;
        color: #d9d9d9;
      }
      > input[type="checkbox"]:checked + label {
        background-color: #6a1b1b;
        color: #fff;
        border: none;
      }
    }
  }
`;
