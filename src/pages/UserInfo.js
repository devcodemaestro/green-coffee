import React, { useState } from "react";
import UserInfoInput from "../components/userInfo/UserInfoInput";
import { UserInfoWrap } from "../styles/UserInfoStyle";
import { useNavigate } from "react-router";
import ConfirmModal from "../components/modals/ConfirmModal";
import { putUserInfo } from "../api/userInfoAxios";

const UserInfo = () => {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
    nickname: "",
    phone: "",
    birthdate: "",
  });
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  const handlePageMove = () => {
    navigate("/passchange");
  };

  const handleModalOpen = async e => {
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

  const handleConfirm = () => {
    setModalOpen(false);
    navigate("/mypage");
  };

  return (
    <UserInfoWrap>
      <UserInfoInput
        handlePageMove={handlePageMove}
        handleModalOpen={handleModalOpen}
      />
      {modalOpen && (
        <ConfirmModal open={modalOpen} onConfirm={handleConfirm}>
          <span>수정이 완료 되었습니다.</span>
        </ConfirmModal>
      )}
    </UserInfoWrap>
  );
};

export default UserInfo;
