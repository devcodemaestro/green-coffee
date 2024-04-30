import React, { useState } from "react";
import { TermsButtonWrap } from "../../styles/TermsStyle";

const TermsButtons = ({ handleCheckBox }) => {
  return (
    <TermsButtonWrap>
      <ul>
        <li>
          <div className="text">
            <span>서비스 이용약관 동의 (필수)</span>
            <span>자세히 보기</span>
          </div>
          <div className="service-consent">
            <input
              type="checkbox"
              id="service-consent"
              className="consent"
              defaultChecked={false}
              onChange={e => handleCheckBox(e)}
            />
            <label htmlFor="service-consent">동의합니다.</label>
          </div>
        </li>
        <li>
          <div className="text">
            <span>개인정보처리방침 동의 (필수)</span>
            <span>자세히 보기</span>
          </div>
          <div className="privacy-consent">
            <input
              type="checkbox"
              id="privacy-consent"
              // className="consent"
              className={`consent itemId`}
              defaultChecked={false}
              onChange={e => handleCheckBox(e)}
            />
            <label htmlFor="privacy-consent">동의합니다.</label>
          </div>
        </li>
        <li>
          <div className="text">
            <span>마케팅 정보 수신 동의 (선택)</span>
            <span>자세히 보기</span>
          </div>
          <div className="markecting-consent">
            <input
              type="checkbox"
              id="email-consent"
              className="consent"
              defaultChecked={false}
              onChange={e => handleCheckBox(e)}
            />
            <label htmlFor="email-consent">Email</label>
            <input
              type="checkbox"
              id="sns-consent"
              className="consent"
              defaultChecked={false}
              onChange={e => handleCheckBox(e)}
            />
            <label htmlFor="sns-consent">SNS</label>
          </div>
        </li>
      </ul>
    </TermsButtonWrap>
  );
};

export default TermsButtons;
