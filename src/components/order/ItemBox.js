import React from "react";
import { ItemBoxWrap } from "../../styles/OrderStyle";

const ItemBox = ({ menuData }) => {
  return (
    <ItemBoxWrap>
      <div>
        {menuData.map(item => (
          <div key={item.menu_id} className="box-wrap">
            <div className="box-img">
              <img src={`${item.mimgurl}`} alt="" />
            </div>
            <div className="box-text">
              <div>{item.mname}</div>
              <div>{item.mename}</div>
              <div>{item.price}원</div>
            </div>
          </div>
        ))}
      </div>
    </ItemBoxWrap>
  );
};

export default ItemBox;
