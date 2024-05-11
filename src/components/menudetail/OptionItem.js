import React from "react";
import { OptionItemWrap } from "../../styles/MenuDetailStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const OptionItem = () => {
  return (
    <OptionItemWrap>
      <div className="option-title">
        <h3>옵션</h3>
      </div>
      <ul>
        <li>
          <span>얼음</span>
          <div className="ice-radio">
            <input
              type="radio"
              id="ice-small"
              name="ice"
              value="small"
              // checked={userType === "ROLE_USER"}
              // onChange={handleUserTypeChange}
            />
            <label htmlFor="ice-small">적게</label>
            <input
              type="radio"
              id="ice-middle"
              name="ice"
              value="middle"
              // checked={userType === "ROLE_COMPANY"}
              // onChange={handleUserTypeChange}
            />
            <label htmlFor="ice-middle">보통</label>
            <input
              type="radio"
              id="ice-large"
              name="ice"
              value="large"
              // checked={userType === "ROLE_COMPANY"}
              // onChange={handleUserTypeChange}
            />
            <label htmlFor="ice-large">많이</label>
          </div>
        </li>
        <li>
          <span>샷 추가</span>
          <div>
            <div>500원</div>
            <div>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <div>1</div>
            <div>
              <FontAwesomeIcon icon={faMinus} />
            </div>
          </div>
        </li>
        <li>
          <span>크림 추가</span>
          <div>
            <div>500원</div>
            <div>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <div>1</div>
            <div>
              <FontAwesomeIcon icon={faMinus} />
            </div>
          </div>
        </li>
      </ul>
    </OptionItemWrap>
  );
};

export default OptionItem;
