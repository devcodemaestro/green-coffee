import React, { useEffect, useState } from "react";
import { TermsWrap } from "../styles/TermsStyle";
import TermsButtons from "../components/terms/TermsButtons";
import { useNavigate } from "react-router";

const Terms = () => {
  const [saveCheckBox, setSaveCheckBox] = useState([]);
  const navigate = useNavigate();

  const handleNextPage = () => {
    // if (saveCheckBox.length > 1231232) {
    //   navigate("/signup");
    // }
    navigate("/signup");
  };

  // 약관동의 API 만들어지면 체크박스 기능 추가 할 것

  let resultIdArray = saveCheckBox;

  const handleAllCheck = e => {
    const allCheckBox = document.querySelectorAll(".consent");
    resultIdArray = [];
    if (e.target.checked === true) {
      allCheckBox.forEach(item => {
        item.checked = true;
        if (item.consentList && item.consentList[1]) {
          resultIdArray.push(parseInt(item.consentList[1].slice(6)));
        }
      });
    } else {
      allCheckBox.forEach(item => {
        item.checked = false;
      });
      resultIdArray = [];
    }
    setSaveCheckBox(resultIdArray);
  };

  const handleCheckBox = e => {
    const clickList = e.currentTarget;
    const consentValue =
      clickList.consentList && clickList.consentList[0]
        ? clickList.consentList[0]
        : "";
    const pk = parseInt(consentValue.slice(6));
    if (e.target.checked === true) {
      resultIdArray.push(pk);
    } else {
      resultIdArray = resultIdArray.filter(item => item !== pk);
    }
    setSaveCheckBox(resultIdArray);
  };

  useEffect(() => {
    document.querySelector(".all-consent").checked = false;
    document
      .querySelectorAll(".consent")
      .forEach(item => (item.checked = false));
    setSaveCheckBox([]);
  }, []);

  return (
    <TermsWrap>
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="" />
      </div>
      <TermsButtons handleCheckBox={handleCheckBox} />
      <div className="info-text">
        <span>※필수 약관에 동의하지 않을 시 서비스를 이용할 수 없습니다.</span>
        <span>※선택 약관의 경우 동의하지 않아도 서비스 이용이 가능합니다.</span>
      </div>
      <div>
        <input
          type="checkbox"
          id="all-consent"
          className="all-consent"
          defaultChecked={false}
          onChange={e => handleAllCheck(e)}
        />
        <label htmlFor="all-consent">모든 약관에 동의합니다.</label>
      </div>
      <div>
        <button onClick={handleNextPage}>다음</button>
      </div>
    </TermsWrap>
  );
};

export default Terms;
