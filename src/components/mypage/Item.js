import React from "react";
import { ItemWrap } from "../../styles/MyPageStyle";
import { useNavigate } from "react-router-dom";

const Item = () => {
  const navigate = useNavigate();
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
  const handlePageMove = path => {
    navigate(path);
  };

  return (
    <ItemWrap>
      <div>
        <span>정보변경</span>
      </div>
      {menu.map(item => (
        <div key={item.id} onClick={() => handlePageMove(item.path)}>
          <span>{item.title}</span>
        </div>
      ))}
      <div>
        <span>로그아웃</span>
      </div>
    </ItemWrap>
  );
};

export default Item;
