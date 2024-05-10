import React, { useState } from "react";
import { ResignWrap } from "../styles/ResignStyle";
import ResignInfo from "../components/resign/ResignInfo";
import { useNavigate } from "react-router";
import { putResign } from "../api/signAxios";
import { useRecoilValue } from "recoil";
import { UserStateAtom } from "../recoil/atoms/UserState";
import ChoiceModal from "../components/modals/ChoiceModal";

const Resign = () => {
  const userData = useRecoilValue(UserStateAtom);

  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const [checkboxState, setCheckboxState] = useState(false);

  const handleCancel = () => {
    navigate(-1);
  };

  const handleResign = () => {
    if (checkboxState === true) {
      setModalOpen(true);
    }
  };

  const handleResignCancel = () => {
    setModalOpen(false);
  };

  const handleCheckBox = e => {
    if (e.target.checked === true) {
      setCheckboxState(true);
    } else {
      setCheckboxState(false);
    }
  };

  const handelAccept = async () => {
    const userEmail = { email: userData.email };
    try {
      if (checkboxState === true) {
        await putResign(userEmail);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(checkboxState);
  return (
    <ResignWrap>
      <div className="title"></div>
      <div className="layout_max">
        <div className="mypage_withdrawal">
          <div className="alert_text">정말로 탈퇴하시겠습니까?</div>
          <div className="member_info">
            <dl>
              <dt>닉네임 : {userData.nickname}</dt>
              <dd></dd>
            </dl>
            <dl>
              <dt>휴대폰 :</dt>
              <dd>{userData.phone}</dd>
            </dl>
          </div>
          <ResignInfo userData={userData} />
          <div className="agree_wrap">
            <label>
              <input
                type="checkbox"
                value={checkboxState}
                onChange={e => handleCheckBox(e)}
              />
              <p>안내사항을 모두 확인하였으며, 동의합니다.</p>
            </label>
          </div>
          <div className="button_wrap">
            <button className="cancel" type="button" onClick={handleCancel}>
              취소
            </button>
            <button className="resign_btn" type="button" onClick={handleResign}>
              탈퇴하기
            </button>
          </div>
        </div>
      </div>
      {modalOpen && (
        <ChoiceModal
          open={modalOpen}
          onConfirm={handelAccept}
          onCancel={handleResignCancel}
        >
          <span>회원탈퇴를 하시겠습니까?</span>
        </ChoiceModal>
      )}
    </ResignWrap>
  );
};

export default Resign;
