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
  const [passCheck, setPassCheck] = useState("");
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

  const handlePassCheck = () => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/g;
    const isValid = regex.test(payload.password);
    setPassCheck(isValid ? "" : "비밀번호를 양식에 맞춰 작성해주세요.");
  };

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
        passCheck={passCheck}
        passConfirm={passConfirm}
        setPassConfirm={setPassConfirm}
        handleSignUp={handleSignUp}
        buttonColor={buttonColor}
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
