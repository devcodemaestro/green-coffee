import styled from "@emotion/styled";

export const HomeWrap = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;

export const HomeInner = styled.div`
  .home-logo {
    width: 100%;
    height: 150px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    > img {
      width: 100%;
      height: 150px;
    }
  }
`;

export const HomeWelcomWrap = styled.div`
  margin-bottom: 20px;
  > .inner {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    > div {
      :first-of-type {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        height: 140px;
      }
      :last-of-type {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-left: 20px;
        color: #444;
        .welcome {
          font-size: 20px;
          font-weight: 500;
        }
        .coupon {
          display: flex;
          flex-direction: column;
          font-size: 14px;
        }
      }
    }
  }
`;

export const HomeSwiperWrap = styled.div`
  width: 100%;
  margin-bottom: 20px;
  > .inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    h3 {
      width: 100%;
      margin-bottom: 8px;
    }
    .swiper-wrap {
      width: 100%;
      height: 150px;
      border-radius: 20px;
      .swiper-slide {
        div {
          > img {
            width: 100%;
            height: 150px;
            object-fit: cover;
          }
        }
      }
      .swiper-button-next {
        display: none;
      }
      .swiper-button-prev {
        display: none;
      }
    }
  }
`;
export const PopularMenuWrap = styled.div`
  width: 100%;
  > .inner {
    h3 {
      margin-bottom: 15px;
    }
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
      width: 100%;
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        width: calc(33.333% - 20px);
        li {
          :first-of-type {
            width: 100%;
            height: 120px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 30px;
            background: #7c1d34;
            box-shadow: 3px 8px 5px 1px rgba(51, 51, 51, 0.5);
            img {
              width: 100%;
              border-radius: 30px;
            }
          }
          :last-of-type {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 14px;
          }
        }
      }
    }
  }
`;
