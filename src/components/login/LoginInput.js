import React from "react";
import { LoginInputWrap } from "../../styles/LoginStyle";
import { Link } from "react-router-dom";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { DisabledBtn, Xmark, xmarkStyle } from "../../styles/ui/buttons";

const LoginInput = ({
  payload,
  handleChange,
  handleLogin,
  handleWriteCancel,
}) => {
  return (
    <LoginInputWrap>
      <form>
        <div>
          <label htmlFor="login-id">아이디 (이메일)</label>
          <input
            type="email"
            id="login-id"
            className={payload.email ? "isActiveLine" : ""}
            placeholder="아이디"
            autoComplete="username"
            value={payload.email}
            onChange={e => handleChange(e, "email")}
          />
          <Xmark
            icon={faCircleXmark}
            onClick={() => handleWriteCancel("email")}
          />
        </div>
        <div>
          <label htmlFor="login-pass">비밀번호</label>
          <input
            type="password"
            id="login-pass"
            className={payload.password ? "isActiveLine" : ""}
            placeholder="비밀번호"
            autoComplete="current-password"
            value={payload.password}
            onChange={e => handleChange(e, "password")}
          />
          <Xmark
            icon={faCircleXmark}
            onClick={() => handleWriteCancel("password")}
          />
        </div>
        <ul>
          <li>
            <div>
              <input
                type="checkbox"
                id="login-check"
                name="auto-check"
                className="auto-login"
              />
              <label htmlFor="login-check">자동 로그인</label>
            </div>
            <div>
              <Link to="/findid">아이디찾기</Link> / <Link to="/findpw">비밀번호 찾기</Link>
            </div>

          </li>
          <li>
          <DisabledBtn onClick={handleLogin}>로그인</DisabledBtn>
          </li>
        </ul>
      </form>
      <div className="link">
        <Link to="/terms">아직 회원이 아니신가요?</Link>
      </div>
    </LoginInputWrap>
  );
};

export default LoginInput;
