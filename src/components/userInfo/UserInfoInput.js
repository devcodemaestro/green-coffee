import React from "react";
import { UserInputWrap } from "../../styles/UserInfoStyle";

const UserInfoInput = ({ payload, handleAccept, handleChange }) => {
  return (
    <UserInputWrap>
      <form>
        <div>
          <label htmlFor="info-nick">닉네임 (Call Sign)</label>
          <input
            type="text"
            id="info-nick"
            placeholder="닉네임"
            autoComplete="username"
            value={payload.nickname}
            onChange={e => handleChange(e, "nickname")}
          />
        </div>
        <ul>
          <li>
            <label htmlFor="info-phone">휴대전화</label>
            <input
              type="number"
              id="info-phone"
              placeholder="010-1234-5678"
              value={payload.phone}
              onChange={e => handleChange(e, "phone")}
            />
          </li>
          <li>
            <label htmlFor="info-date">생년월일 (6자리)</label>
            <input
              type="number"
              id="info-date"
              placeholder="910101"
              value={payload.birthdate}
              onChange={e => handleChange(e, "birthdate")}
            />
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
