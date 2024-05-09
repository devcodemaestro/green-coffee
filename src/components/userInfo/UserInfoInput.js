import React from "react";
import { UserInputWrap } from "../../styles/UserInfoStyle";
import { Xmark } from "../../styles/ui/buttons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const UserInfoInput = ({
  payload,
  handleAccept,
  handleChange,
  formatPhoneNumber,
  handlePhoneCheck,
  handleBirthCheck,
  handleNickCheck,
  handleWriteCancel,
  warningMsg,
}) => {
  return (
    <UserInputWrap>
      <form>
        <div>
          <label htmlFor="info-nick">닉네임</label>
          <div>
            <input
              type="text"
              id="info-nick"
              className={payload.nickname ? "isActive-input" : ""}
              placeholder="닉네임"
              autoComplete="username"
              value={payload.nickname}
              onChange={e => handleChange(e, "nickname")}
              onBlur={handleNickCheck}
            />
            {payload.nickname && (
              <Xmark
                style={{ top: "20%" }}
                icon={faCircleXmark}
                onClick={() => handleWriteCancel("nickname")}
              />
            )}
          </div>
          {payload.nickname && (
            <p className="warning-message">{warningMsg.nickCheck}</p>
          )}
        </div>
        <ul>
          <li>
            <label htmlFor="info-phone">휴대전화</label>
            <div>
              <input
                type="text"
                id="info-phone"
                className={payload.phone ? "isActive-input" : ""}
                placeholder="010-1234-5678"
                value={formatPhoneNumber}
                onChange={e => handleChange(e, "phone")}
                onBlur={handlePhoneCheck}
                maxLength={11}
              />
              {payload.phone && (
                <Xmark
                  style={{ top: "45%" }}
                  icon={faCircleXmark}
                  onClick={() => handleWriteCancel("phone")}
                />
              )}
            </div>
            {payload.phone && (
              <div>
                <span className="warning-message">{warningMsg.phoneCheck}</span>
              </div>
            )}
          </li>
          <li>
            <label htmlFor="info-date">생년월일 (6자리)</label>
            <div>
              <input
                type="text"
                id="info-date"
                className={payload.birthdate ? "isActive-input" : ""}
                placeholder="910101"
                value={payload.birthdate}
                onChange={e => handleChange(e, "birthdate")}
                onBlur={handleBirthCheck}
                maxLength={6}
              />
              {payload.birthdate && (
                <Xmark
                  style={{ top: "45%" }}
                  icon={faCircleXmark}
                  onClick={() => handleWriteCancel("birthdate")}
                />
              )}
            </div>
            {payload.birthdate && (
              <span className="warning-message">{warningMsg.birthCheck}</span>
            )}
          </li>
        </ul>
        <div className="buttons">
          <button onClick={handleAccept}>확인</button>
        </div>
      </form>
    </UserInputWrap>
  );
};

export default UserInfoInput;
