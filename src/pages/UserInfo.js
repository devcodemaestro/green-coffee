import React, { useState } from "react";
import UserInfoInput from "../components/userInfo/UserInfoInput";
import { UserInfoWrap } from "../styles/UserInfoStyle";
import { useNavigate } from "react-router";
import ConfirmModal from "../components/modals/ConfirmModal";
import { postPassCheck, putUserInfo } from "../api/userInfoAxios";
import PassCheck from "../components/PassCheck";
import { useRecoilState } from "recoil";
import { UserStateAtom } from "../recoil/atoms/UserState";

const UserInfo = () => {
  const [data, setData] = useRecoilState(UserStateAtom);
  const [payload, setPayload] = useState({
    email: data?.email,
    nickname: data?.nickname,
    phone: data?.phone,
    birthdate: data?.birthdate,
  });
  const [pass, setPass] = useState("");
  const [passCheckBoolean, setPassCheckBoolean] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [errState, setErrState] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  const handleChange = (e, item) => {
    const { value } = e.target;
    setPayload({ ...payload, [item]: value });
  };

  const handleAccept = async e => {
    e.preventDefault();

    try {
      const { status } = await putUserInfo(payload);
      if (status === 202) {
        setModalOpen(true);
        setData({
          user_id: data.user_id,
          email: data.email,
          nickname: payload.nickname,
          phone: payload.phone,
          birthdate: payload.birthdate,
          coupon: data.coupon,
          stamp: data.stamp,
        });
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
    <UserInfoWrap>
      {passCheckBoolean ? (
        <UserInfoInput
          payload={payload}
          handleAccept={handleAccept}
          handleChange={handleChange}
        />
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
          <span>수정이 완료 되었습니다.</span>
        </ConfirmModal>
      )}
    </UserInfoWrap>
  );
};

export default UserInfo;
