import styled from "@emotion/styled";

export const OrderWrap = styled.div`
  padding-top: 35px;
  .menu-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid #d9d9d9;
    & .menu-tab {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 45px;
      cursor: pointer;
      :hover {
        color: #fff;
      }
    }
    & .menu-active {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 45px;
      cursor: pointer;
      border-bottom: 2px solid #bf8a30;
    }
  }
`;

export const BannerWrap = styled.div`
  width: 100%;
  height: 135px;
  background: red;
  border-radius: 14px;
`;

export const ItemBoxWrap = styled.div`
  width: 100%;
  padding-top: 20px;
  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    .box-wrap {
      display: flex;
      align-items: center;
      gap: 15px;
      width: 100%;
      height: 120px;
      border-bottom: 1px solid #d9d9d9;
      .box-img {
        width: 85px;
        height: 85px;
        border-radius: 20px;
        box-shadow: 1px 1px 10px 1px rgba(51, 51, 51, 0.5);
        img {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          object-fit: fill;
        }
      }
      .box-text {
        > div {
          :nth-of-type(1) {
            font-size: 20px;
            font-weight: 500;
          }
          :nth-of-type(2) {
            font-size: 13px;
            color: #d9d9d9;
          }
          :nth-of-type(3) {
            margin-top: 10px;
          }
        }
      }
    }
  }
`;
