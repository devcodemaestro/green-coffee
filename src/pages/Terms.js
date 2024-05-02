import React, { useEffect, useState } from "react";
import { TermsWrap } from "../styles/TermsStyle";
import TermsButtons from "../components/terms/TermsButtons";
import { useNavigate } from "react-router";

const Terms = () => {
  const [saveCheckBox, setSaveCheckBox] = useState([]);
  const navigate = useNavigate();

  const handleNextPage = () => {
    if (
      saveCheckBox.includes(1) &&
      saveCheckBox.includes(2) &&
      (saveCheckBox.includes(3) || saveCheckBox.includes(4))
    ) {
      navigate("/signup");
    }
  };

  let resultIdArray = saveCheckBox;

  const handleAllCheck = e => {
    const allCheckBox = document.querySelectorAll(".consent");
    resultIdArray = [];
    if (e.target.checked === true) {
      allCheckBox.forEach(item => {
        item.checked = true;
        resultIdArray.push(parseInt(item.classList[1].slice(6)));
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
    const checkBoxId = parseInt(clickList.classList[1].slice(6));
    if (e.target.checked === true) {
      resultIdArray.push(checkBoxId);
    } else {
      resultIdArray = resultIdArray.filter(item => item !== checkBoxId);
    }
    setSaveCheckBox(resultIdArray);
    const allConsent = document.getElementById("all-consent");
    allConsent.checked = handleCheckBoxWatch();
  };

  const handleCheckBoxWatch = () => {
    const allCheckBox = document.querySelectorAll(".consent");
    for (let i = 0; i < allCheckBox.length; i++) {
      if (!allCheckBox[i].checked) {
        return false;
      }
    }
    return true;
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
