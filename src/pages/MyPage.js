import React, { useState } from "react";
import { MyPageWrap } from "../styles/MyPageStyle";
import Item from "../components/mypage/Item";
import { useRecoilValue } from "recoil";
import { UserStateAtom } from "../recoil/atoms/UserState";
import { postLogout } from "../api/userInfoAxios";
import { useNavigate } from "react-router";
import ConfirmModal from "../components/modals/ConfirmModal";

const MyPage = () => {
  const userData = useRecoilValue(UserStateAtom);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { result } = await postLogout();
      if (result === 200) {
        setModalOpen(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleConfirm = () => {
    setModalOpen(false);
    navigate("/");
  };

  return (
    <MyPageWrap>
      <div>
        <span>{userData.nickname} 님 환영합니다.</span>
      </div>
      <div>
        <span>보유 스탬프: {userData.stamp}점</span>
      </div>
      <div>
        <span>보유 쿠폰: {userData.coupon}장</span>
      </div>
      <Item handleLogout={handleLogout} />
      {modalOpen && (
        <ConfirmModal open={modalOpen} onConfirm={handleConfirm}>
          <span>로그아웃이 완료되었습니다.</span>
        </ConfirmModal>
      )}
    </MyPageWrap>
  );
};

export default MyPage;
