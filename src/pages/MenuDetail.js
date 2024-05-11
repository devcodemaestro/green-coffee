import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { postOrderDetail } from "../api/orderAxios";

const MenuDetail = () => {
  const [menuData, setMenuData] = useState([]);
  const { menu_id, name } = useParams();

  const formData = { menu_id: menu_id, name: name };

  useEffect(() => {
    postOrderDetail(formData, setMenuData);
  }, [menu_id]);
  console.log(menuData);
  return (
    <div>
      <div>{menuData[0]?.name}</div>
      <div>{menuData[0]?.menu_ename}</div>
      <div>{menuData[0]?.price}</div>
    </div>
  );
};

export default MenuDetail;
