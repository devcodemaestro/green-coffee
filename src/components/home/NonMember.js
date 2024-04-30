import React from "react";

const NonMember = ({ handleTermsMove, handleLoginMove }) => {
  return (
    <div>
      <span>
        회원가입 후 구매 시
        <br /> 쿠폰과 스탬프 혜택을 드려요!
      </span>
      <div className="buttons">
        <button onClick={handleTermsMove}>회원가입</button>
        <button onClick={handleLoginMove}>로그인</button>
      </div>
    </div>
  );
};

export default NonMember;
