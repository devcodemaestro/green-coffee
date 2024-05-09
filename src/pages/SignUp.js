import React, { useState } from "react";
import SignUpInput from "../components/signup/SignUpInput";
import { SignUpWrap } from "../styles/SignUpStyle";
import { postSignUp } from "../api/signAxios";
import { useNavigate } from "react-router";
import ConfirmModal from "../components/modals/ConfirmModal";

const SignUp = () => {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
    nickname: "",
    phone: "",
    birthdate: "",
  });

  const [buttonColor, setButtonColor] = useState(false);
  const [passConfirm, setPassConfirm] = useState("");
  const [warningMsg, setWarningMsg] = useState({
    emailCheck: "이메일 형식을 확인해주세요.",
    passCheck: "비밀번호를 양식에 맞춰 작성해주세요.",
    passConfirmCheck: "비밀번호가 일치하지 않습니다.",
    nickCheck: "2글자 이상 한글을 입력해주세요.",
    phoneCheck: "",
    birthCheck: "",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async e => {
    e.preventDefault();
    try {
      const result = await postSignUp({ payload });
      if (result === 200) {
        setModalOpen(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e, item) => {
    const { value } = e.target;
    setPayload({ ...payload, [item]: value });

    const checkPayload = Object.values(payload).every(value => value !== "");
    const checkPassConfirm = passConfirm !== "";

    setButtonColor(checkPayload && checkPassConfirm);
  };

  const handleEmailCheck = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = regex.test(payload.email);
    setWarningMsg(warningMsg => ({
      ...warningMsg,
      emailCheck: isValid ? "" : "이메일 형식을 확인해주세요.",
    }));
  };

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

  const handleBirthCheck = () => {
    const regex = /^\d{6}$/;
    const isValid = regex.test(payload.birthdate);
    setWarningMsg(warningMsg => ({
      ...warningMsg,
      birthCheck:
        isValid && payload.birthdate ? "" : "생년월일을 확인해주세요.",
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

  const handleConfirm = () => {
    setModalOpen(false);
    navigate("/");
  };

  const handleWriteCancel = item => {
    setPayload({ ...payload, [item]: "" });
    switch (item) {
      case "email":
        setWarningMsg(warningMsg => ({
          ...warningMsg,
          emailCheck: "이메일 형식을 확인해주세요.",
        }));
        break;
      case "password":
        setWarningMsg(warningMsg => ({
          ...warningMsg,
          passCheck: "비밀번호를 양식에 맞춰 작성해주세요.",
        }));
        break;
      case "nickname":
        setWarningMsg(warningMsg => ({
          ...warningMsg,
          nickCheck: "2글자 이상 한글을 입력해주세요.",
        }));
        break;
      case "birthdate":
        setWarningMsg(warningMsg => ({
          ...warningMsg,
          birthCheck: "생년월일을 확인해주세요.",
        }));
        break;
      case "phone":
        setWarningMsg(warningMsg => ({
          ...warningMsg,
          phoneCheck: "전화번호를 확인해주세요.",
        }));
        break;
      default:
        break;
    }
  };

  return (
    <SignUpWrap>
      <SignUpInput
        payload={payload}
        handleChange={handleChange}
        warningMsg={warningMsg}
        passConfirm={passConfirm}
        setPassConfirm={setPassConfirm}
        handleSignUp={handleSignUp}
        buttonColor={buttonColor}
        handlePassCheck={handlePassCheck}
        handleEmailCheck={handleEmailCheck}
        handleNickCheck={handleNickCheck}
        handleBirthCheck={handleBirthCheck}
        handlePhoneCheck={handlePhoneCheck}
        handlePassCrossCheck={handlePassCrossCheck}
        formatPhoneNumber={formatPhoneNumber}
        handleWriteCancel={handleWriteCancel}
      />
      {modalOpen && (
        <ConfirmModal open={modalOpen} onConfirm={handleConfirm}>
          <span>
            가입이 완료되었습니다. <br />
            로그인 화면으로 이동합니다.
          </span>
        </ConfirmModal>
      )}
    </SignUpWrap>
  );
};

export default SignUp;
