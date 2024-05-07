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
    emailCheck: "",
    passCheck: "",
    passConfirmCheck: "비밀번호가 일치하지 않습니다.",
    nickCheck: "",
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
  console.log(payload.phone);
  const handleChange = (e, item) => {
    const { value } = e.target;
    setPayload({ ...payload, [item]: value });

    const checkPayload = Object.values(payload).every(value => value !== "");
    const checkPassConfirm = passConfirm !== "";

    setButtonColor(checkPayload && checkPassConfirm);
  };

  const handlePassCheck = () => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/g;
    const isValid = regex.test(payload.password);
    setWarningMsg(warningMsg => ({
      ...warningMsg,
      passCheck: isValid ? "" : "비밀번호를 양식에 맞춰 작성해주세요.",
    }));
  };

  // const handlePassCrossCheck = () => {
  //   setWarningMsg(warningMsg => ({
  //     ...warningMsg,
  //     passConfirmCheck:
  //       passConfirm !== payload.password ? "비밀번호가 일치하지 않습니다." : "",
  //     nickCheck: payload.nickname.length < 2 ? "2글자 이상 입력해주세요." : "",
  //     birthCheck: payload.birthdate.length !== 6 ? "생년월일을 확인해주세요." : "",
  //     phoneCheck: payload.phone.length !== 11 ? "전화번호를 확인해주세요." : "",
  //   }));
  // };

  const handlePassCrossCheck = () => {
    setWarningMsg(warningMsg => {
      const newWarningMsg = { ...warningMsg };

      newWarningMsg.passConfirmCheck =
        passConfirm !== payload.password ? "비밀번호가 일치하지 않습니다." : "";

      newWarningMsg.nickCheck =
        payload.nickname && payload.nickname.length < 2
          ? "2글자 이상 입력해주세요."
          : "";

      newWarningMsg.birthCheck =
        payload.birthdate && payload.birthdate.length !== 6
          ? "생년월일을 확인해주세요."
          : "";

      newWarningMsg.phoneCheck =
        payload.phone && payload.phone.length !== 11
          ? "전화번호를 확인해주세요."
          : "";

      return newWarningMsg;
    });
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

  return (
    <SignUpWrap>
      <SignUpInput
        payload={payload}
        handleChange={handleChange}
        handlePassCheck={handlePassCheck}
        warningMsg={warningMsg}
        passConfirm={passConfirm}
        setPassConfirm={setPassConfirm}
        handleSignUp={handleSignUp}
        buttonColor={buttonColor}
        handlePassCrossCheck={handlePassCrossCheck}
        formatPhoneNumber={formatPhoneNumber}
      />
      {modalOpen && (
        <ConfirmModal open={modalOpen} onConfirm={handleConfirm}>
          <span>가입이 완료되었습니다.</span>
          <span>로그인 후 이용해주세요.</span>
        </ConfirmModal>
      )}
    </SignUpWrap>
  );
};

export default SignUp;
