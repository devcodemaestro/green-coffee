import React from "react";
import { ItemWrap } from "../../styles/MyPageStyle";
import { Link } from "react-router-dom";

const Item = () => {
  const menu = [
    {
      id: "1",
      title: "장바구니",
      path: "/cart",
    },
    {
      id: "2",
      title: "주문내역",
      path: "/orderlist",
    },
    {
      id: "3",
      title: "즐겨찾기",
      path: "/favorite",
    },
    {
      id: "4",
      title: "Pay",
      path: "/mypage",
    },
  ];

  return (
    <ItemWrap>
      <ul>
        <li>정보변경</li>
        {menu.map(item => (
          <Link to={item.path} key={item.id}>
            <li>{item.title}</li>
          </Link>
        ))}
        <li>
          <span>로그아웃</span>
        </li>
      </ul>
    </ItemWrap>
  );
};

export default Item;
