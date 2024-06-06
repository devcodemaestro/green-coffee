import React, { useEffect, useState } from "react";
import { FavoriteWrap } from "../styles/FavoriteStyle";
import FavoriteItem from "../components/favorite/FavoriteItem";
import { getCustomMenu } from "../api/menuAxios";
import DropDown from "../components/DropDown";

const Favorite = () => {
  const [customData, setCustomData] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  const handleTotalPrice = () => {
    const menuPrice = customData?.menu.menu_price || 0;
    const totalOptionPrice =
      customData.size * customData.price_size +
      customData.shot * customData.price_shot +
      customData.cream * customData.price_cream;
    const totalPrice = menuPrice + totalOptionPrice;
  };

  useEffect(() => {
    getCustomMenu(setCustomData);
  }, []);

  return (
    <FavoriteWrap>
      <FavoriteItem customData={customData} />
      <DropDown />
    </FavoriteWrap>
  );
};

export default Favorite;
