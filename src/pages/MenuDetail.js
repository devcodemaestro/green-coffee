import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { postOrderDetail } from "../api/orderAxios";
import SizeItem from "../components/menudetail/SizeItem";
import OptionItem from "../components/menudetail/OptionItem";
import { DetailWrap } from "../styles/MenuDetailStyle";
import TotalPrice from "../components/menudetail/TotalPrice";
import { postCartAdd } from "../api/cartAxios";
import ConfirmModal from "../components/modals/ConfirmModal";

const MenuDetail = () => {
  const { cate, menu_id, name } = useParams();
  const [menuData, setMenuData] = useState([]);
  const [payload, setPayload] = useState({
    ice: 0,
    shot: 0,
    cream: 0,
    shotPrice: 500,
    creamPrice: 500,
  });
  const [totalEa, SetTotalEa] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const formData = { menu_id: menu_id, name: name };

  const handlePlusMinus = (option, value) => {
    setPayload(prev => {
      const newValue = prev[option] + value;

      const updatedValue = newValue < 0 ? 0 : newValue;
      return {
        ...prev,
        [option]: updatedValue,
      };
    });
  };

  const handletotalPM = (value, option) => {
    SetTotalEa(prev => {
      let newValue = prev + value;
      const updatedValue = newValue < 1 ? 1 : newValue;

      if (option === "shot" && value === 1) {
        setPayload(prevPayload => ({
          ...prevPayload,
          shot: prevPayload.shot + 1,
        }));
      } else if (option === "cream" && value === 1) {
        setPayload(prevPayload => ({
          ...prevPayload,
          cream: prevPayload.cream + 1,
        }));
      }

      return updatedValue;
    });
  };

  const handleTotalPrice = () => {
    const menuPrice = menuData[0]?.menu_price || 0;
    const totalOptionPrice =
      payload.shot * payload.shotPrice + payload.cream * payload.creamPrice;
    const totalMenuPrice = menuPrice * totalEa;
    const totalPrice = totalMenuPrice + totalOptionPrice * totalEa;
    setTotalPrice(totalPrice);
  };

  const handleAddCart = async e => {
    e.preventDefault();
    const formData = {
      menuId: menu_id,
      quantity: totalEa,
      ice: payload.ice,
      shot: payload.shot,
      cream: payload.cream,
    };
    try {
      const result = await postCartAdd(formData);
      if (result === 200) {
        setModalOpen(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleConfirm = () => {
    setModalOpen(false);
    navigate("/order");
  };

  useEffect(() => {
    postOrderDetail(formData, setMenuData);
  }, [menu_id]);

  useEffect(() => {
    handleTotalPrice();
  }, [menuData, payload, totalEa]);

  return (
    <DetailWrap>
      <div className="menu-info-wrap">
        <div className="menu-img">
          <img
            src={`http://back.green-coffee.shop/${menuData[0]?.menu_imgurl}`}
            alt=""
          />
        </div>
        <div className="menu-info-text">
          <span>{menuData[0]?.name}</span>
          <span>{menuData[0]?.menu_ename}</span>
        </div>
        <div>
          <span>{menuData[0]?.menu_price}원</span>
        </div>
      </div>
      {cate === "coffee" || cate === "beverage" ? <SizeItem /> : <div></div>}
      <div className="menu-notice">
        <span>유의사항</span>
        <span>※메뉴 이미지는 이미지컷으로 실제 메뉴와 다를 수 있습니다.</span>
      </div>
      {cate === "coffee" || cate === "beverage" ? (
        <OptionItem
          payload={payload}
          setPayload={setPayload}
          handlePlusMinus={handlePlusMinus}
        />
      ) : (
        <div></div>
      )}

      <TotalPrice
        totalEa={totalEa}
        totalPrice={totalPrice}
        handletotalPM={handletotalPM}
        handleAddCart={handleAddCart}
      />
      {modalOpen && (
        <ConfirmModal open={modalOpen} onConfirm={handleConfirm}>
          <span>장바구니에 메뉴를 추가했습니다.</span>
        </ConfirmModal>
      )}
    </DetailWrap>
  );
};

export default MenuDetail;
