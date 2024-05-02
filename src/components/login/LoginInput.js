import React from "react";
import { LoginInputWrap } from "../../styles/LoginStyle";
import { Link } from "react-router-dom";

const LoginInput = ({ payload, handleChange, handleLogin }) => {
  return (
    <LoginInputWrap>
      <form>
        <div>
          <label htmlFor="login-id">아이디 (이메일)</label>
          <input
            type="email"
            id="login-id"
            placeholder="아이디"
            autoComplete="username"
            value={payload.email}
            onChange={e => handleChange(e, "email")}
          />
        </div>
        <div>
          <label htmlFor="login-pass">비밀번호</label>
          <input
            type="password"
            id="login-pass"
            placeholder="비밀번호"
            autoComplete="current-password"
            value={payload.password}
            onChange={e => handleChange(e, "password")}
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
              <span>아이디 / 비밀번호 찾기</span>
            </div>
          </li>
          <li>
            <button onClick={handleLogin}>로그인</button>
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
