import React from "react";
import { ModalOkBtn, PwaModalWrap } from "../../styles/ModalStyle";

const PwaModal = ({ open, onConfirm, children }) => {
  return (
    <PwaModalWrap>
      <div className={open ? "openConfirmModal Confimmodal" : "Confirmmodal"}>
        {open && (
          <div className="modalConfirm-wrapper">
            <div className="modalConfirm-content">
              {children}
              <div>
                <button className="pwa-modal-ok" onClick={onConfirm}>확인</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </PwaModalWrap>
  );
};

export default PwaModal;
