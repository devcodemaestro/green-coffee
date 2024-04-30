import styled from "@emotion/styled";

export const MyPageWrap = styled.div`
  padding-top: 30px;
  margin: 0;
  > div {
    color: #444;
    :nth-of-type(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: #b99470;
      padding-bottom: 20px;
    }
    :nth-of-type(2) {
      padding-left: 10px;
      padding: 0 0 5px 10px;
    }
    :nth-of-type(3) {
      padding: 0 0 40px 10px;
    }
  }
`;

export const ItemWrap = styled.div`
  width: 100%;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
    flex-wrap: wrap;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90px;
      height: 85px;
      border-radius: 8px;
      box-shadow: 1px 1px 5px 1px rgba(51, 51, 51, 0.2);
      cursor: pointer;
    }
    a {
      width: 90px;
      height: 85px;
      color: #444;
    }
  }
`;
