import React from "react";
import {
  ConfirmModalWarp,
  ModalNoBtn,
  ModalOkBtn,
} from "../../styles/ModalStyle";

const ChoiceModal = ({ open, onConfirm, onCancel, children }) => {
  return (
    <ConfirmModalWarp>
      <div className={open ? "openConfirmModal Confimmodal" : "Confirmmodal"}>
        {open && (
          <div className="modalConfirm-wrapper">
            <div className="modalConfirm-content">
              {children}
              <div className="modal-buttons">
                <button onClick={onConfirm}>확인</button>
                <button onClick={onCancel}>취소</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </ConfirmModalWarp>
  );
};

export default ChoiceModal;
