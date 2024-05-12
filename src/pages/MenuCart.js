import React, { useEffect, useState } from "react";
import { getCartList } from "../api/menuAxios";
import MenuCartItems from "../components/menucart/MenuCartItems";
import { MenuCartWrap } from "../styles/MenuCartStyle";

const MenuCart = () => {
  const [menuCartData, setMenuCartData] = useState();
  useEffect(() => {
    getCartList(setMenuCartData);
  }, []);
  return (
    <MenuCartWrap>
      <div className="mypage_menu_cart">
        <div className="store_title">대구 중구 중앙로점</div>
        <MenuCartItems menuCartData={menuCartData} />
      </div>
    </MenuCartWrap>
  );
};

export default MenuCart;
