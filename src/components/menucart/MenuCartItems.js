import React, { useState } from "react";
import { MenuCartItemsWrap } from "../../styles/MenuCartStyle";
import ChangeOption from "./ChangeOption";

const MenuCartItems = ({ menuCartData }) => {
  console.log(menuCartData);
  const [showModal, setShowModal] = useState(false);

  const formatPrice = price => price.toLocaleString();
  const temp = [1, 2, 3, 4, 5];

  const deleteMenuItem = () => {
    console.log("delete menu item");
  };

  const openChangeOption = () => {
    setShowModal(true);
  };

  const updateItemCount = flag => {
    flag == "plus" ? "plus" : flag == "minus" ? "minus" : null;
  };

  return (
    <>
      <MenuCartItemsWrap>
        {temp.map(item => (
          <li key={item}>
            <div className="menu_img">
              <div className="img_wrap"></div>
            </div>
            <div className="menu_info">
              <button
                className="del_btn"
                onClick={() => deleteMenuItem()}
              ></button>
              <span className="menu_title">카라멜 마끼야토</span>
              <span className="menu_price">Won. 6500</span>
              <span className="menu_option">얼음: 보통 샷:4</span>
              <div className="menu_change_option">
                <button onClick={() => openChangeOption()}>옵션변경</button>
                <div className="menu_add">
                  <button onClick={() => updateItemCount("minus")}></button>
                  <span>1</span>
                  <button onClick={() => updateItemCount("plus")}></button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </MenuCartItemsWrap>
      {showModal ? <ChangeOption setShowModal={setShowModal} /> : ""}
    </>
  );
};

export default MenuCartItems;
