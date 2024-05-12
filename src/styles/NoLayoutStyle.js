import styled from "@emotion/styled";

export const NoLayoutWrap = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  background: #fff;
  @media all and (min-width: 767px) {
    width: 480px;
  }
`;

export const NoLayoutInner = styled.main`
  width: 100%;
  height: 100%;
  padding: 60px 0 20px 0;
  margin: 0 auto;
  @media all and (min-width: 767px) {
    width: 480px;
  }
`;
