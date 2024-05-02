import React from "react";
import { BoxWrap } from "../../styles/OrderStyle";

const ItemBox = ({ menuData }) => {
  return (
    <BoxWrap>
      <div>
        {menuData.map(item => (
          <div key={item.id} className="box-wrap">
            <div className="box-img">
              <img src={`${item.mimgurl}`} alt="" />
            </div>
            <div className="box-text">
              <div>{item.mname}</div>
              <div>{item.mename}</div>
              <div>{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </BoxWrap>
  );
};

export default ItemBox;
