import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
  width: 100%;
  height: 60px;
`;

export const HeaderInner = styled.ul`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding: 0 20px;
  border-bottom: 1px solid #d0d0d0;
  box-shadow: 0px 0px 5px 0px rgba(51, 51, 51, 0.2);
  > li:nth-of-type(1) {
    cursor: pointer;
    width: 24px;
  }
  > li:nth-of-type(2) {
    h1 {
      font-size: 24px;
    }
  }
  > li:nth-of-type(3) {
    width: 24px;
  }
`;
