import React from "react";
import {
  ItemDetail,
  ItemImg,
  MenuDetailsItemWrap,
} from "../../styles/MenuDetailStyle";
import { OrderBtn, PutBtn } from "../../styles/ui/buttons";

const MenuDetailsItem = () => {
  const dummy = [
    {
      menu_id: 1,
      category: "coffee",
      name: "돌체",
      menu_ename: "englishname",
      menu_explain: null,
      menu_origin: null,
      menu_price: 5000,
      menu_imgurl:
        "image/음료/스타벅스 리프레셔/딸기 아사이 레모네이드 스타벅스 리프레셔.jpg",
      menu_bannerimgurl: "image/banner/빽다방.jpg",
    },
    {
      menu_id: 2,
      category: "coffee",
      name: "바닐라 크림 콜드 브루",
      menu_ename: "englishname",
      menu_explain: null,
      menu_origin: null,
      menu_price: 5000,
      menu_imgurl:
        "image/음료/스타벅스 리프레셔/딸기 아사이 레모네이드 스타벅스 리프레셔.jpg",
      menu_bannerimgurl: null,
    },
    {
      menu_id: 3,
      category: "coffee",
      name: "콜드 브루 몰트",
      menu_ename: "englishname",
      menu_explain: null,
      menu_origin: null,
      menu_price: 5000,
      menu_imgurl:
        "image/음료/스타벅스 리프레셔/딸기 아사이 레모네이드 스타벅스 리프레셔.jpg",
      menu_bannerimgurl: null,
    },
    {
      menu_id: 4,
      category: "coffee",
      name: "클래식 아포가토",
      menu_ename: "englishname",
      menu_explain: null,
      menu_origin: null,
      menu_price: 5000,
      menu_imgurl:
        "image/음료/스타벅스 리프레셔/딸기 아사이 레모네이드 스타벅스 리프레셔.jpg",
      menu_bannerimgurl: null,
    },
    {
      menu_id: 5,
      category: "coffee",
      name: "카라멜 프라푸치노",
      menu_ename: "englishname",
      menu_explain: null,
      menu_origin: null,
      menu_price: 5000,
      menu_imgurl:
        "image/음료/스타벅스 리프레셔/딸기 아사이 레모네이드 스타벅스 리프레셔.jpg",
      menu_bannerimgurl: null,
    },
    {
      menu_id: 6,
      category: "coffee",
      name: "자바 칩 프라푸치노",
      menu_ename: "englishname",
      menu_explain: null,
      menu_origin: null,
      menu_price: 5000,
      menu_imgurl:
        "image/음료/스타벅스 리프레셔/딸기 아사이 레모네이드 스타벅스 리프레셔.jpg",
      menu_bannerimgurl: null,
    },
    {
      menu_id: 7,
      category: "coffee",
      name: "아이스 카페 모카",
      menu_ename: "englishname",
      menu_explain: null,
      menu_origin: null,
      menu_price: 5000,
      menu_imgurl:
        "image/음료/스타벅스 리프레셔/딸기 아사이 레모네이드 스타벅스 리프레셔.jpg",
      menu_bannerimgurl: null,
    },
    {
      menu_id: 8,
      category: "coffee",
      name: "딸기 딜라이트 요거트 블렌디드",
      menu_ename: "englishname",
      menu_explain: null,
      menu_origin: null,
      menu_price: 5000,
      menu_imgurl:
        "image/음료/스타벅스 리프레셔/딸기 아사이 레모네이드 스타벅스 리프레셔.jpg",
      menu_bannerimgurl: null,
    },
    {
      menu_id: 9,
      category: "coffee",
      name: "스노우 말차 라떼",
      menu_ename: "englishname",
      menu_explain: null,
      menu_origin: null,
      menu_price: 5000,
      menu_imgurl:
        "image/음료/스타벅스 리프레셔/딸기 아사이 레모네이드 스타벅스 리프레셔.jpg",
      menu_bannerimgurl: null,
    },
    {
      menu_id: 10,
      category: "coffee",
      name: "아이스 스노우 말차 라떼",
      menu_ename: "englishname",
      menu_explain: null,
      menu_origin: null,
      menu_price: 5000,
      menu_imgurl:
        "image/음료/스타벅스 리프레셔/딸기 아사이 레모네이드 스타벅스 리프레셔.jpg",
      menu_bannerimgurl: null,
    },
  ];
  return (
    <>
      {dummy.map((item, index) => (
        <MenuDetailsItemWrap key={index}>
          <div>
            <ItemImg>
              <img src={`${process.env.PUBLIC_URL}/${item.img}`} alt="" />
            </ItemImg>
            <ItemDetail>
              <div>
                <span>{item.menu_id}</span>
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
            <PutBtn>담기</PutBtn>
            <OrderBtn>주문하기</OrderBtn>
          </div>
        </MenuDetailsItemWrap>
      ))}
    </>
  );
};

export default MenuDetailsItem;
