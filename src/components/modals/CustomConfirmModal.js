import React from "react";
import { CustomConfirmModalWrap } from "../../styles/ModalStyle";

const CustomConfirmModal = ({
  open,
  payload,
  menuData,
  setPayload,
  handleCustomAdd,
  handleCustomClose,
}) => {
  return (
    <CustomConfirmModalWrap>
      <div className={open ? "openConfirmModal Confimmodal" : "Confirmmodal"}>
        {open && (
          <div className="modalConfirm-wrapper">
            <div className="modalConfirm-content">
              <div className="modal-title">
                <h3>나만의 음료 만들기</h3>
              </div>
              <div className="modal-content">
                <div className="modal-img">
                  <img
                    src={`https://back.green-coffee.shop/${menuData[0]?.menu_imgurl}`}
                    alt=""
                  />
                </div>
                <div className="modal-name">
                  <label htmlFor="">나만의 메뉴 이름</label>
                  <input
                    value={payload.myname}
                    onChange={e =>
                      setPayload({ ...payload, myname: e.target.value })
                    }
                    placeholder="백종원도 놀란 라떼"
                  />
                  <div>
                    사이즈:{" "}
                    {payload.size == "0"
                      ? "Tall"
                      : payload.size == "1"
                        ? "Grande"
                        : "Venti"}
                  </div>
                  <div>샷: {payload.shot}개</div>
                  <div>
                    얼음:{" "}
                    {payload.ice == "0"
                      ? "적게"
                      : payload.ice == "1"
                        ? "보통"
                        : "많이"}
                  </div>
                  <div>휘핑: {payload.cream}번</div>
                </div>
              </div>
              <div className="modal-buttons">
                <button onClick={handleCustomClose}>닫기</button>
                <button onClick={handleCustomAdd}>추가</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </CustomConfirmModalWrap>
  );
};

export default CustomConfirmModal;
