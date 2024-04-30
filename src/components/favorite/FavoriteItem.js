import React from "react";
import {
  FavoriteItemWrap,
  ItemDetail,
  ItemImg,
} from "../../styles/FavoriteStyle";

const FavoriteItem = () => {
  const dummy = [
    {
      pk: 1,
      img: "assets/coffee1.png",
      customName: "나만의 카푸치노",
      menuName: "카푸치노",
      shot: 5,
      ice: "보통",
      cream: 2,
      price: "8,000",
    },
    {
      pk: 1,
      img: "assets/coffe2.png",
      customName: "세상에서 제일 맛있는 모카라떼",
      menuName: "모카라떼",
      shot: 5,
      ice: "보통",
      cream: 2,
      price: "7,500",
    },
    {
      pk: 2,
      img: "assets/bake1.png",
      customName: "백종원이 알려준 비법 크루아상",
      menuName: "크로아상",
      jam: 3,
      butter: 1,
      cheese: 2,
      price: "8,000",
    },
  ];
  return (
    <>
      {dummy.map((item, index) => (
        <FavoriteItemWrap key={index}>
          <div>
            <ItemImg>
              <img src={`${process.env.PUBLIC_URL}/${item.img}`} alt="" />
            </ItemImg>
            <ItemDetail>
              <div>
                <span>{item.customName}</span>
                <span>{item.menuName}</span>
                <span>{item.price}원</span>
              </div>
              {item.pk === 1 && (
                <div>
                  <span>샷: {item.shot}</span>
                  <span>얼음: {item.ice}</span>
                  <span>크림: {item.cream}</span>
                </div>
              )}
              {item.pk === 2 && (
                <div>
                  <span>잼: {item.jam}</span>
                  <span>버터: {item.butter}</span>
                  <span>치즈: {item.cheese}</span>
                </div>
              )}
              {item.pk === 3 && (
                <div>
                  <span>샷: {item.shot}</span>
                  <span>얼음: {item.ice}</span>
                  <span>크림: {item.cream}</span>
                </div>
              )}
            </ItemDetail>
          </div>
          <div>
            <button>담기</button>
            <button>주문하기</button>
          </div>
        </FavoriteItemWrap>
      ))}
    </>
  );
};

export default FavoriteItem;
