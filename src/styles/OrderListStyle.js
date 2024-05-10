import styled from "@emotion/styled";
import { colors } from "./basic";

export const OrderListWrap = styled.div`
  .date_select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d9d9d9;
    padding: 10px 15px;
  }
  .btn button {
    color: #b99470;
    border: 1px solid #b99470;
    padding: 5px;
    border-radius: 800px;
  }
`;

export const OrderListItemWrap = styled.div`
  ul li {
    display: flex;
    align-items: center;
    font-size: 15px;
    color: ${colors.black};
    padding: 15px;
    border-bottom: 1px solid ${colors.disabled};
    .left_area {
      width: 75px;
      height: 75px;
      min-width: 75px;
      .img_wrap img {
        border-radius: 15px;
        overflow: hidden;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .right_area {
      width: calc(100% - 75px);
      display: flex;
      flex-direction: column;
      padding-left: 20px;
      .name {
        font-weight: 600;
        padding-bottom: 2px;
      }
      .info {
        display: flex;
        /* justify-content: space-between; */
        .box02 {
          font-weight: 600;
        }
      }
      .state {
        margin-top: 10px;
      }
    }
  }
`;
