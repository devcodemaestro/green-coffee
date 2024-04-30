import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ConfirmModalWarp, ModalOkBtn } from "../../styles/ModalStyle";

const ConfirmModal = ({ open, onConfirm, children }) => {
  return (
    <div>
      <ConfirmModalWarp>
        <div className={open ? "openConfirmModal Confimmodal" : "Confirmmodal"}>
          {open && (
            <div className="modalConfirm-wrapper">
              <div className="modalConfirm-img">
                  <FontAwesomeIcon icon={faUserCheck} className="img" />
              </div>
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
    </div>
  );
};

export default ConfirmModal;
