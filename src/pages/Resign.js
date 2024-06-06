import React, { useState } from "react";
import { ResignWrap } from "../styles/ResignStyle";
import ResignInfo from "../components/resign/ResignInfo";
import { useNavigate } from "react-router";
import { putResign } from "../api/signAxios";
import { useRecoilValue } from "recoil";
import { UserStateAtom } from "../recoil/atoms/UserState";
import ChoiceModal from "../components/modals/ChoiceModal";
import ConfirmModal from "../components/modals/ConfirmModal";

const Resign = () => {
  const userData = useRecoilValue(UserStateAtom);

  const [modalOpen, setModalOpen] = useState(false);
  const [checkboxState, setCheckboxState] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [errState, setErrState] = useState(false);
  const navigate = useNavigate();

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

  const handleOk = () => {
    setErrState(false);
  };

  const handleCheckBox = e => {
    if (e.target.checked === true) {
      setCheckboxState(true);
    } else {
      setCheckboxState(false);
    }
  };

  const handelAccept = async () => {
    try {
      if (checkboxState === true) {
        await putResign(setErrMsg);
        setModalOpen(false);
        navigate("/");
      }
    } catch (err) {
      setModalOpen(false);
      setErrState(true);
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
            <span>닉네임: {userData.nickname}</span>
            <span>휴대폰: {userData.phone}</span>
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
      {errState && (
        <ConfirmModal open={errState} onConfirm={handleOk}>
          <span>{errMsg}</span>
        </ConfirmModal>
      )}
    </ResignWrap>
  );
};

export default Resign;
