import React from "react";
import { TestModalWarp } from "../../styles/ModalStyle";
import { CheckoutPage, TossCheck } from "../TossCheck";

const TestModal = ({ open }) => {
  return (
    <TestModalWarp>
      <div className={open ? "openConfirmModal Confimmodal" : "Confirmmodal"}>
        {open && (
          <div className="modalConfirm-wrapper">
            <div className="modalConfirm-content">
              <TossCheck />
            </div>
          </div>
        )}
      </div>
    </TestModalWarp>
  );
};

export default TestModal;
