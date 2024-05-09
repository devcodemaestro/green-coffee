import React from "react";
import { ItemBoxWrap } from "../../styles/OrderStyle";

const ItemBox = ({ menuData }) => {
  return (
    <ItemBoxWrap>
      <div>
        {menuData.map(item => (
          <div key={item.menu_id} className="box-wrap">
            <div className="box-img">
              <img src={`${item.menu_imgurl}`} alt="" />
            </div>
            <div className="box-text">
              <div>{item.name}</div>
              <div>{item.menu_ename}</div>
              <div>{item.menu_price}원</div>
            </div>
          </div>
        ))}
      </div>
    </ItemBoxWrap>
  );
};

export default ItemBox;
