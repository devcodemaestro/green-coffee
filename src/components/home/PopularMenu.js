import React from "react";
import { PopularMenuWrap } from "../../styles/HomeStyle";

const PopularMenu = () => {
  const menuData = [
    {
      pk: "1",
      title: "캬라멜 마끼야토",
      img: "assets/menu.png",
      price: "6,500원",
    },
    {
      pk: "2",
      title: "카푸치노 라떼",
      img: "assets/menu.png",
      price: "5,500원",
    },
    {
      pk: "3",
      title: "프라푸치노",
      img: "assets/menu.png",
      price: "6,000원",
    },
    {
      pk: "4",
      title: "에스프레소",
      img: "assets/menu.png",
      price: "5,000원",
    },
    {
      pk: "5",
      title: "에스프레소",
      img: "assets/menu.png",
      price: "5,000원",
    },
    {
      pk: "6",
      title: "에스프레소",
      img: "assets/menu.png",
      price: "5,000원",
    },
  ];

  return (
    <PopularMenuWrap>
      <div className="inner">
        <h3>추천메뉴</h3>
        <div className="content">
          {menuData.map(item => (
            <ul key={item.pk}>
              <li>
                <img src={`${process.env.PUBLIC_URL}/${item.img}`} alt="" />
              </li>
              <li>
                <span>{item.title}</span>
                <span>{item.price}</span>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </PopularMenuWrap>
  );
};

export default PopularMenu;
