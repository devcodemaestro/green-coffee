import React, { useState } from "react";
import { EmailConfirmWrap } from "../../styles/AccountStyle";
import { Xmark } from "../../styles/ui/buttons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { postEmailConfirm } from "../../api/signAxios";
import { useNavigate } from "react-router";

const EmailConfirm = () => {
  const [payload, setPayload] = useState({
    userEmail: "",
    confirmCode: "",
  });

  const [isConfirm, setIsConfirm] = useState(false);
  const navigate = useNavigate();
  const handlePostCode = () => {
    postEmailConfirm(setIsConfirm);
  };
  const handleConfirm = () => {
    // postEmailConfirm(setIsConfirm);
    const res = "abbcd123";
    navigate("/findpass", { state: { pass: res } });
  };
  const handleChange = (e, item) => {
    const { value } = e.target;
    setPayload(prev => ({ ...prev, [item]: value }));
  };
  const handleWriteCancel = item => {
    setPayload(prev => ({ ...prev, [item]: "" }));
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
    </EmailConfirmWrap>
  );
};

export default EmailConfirm;
