import React from "react";
import { AccountIdWrap } from "../../styles/AccountStyle";
import { DisabledBtn, MainBtn, Xmark } from "../../styles/ui/buttons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const FindId = ({
  payload,
  formatPhoneNumber,
  handleChange,
  handlePhoneCheck,
  warningMsg,
  handleFindAccount,
  handleWriteCancel,
  buttonColor,
}) => {
  return (
    <AccountIdWrap>
      <form>
        <div>
          <label htmlFor="sign-phone">휴대전화</label>
          <div>
            <input
              type="text"
              id="sign-phone"
              className={payload.phone ? "isActive-input" : ""}
              placeholder="010-1234-1234"
              value={formatPhoneNumber}
              onChange={e => handleChange(e, "phone")}
              onBlur={handlePhoneCheck}
              maxLength={11}
            />
            {payload.phone && (
              <Xmark
                style={{ top: "30%" }}
                icon={faCircleXmark}
                onClick={() => handleWriteCancel("phone")}
              />
            )}
          </div>
          {payload.phone ? (
            <p className="warning-message">{warningMsg.phoneCheck}</p>
          ) : (
            <div className="spacer" />
          )}
        </div>
        <div className="buttons">
          <button
            className={buttonColor ? "isActive-button" : ""}
            onClick={handleFindAccount}
          >
            아이디 찾기
          </button>
        </div>
      </form>
    </AccountIdWrap>
  );
};

export default FindId;
