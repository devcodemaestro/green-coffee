import React, { useState } from "react";
import { EmailConfirmWrap } from "../../styles/AccountStyle";
import { Xmark } from "../../styles/ui/buttons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { postEmailCode, postEmailConfirm } from "../../api/signAxios";
import { useNavigate } from "react-router";
import ConfirmModal from "../modals/ConfirmModal";

const EmailConfirm = () => {
  const [payload, setPayload] = useState({
    userEmail: "",
    confirmCode: "",
  });

  const [isConfirm, setIsConfirm] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [errModal, setErrModal] = useState("");
  const navigate = useNavigate();

  const handlePostCode = async e => {
    e.preventDefault();
    const formData = { email: payload.userEmail };
    const result = await postEmailCode(formData);
    if (result) {
      setIsConfirm(false);
    }
  };

  const handleConfirm = async e => {
    e.preventDefault();
    const formData = { email: payload.userEmail, code: payload.confirmCode };
    const result = await postEmailConfirm(formData, setErrModal, setErrMsg);
    console.log(result);
    if (result) {
      setModalOpen(true);
      setMsg(result);
      navigate("/");
    }
  };

  const handleChange = (e, item) => {
    const { value } = e.target;
    setPayload(prev => ({ ...prev, [item]: value }));
  };

  const handleWriteCancel = item => {
    setPayload(prev => ({ ...prev, [item]: "" }));
  };

  const handleOk = () => {
    setModalOpen(false);
  };

  const handleOkOk = () => {
    setErrModal(false);
  };

  return (
    <EmailConfirmWrap>
      <form>
        {isConfirm ? (
          <>
            <div>
              <label htmlFor="sign-nick">이메일 인증</label>
              <div>
                <input
                  type="text"
                  id="sign-nick"
                  placeholder="abcd@gmail.com"
                  className={payload.userEmail ? "isActive-input" : ""}
                  value={payload.userEmail}
                  onChange={e => handleChange(e, "userEmail")}
                />
                {payload.userEmail && (
                  <Xmark
                    style={{ top: "30%" }}
                    icon={faCircleXmark}
                    onClick={() => handleWriteCancel("userEmail")}
                  />
                )}
              </div>
            </div>
            <div className="buttons">
              <button
                className={
                  payload.userEmail.length > 10 ? "isActive-button" : ""
                }
                onClick={handlePostCode}
              >
                이메일 인증
              </button>
            </div>
          </>
        ) : (
          <>
            <div>
              <label htmlFor="sign-nick">이메일 인증</label>
              <div>
                <input
                  type="text"
                  id="sign-nick"
                  className={payload.confirmCode ? "isActive-input" : ""}
                  value={payload.confirmCode}
                  onChange={e => handleChange(e, "confirmCode")}
                />
                {payload.confirmCode && (
                  <Xmark
                    style={{ top: "30%" }}
                    icon={faCircleXmark}
                    onClick={() => handleWriteCancel("confirmCode")}
                  />
                )}
              </div>
            </div>
            <div className="buttons">
              <button
                className={
                  payload.confirmCode.length > 5 ? "isActive-button" : ""
                }
                onClick={handleConfirm}
              >
                인증 확인
              </button>
            </div>
          </>
        )}
      </form>
      {modalOpen && (
        <ConfirmModal open={modalOpen} onConfirm={handleOk}>
          <span>{msg}</span>
        </ConfirmModal>
      )}
      {errModal && (
        <ConfirmModal open={errModal} onConfirm={handleOkOk}>
          <span>{errMsg}</span>
        </ConfirmModal>
      )}
    </EmailConfirmWrap>
  );
};

export default EmailConfirm;
