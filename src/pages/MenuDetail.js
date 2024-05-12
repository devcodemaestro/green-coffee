import React, { useState } from "react";
import { MenuDetailsWrap } from "../styles/MenuDetailStyle";
import MenuDetailsItem from "../components/menu/MenuDetailsItem";
import { getMenuDetailsCate } from "../api/menuDetailsAxios";
import { useNavigate } from "react-router";

const MenuDetail = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async e => {
    e.preventDefault();
    try {
      const result = await getMenuDetailsCate({});
      if (result === 200) {
        setModalOpen(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MenuDetailsWrap>
      <MenuDetailsItem />
    </MenuDetailsWrap>
  );
};
export default MenuDetail;
