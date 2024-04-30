import styled from "@emotion/styled";

export const FooterWrap = styled.div`
  width: 500px;
  position: fixed;
  bottom: 0;
  height: 60px;
  background: #f7f7f7;
  overflow: hidden;
`;

export const FooterInner = styled.ul`
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & li {
    font-size: 26px;
    .nav-link {
      color: #d9d9d9;
    }
    .nav-link-active {
      color: #b99470;
    }
  }
`;
