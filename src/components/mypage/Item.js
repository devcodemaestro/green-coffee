import React from "react";
import { ItemWrap } from "../../styles/MyPageStyle";
import { Link } from "react-router-dom";

const Item = ({ handleLogout }) => {
  const menu = [
    {
      id: "1",
      title: "회원정보 변경",
      path: "/userinfo",
    },
    {
      id: "2",
      title: "비밀번호 변경",
      path: "/passchange",
    },
    {
      id: "3",
      title: "장바구니",
      path: "/cart",
    },
    {
      id: "4",
      title: "주문내역",
      path: "/orderlist",
    },
    {
      id: "5",
      title: "즐겨찾기",
      path: "/favorite",
    },
    {
      id: "6",
      title: "Pay",
      path: "/mypage",
    },
    {
      id: "7",
      title: "회원탈퇴",
      path: "/resign",
    },
  ];

  return (
    <ItemWrap>
      {menu.map(item => (
        <div key={item.id}>
          <Link to={`${item.path}`}>{item.title}</Link>
        </div>
      ))}
      <div>
        <span onClick={handleLogout}>로그아웃</span>
      </div>
    </ItemWrap>
  );
};

export default Item;
