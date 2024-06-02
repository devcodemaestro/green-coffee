import React from "react";
import { CartModalWrap } from "../../styles/ModalStyle";

const CartModal = ({ open, handleMoveCart, handleAddOrder, children }) => {
  return (
    <CartModalWrap>
      <div className={open ? "openConfirmModal Confimmodal" : "Confirmmodal"}>
        {open && (
          <div className="modalConfirm-wrapper">
            <div className="modalConfirm-content">
              {children}
              <div className="modal-buttons">
                <button onClick={handleMoveCart}>장바구니로 이동</button>
                <button onClick={handleAddOrder}>추가 주문 하기</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </CartModalWrap>
  );
};

export default CartModal;
