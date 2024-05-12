import React, { useEffect, useState } from "react";
import {
  cartDeleteOut,
  cartPriceCheck,
  postPayment,
} from "../../api/menuAxios";
import { MenuCartItemsWrap, PaymentBtn } from "../../styles/MenuCartStyle";
import {
  faCircleXmark,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";

const MenuCartItems = ({ menuCartData, openChangeOption }) => {
  const [itemQuantities, setItemQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const priceCheck = async () => await cartPriceCheck(setTotalPrice);

  const handleTotalPrice = () => {
    let total = 0;
    menuCartData.forEach(item => {
      total += itemQuantities[item.cartmenu_id] * item.menu?.menu_price;
    });
    setTotalPrice(total);
  };

  const handleItemQuantities = () => {
    const initQuantities = {};
    menuCartData.forEach(item => {
      initQuantities[item.cartmenu_id] = item.quantity;
    });
    setItemQuantities(initQuantities);
  };

  const handledecrease = cartmenuId => {
    setItemQuantities(prevQuantities => ({
      ...prevQuantities,
      [cartmenuId]: Math.max(prevQuantities[cartmenuId] - 1, 0),
    }));
    handleTotalPrice();
  };

  const handleincrease = cartmenuId => {
    setItemQuantities(prevQuantities => ({
      ...prevQuantities,
      [cartmenuId]: prevQuantities[cartmenuId] + 1,
    }));
    handleTotalPrice();
  };

  const handlePayment = async () => {
    const updatedItems = menuCartData.map(item => ({
      cartmenu_id: item.cartmenu_id,
      ice: item.ice,
      shot: item.shot,
      cream: item.cream,
      quantity: itemQuantities[item.cartmenu_id] || 0,
    }));
    try {
      const result = await postPayment(updatedItems);
      if (result === 200) {
        navigate("/orderlist");
      }
    } catch (error) {
      console.error("결제 오류:", error);
    }
  };

  const formatPrice = price => price.toLocaleString();

  const deleteMenuItem = async item => {
    console.log("delete menu item", item);
    const form = {
      menuId: item[0],
      quantity: item[1],
      cartId: item[2],
      ice: item[3],
      shot: item[4],
      cream: item[5],
    };
    await cartDeleteOut(form);
  };

  useEffect(() => {
    handleItemQuantities();
    priceCheck();
  }, [menuCartData]);

  return (
    <MenuCartItemsWrap>
      <div>
        {menuCartData.map(item => (
          <div key={item.cartmenu_id} className="item-wrap">
            <div className="item-img-wrap">
              <img
                src={`http://back.green-coffee.shop/${item.menu?.menu_imgurl}`}
                alt=""
              />
            </div>
            <div className="item-text-wrap">
              <div>{item.menu?.name}</div>
              <div>
                <span>
                  Ice:
                  {item.ice == "1" ? "적게" : item.ice == "2" ? "보통" : "많이"}
                </span>
                <span>Size: Grande</span>
              </div>
              <div>
                <span>Shot: {item.shot}개</span>
                <span>Cream: {item.cream}개</span>
              </div>
              <div>{formatPrice(item.menu?.menu_price)}원</div>
            </div>
            <div className="item-price-wrap">
              <div className="del-btn">
                <FontAwesomeIcon icon={faCircleXmark} className="del-bt" />
              </div>
              <div className="pm-icon-wrap">
                <div>
                  <button onClick={openChangeOption}>옵션변경</button>
                </div>
                <div
                  className="pm-icon"
                  onClick={() => handledecrease(item.cartmenu_id)}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </div>
                <div>{itemQuantities[item.cartmenu_id]}</div>
                <div
                  className="pm-icon"
                  onClick={() => handleincrease(item.cartmenu_id)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <PaymentBtn onClick={() => handlePayment()}>
        {formatPrice(totalPrice)}원 결제하기
      </PaymentBtn>
    </MenuCartItemsWrap>
  );
};

export default MenuCartItems;
