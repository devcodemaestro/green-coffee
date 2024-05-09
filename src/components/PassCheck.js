import React from "react";
import { UserConfirmWrap } from "../styles/UserInfoStyle";

const PassCheck = ({ accept, err, errMsg, pass, setPass }) => {
  return (
    <UserConfirmWrap>
      <h3>비밀번호를 입력해주세요.</h3>
      <span>회원 정보를 안전하게 보호하기 위해</span>
      <span>현재 사용하고 있는 비밀번호를 입력해주세요.</span>
      <form>
        <input
          type="password"
          id="password"
          value={pass}
          onChange={e => setPass(e.target.value)}
          autoComplete="off"
          autoFocus
        />
        {err && <span className="err-message">{errMsg}</span>}
        <button onClick={accept}>확인</button>
      </form>
    </UserConfirmWrap>
  );
};

export default PassCheck;
