import styled from "@emotion/styled";

export const FavoriteWrap = styled.div`
  padding-top: 25px;
`;
export const FavoriteItemWrap = styled.div`
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 20px;
  > div {
    :first-of-type {
      display: flex;
      align-items: center;
    }
    :last-of-type {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 10px;
      padding: 20px 10px 0 0;
      button {
        width: 75px;
        height: 30px;
        color: #f7f7f7;
        background: #bf8a30;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        :last-of-type {
          width: 100px;
          height: 30px;
          background: #683732;
        }
      }
    }
  }
`;

export const ItemImg = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemDetail = styled.div`
  > div {
    padding-left: 15px;
    :first-of-type {
      display: flex;
      flex-direction: column;
      color: #444;
      > span {
        :nth-of-type(1) {
          font-weight: 500;
        }
        :nth-of-type(2) {
          font-size: 12px;
          color: #d9d9d9;
        }
        :nth-of-type(3) {
          font-size: 14px;
        }
      }
    }
    :last-of-type {
      display: flex;
      align-items: center;
      > span {
        position: relative;
        :not(:first-of-type) {
          padding-left: 8px;
          margin-left: 8px;
          ::before {
            position: absolute;
            left: 0;
            top: 3px;
            content: "";
            width: 1px;
            height: 16px;
            background-color: #bababa;
          }
        }
      }
    }
  }
`;
