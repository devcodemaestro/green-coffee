import styled from "@emotion/styled";

export const FooterWrap = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 60px;
  background: #f7f7f7;
  overflow: hidden;

  @media all and (min-width: 767px) {
    width: 480px;
    /* margin: 0 auto; */
  }
`;

export const FooterInner = styled.ul`
  height: 60px;
  display: flex;
  /* justify-content: center; */
  /* gap: 50px; */
  justify-content: space-around;
  align-items: center;
  & li {
    font-size: 28px;
    .nav-link {
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      color: #d9d9d9;
    }
    .nav-link-active {
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      color: #BF8A30;
    }
  }
`;
