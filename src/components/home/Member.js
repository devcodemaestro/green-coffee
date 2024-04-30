import React from "react";

const Member = () => {
  return (
    <div>
      <span>
        회원 님
        <br /> 환영합니다.
      </span>
      <div className="buttons">
        <span>마이 스탬프: 5장</span>
        <span>마이 쿠폰: 1장</span>
      </div>
    </div>
  );
};

export default Member;
