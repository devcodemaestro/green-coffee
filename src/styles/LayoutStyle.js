import styled from "@emotion/styled";

export const LayoutWrap = styled.div`
  position: relative;
  width: 100%;
  /* height: 100vh; */
  margin: 0 auto;
  background: #fff;
  .space {
    margin-bottom: 60px;
  }
  @media all and (min-width: 767px) {
    width: 480px;
  }
`;

export const LayoutInner = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  margin: 0 auto;
  @media all and (min-width: 767px) {
    width: 480px;
  }
`;
