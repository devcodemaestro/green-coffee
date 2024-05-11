import React, { useEffect, useState } from "react";
import FindId from "../components/account/FindId";
import FindPw from "../components/account/FindPw";
import { AccountWrap } from "../styles/AccountStyle";
import { postFindAccount } from "../api/signAxios";
import ConfirmModal from "../components/modals/ConfirmModal";
import { useNavigate } from "react-router";

const FindAccount = () => {
  const [payload, setPayload] = useState({
    nickname: "",
    phone: "",
  });
  const [warningMsg, setWarningMsg] = useState({
    nickCheck: "",
    phoneCheck: "",
  });
  const [findState, setFindState] = useState(true);
  const [buttonColor, setButtonColor] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [resultMsg, setResultMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [resultState, setResultState] = useState(0);
  const handleChange = (e, item) => {
    const { value } = e.target;
    setPayload(prev => ({ ...prev, [item]: value }));
  };
  const navigate = useNavigate();

  const handleNickCheck = () => {
    const regex = /[^가-힣]/;
    const isValid = regex.test(payload.nickname);
    setWarningMsg(warningMsg => ({
      ...warningMsg,
      nickCheck:
        payload.nickname && payload.nickname.length < 2
          ? "2글자 이상 입력해주세요."
          : isValid
            ? "명확한 한글단어가 아닙니다."
            : "",
    }));
  };

  const handlePhoneCheck = () => {
    const regex = /^\d{11}$/;
    const isValid = regex.test(payload.phone);
    setWarningMsg(warningMsg => ({
      ...warningMsg,
      phoneCheck: isValid && payload.phone ? "" : "전화번호를 확인해주세요.",
    }));
  };

  const phoneFormatter = num => {
    try {
      num = num.replace(/\s/gi, "");

      if (num.length === 11) {
        return num.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
      } else {
        return num;
      }
    } catch (err) {
      return num;
    }
  };

  const formatPhoneNumber = phoneFormatter(payload.phone);

  const handleWriteCancel = item => {
    setPayload(prev => ({ ...prev, [item]: "" }));
  };

  const handleFindAccount = async e => {
    e.preventDefault();
    try {
      const resStatus = await postFindAccount({
        findState,
        payload,
        setResultMsg,
        setErrMsg,
      });
      setResultState(resStatus);
      setModalOpen(true);
    } catch (err) {
      setErrMsg("작성하신 내용을 다시 확인해주세요.");
    }
  };

  const handleConfirm = () => {
    if (resultState === 200 && 201) {
      setModalOpen(false);
      navigate("/");
    } else {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    const checkPayload = Object.values(payload).every(value => value !== "");
    setButtonColor(checkPayload);
  }, [payload]);

  useEffect(() => {
    setPayload({
      nickname: "",
      phone: "",
    });
  }, [findState]);
  return (
    <AccountWrap>
      <ul>
        <li
          className={findState ? "find-true" : ""}
          onClick={() => setFindState(true)}
        >
          아이디 찾기
        </li>
        <li
          className={findState ? "" : "find-false"}
          onClick={() => setFindState(false)}
        >
          비밀번호 찾기
        </li>
      </ul>
      {findState ? (
        <FindId
          payload={payload}
          formatPhoneNumber={formatPhoneNumber}
          handleChange={handleChange}
          handleNickCheck={handleNickCheck}
          handlePhoneCheck={handlePhoneCheck}
          warningMsg={warningMsg}
          handleFindAccount={handleFindAccount}
          handleWriteCancel={handleWriteCancel}
          buttonColor={buttonColor}
        />
      ) : (
        <FindPw
          payload={payload}
          formatPhoneNumber={formatPhoneNumber}
          handleChange={handleChange}
          handleNickCheck={handleNickCheck}
          handlePhoneCheck={handlePhoneCheck}
          warningMsg={warningMsg}
          handleFindAccount={handleFindAccount}
          handleWriteCancel={handleWriteCancel}
          buttonColor={buttonColor}
        />
      )}
      {modalOpen && (
        <ConfirmModal open={modalOpen} onConfirm={handleConfirm}>
          {errMsg !== "" ? (
            <span>{errMsg}</span>
          ) : resultState === (200 || 201) && findState === true ? (
            <span>아이디: {resultMsg}</span>
          ) : (
            <span>임시비밀번호: {resultMsg}</span>
          )}
        </ConfirmModal>
      )}
    </AccountWrap>
  );
};

export default FindAccount;
