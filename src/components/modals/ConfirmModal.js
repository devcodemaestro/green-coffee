import React from "react";
import { ConfirmModalWarp, ModalOkBtn } from "../../styles/ModalStyle";

const ConfirmModal = ({ open, onConfirm, children }) => {
  return (
    <ConfirmModalWarp>
      <div className={open ? "openConfirmModal Confimmodal" : "Confirmmodal"}>
        {open && (
          <div className="modalConfirm-wrapper">
            <div className="modalConfirm-content">
              {children}
              <div>
                <ModalOkBtn onClick={onConfirm}>확인</ModalOkBtn>
              </div>
            </div>
          </div>
        )}
      </div>
    </ConfirmModalWarp>
  );
};

export default ConfirmModal;
