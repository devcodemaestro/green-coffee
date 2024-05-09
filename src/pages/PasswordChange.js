import React, { useState } from "react";
import { PassChangeWrap } from "../styles/PassChangeStyle";
import { useNavigate } from "react-router";
import PassCheck from "../components/PassCheck";
import { postPassCheck } from "../api/userInfoAxios";
import { useRecoilValue } from "recoil";
import { UserStateAtom } from "../recoil/atoms/UserState";

const PasswordChange = () => {
  const data = useRecoilValue(UserStateAtom);
  const [payload, setPayload] = useState({
    email: data?.email,
    password: "",
  });
  const [pass, setPass] = useState("");
  const [passCheckBoolean, setPassCheckBoolean] = useState(false);
  const [errState, setErrState] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate("/mypage");
  };
  const handleOk = () => {
    navigate("/mypage");
  };
  const handlePassAccept = async e => {
    e.preventDefault();
    const data = { password: pass };
    try {
      const { result } = await postPassCheck(data, setErrState);
      if (result === 200) {
        setPassCheckBoolean(true);
      }
    } catch (err) {
      setErrMsg("비밀번호가 틀렸습니다.");
    }
  };
  return (
    <PassChangeWrap>
      {passCheckBoolean ? (
        <>
          <div>
            <label htmlFor="change-newpass">새 비밀번호</label>
            <input
              type="password"
              id="change-newpass"
              placeholder="영문과 숫자를 모두 포함하는 8~20자"
              autoComplete="current-password"
              value={payload.password}
            />
          </div>
          <div>
            <label htmlFor="change-newpassok">새 비밀번호 확인</label>
            <input
              type="password"
              id="change-newpassok"
              placeholder="영문과 숫자를 모두 포함하는 8~20자"
              autoComplete="current-password"
            />
          </div>
          <div className="buttons">
            <button onClick={handleAccept}>확인</button>
          </div>
        </>
      ) : (
        <PassCheck
          accept={handlePassAccept}
          err={errState}
          errMsg={errMsg}
          pass={pass}
          setPass={setPass}
        />
      )}
    </PassChangeWrap>
  );
};

export default PasswordChange;
