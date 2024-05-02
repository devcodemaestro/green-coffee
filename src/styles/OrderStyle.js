import styled from "@emotion/styled";

export const OrderWrap = styled.div`
  padding-top: 35px;
  .menu-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    & .menu-tab {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90px;
      height: 45px;
      background: #d9d9d9;
      border-radius: 8px;
      cursor: pointer;
      :hover {
        background: #683732;
        color: #fff;
      }
    }
    & .menu-active {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90px;
      height: 45px;
      background: #d9d9d9;
      border-radius: 8px;
      cursor: pointer;
      background: #683732;
      color: #fff;
    }
  }
`;

export const BannerWrap = styled.div`
  width: 100%;
  height: 135px;
  background: red;
  border-radius: 14px;
`;

export const BoxWrap = styled.div`
  width: 100%;
  > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    .box-wrap {
      width: calc(50% - 20px);
      height: 220px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #d9d9d9;
      border-radius: 10px;
      .box-img {
        width: 150px;
        height: 120px;
        background: red;
        border-radius: 10px;
      }
      .box-text {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-left: 9%;
        > div {
          :nth-of-type(1) {
            font-size: 20px;
            font-weight: 500;
          }
          :nth-of-type(2) {
            font-size: 13px;
            color: #f7f7f7;
          }
          :nth-of-type(3) {
          }
        }
      }
    }
  }
`;
