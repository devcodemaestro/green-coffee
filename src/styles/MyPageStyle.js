import styled from "@emotion/styled";

export const MyPageWrap = styled.div`
  padding-top: 30px;
  margin: 0;
  width: 100%;
  > div {
    color: #444;
    :nth-of-type(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: #BF8A30;
      padding-bottom: 20px;
    }
    :nth-of-type(2) {
      padding: 0 0 5px 10px;
    }
    :nth-of-type(3) {
      padding: 0 0 50px 10px;
    }
  }
`;

export const ItemWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  color: #444;
  & div {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 20px;
    cursor: pointer;
    border-bottom: 1px solid #d9d9d9;
    padding: 0 0 10px 15px;
  }
`;
/* export const ItemWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
  color: #444;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(33.333% - 20px);
    height: 100px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 1px rgba(51, 51, 51, 0.2);
    cursor: pointer;
  }
`; */
