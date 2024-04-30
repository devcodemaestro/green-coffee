import React from "react";
import { UserInputWrap } from "../../styles/UserInfoStyle";

const UserInfoInput = ({ handlePageMove, handleOk }) => {
  return (
    <UserInputWrap>
      <form>
        <div>
          <label htmlFor="info-nick">닉네임 (Call Sign)</label>
          <input type="text" id="info-nick" placeholder="닉네임" />
        </div>
        <div className="password">
          <div>
            <label htmlFor="info-pass">비밀번호</label>
            <button onClick={handlePageMove}>변경</button>
          </div>
          <input
            type="password"
            id="info-pass"
            placeholder="비밀번호 입력"
            autoComplete="current-password"
          />
        </div>
        <div>
          <label htmlFor="info-passok">비밀번호 확인</label>
          <input
            type="password"
            id="info-passok"
            placeholder="비밀번호 재 입력"
            autoComplete="current-password"
          />
        </div>
        <ul>
          <li>
            <label htmlFor="info-phone">휴대전화</label>
            <input type="number" id="info-phone" placeholder="010-1234-5678" />
          </li>
          <li>
            <label htmlFor="info-date">생년월일 (6자리)</label>
            <input type="number" id="info-date" placeholder="910101" />
          </li>
        </ul>
        <div className="buttons">
          <button onClick={handleOk}>확인</button>
        </div>
      </form>
    </UserInputWrap>
  );
};

export default UserInfoInput;
