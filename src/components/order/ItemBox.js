import React from "react";

const ItemBox = ({ menuData }) => {
  return (
    <div>
      <div>
        {menuData.map(item => (
          <div key={item.id}>{item.mname}</div>
        ))}
      </div>
    </div>
  );
};

export default ItemBox;
