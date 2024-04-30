import styled from "@emotion/styled";

export const HomeWrap = styled.div`
  width: 100%;
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
        width: 140px;
        height: 140px;
        background: #f0f0f0;
        border-radius: 50%;
      }
      :last-of-type {
        display: flex;
        flex-direction: column;
        gap: 20px;
        > h2 {
          color: #444;
        }
        > .buttons {
          display: flex;
          gap: 10px;
          button {
            :first-of-type {
              width: 80px;
              height: 35px;
              border-radius: 6px;
              border: none;
              color: #f7f7f7;
              background: #b99470;
              cursor: pointer;
            }
            :last-of-type {
              width: 80px;
              height: 35px;
              border-radius: 6px;
              border: 1px solid #b99470;
              color: #b99470;
              background: #fff;
              cursor: pointer;
            }
          }
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
      height: 130px;
      border-radius: 20px;
      .swiper-slide {
        div {
          > img {
            width: 100%;
            height: 130px;
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
      margin-bottom: 8px;
    }
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 11px;
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        li {
          :first-of-type {
            width: 100px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 20px;
            background: #f0f0f0;
            box-shadow: 1px 1px 5px 1px rgba(51, 51, 51, 0.2);
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
