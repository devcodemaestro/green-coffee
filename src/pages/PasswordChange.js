import React, { useState } from "react";
import { PassChangeWrap } from "../styles/PassChangeStyle";
import { useNavigate } from "react-router";
import PassCheck from "../components/PassCheck";
import { postPassCheck, putUserInfo } from "../api/userInfoAxios";
import { useRecoilValue } from "recoil";
import { UserStateAtom } from "../recoil/atoms/UserState";
import { Xmark } from "../styles/ui/buttons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import ConfirmModal from "../components/modals/ConfirmModal";

const PasswordChange = () => {
  const data = useRecoilValue(UserStateAtom);
  const [payload, setPayload] = useState({
    email: data?.email,
    password: "",
  });
  const [passConfirm, setPassConfirm] = useState("");
  const [warningMsg, setWarningMsg] = useState({
    passCheck: "",
    passConfirmCheck: "",
  });
  const [pass, setPass] = useState("");
  const [passCheckBoolean, setPassCheckBoolean] = useState(false);
  const [errState, setErrState] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handlePassCheck = () => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,20}$/g;
    const isValid = regex.test(payload.password);
    setWarningMsg(warningMsg => ({
      ...warningMsg,
      passCheck: isValid ? "" : "비밀번호를 양식에 맞춰 작성해주세요.",
    }));
  };

  const handlePassCrossCheck = () => {
    setWarningMsg(warningMsg => {
      const newWarningMsg = { ...warningMsg };

      newWarningMsg.passConfirmCheck =
        passConfirm !== payload.password ? "비밀번호가 일치하지 않습니다." : "";

      return newWarningMsg;
    });
  };

  const handleAccept = async e => {
    e.preventDefault();

    try {
      const { status } = await putUserInfo(payload);
      if (status === 202) {
        setModalOpen(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleOk = () => {
    setModalOpen(false);
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
        <form>
          <div>
            <label htmlFor="change-newpass">새 비밀번호</label>
            <input
              type="password"
              id="change-newpass"
              className={payload.password ? "isActive-input" : ""}
              placeholder="영문과 숫자를 모두 포함하는 6~20자"
              autoComplete="current-password"
              value={payload.password}
              onChange={e =>
                setPayload({ ...payload, password: e.target.value })
              }
              onBlur={handlePassCheck}
            />
            {payload.password && (
              <Xmark
                style={{ top: "70%" }}
                icon={faCircleXmark}
                onClick={() => setPayload({ ...payload, password: "" })}
              />
            )}
          </div>
          {payload.password && (
            <span className="warning-message">{warningMsg.passCheck}</span>
          )}
          <div>
            <label htmlFor="change-newpassok">새 비밀번호 확인</label>
            <input
              type="password"
              id="change-newpassok"
              className={passConfirm ? "isActive-input" : ""}
              placeholder="영문과 숫자를 모두 포함하는 6~20자"
              autoComplete="current-password"
              value={passConfirm}
              onChange={e => setPassConfirm(e.target.value)}
              onBlur={handlePassCrossCheck}
            />
            {passConfirm && (
              <Xmark
                style={{ top: "70%" }}
                icon={faCircleXmark}
                onClick={() => setPassConfirm("")}
              />
            )}
          </div>
          {passConfirm && (
            <span className="warning-message">
              {warningMsg.passConfirmCheck}
            </span>
          )}
          <div className="buttons">
            <button onClick={handleAccept}>확인</button>
          </div>
        </form>
      ) : (
        <PassCheck
          accept={handlePassAccept}
          err={errState}
          errMsg={errMsg}
          pass={pass}
          setPass={setPass}
        />
      )}
      {modalOpen && (
        <ConfirmModal open={modalOpen} onConfirm={handleOk}>
          <span>비밀번호가 변경 되었습니다.</span>
        </ConfirmModal>
      )}
    </PassChangeWrap>
  );
};

export default PasswordChange;
