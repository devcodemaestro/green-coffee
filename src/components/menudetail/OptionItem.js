import React, { useState } from "react";
import { OptionItemWrap } from "../../styles/MenuDetailStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleDown, faCircleUp } from "@fortawesome/free-regular-svg-icons";

const OptionItem = ({ payload, setPayload, handlePlusMinus }) => {
  const [accordion, setAccordion] = useState(false);

  const handleAccordion = () => {
    setAccordion(!accordion);
  };

  return (
    <OptionItemWrap>
      <div className="option-title" onClick={handleAccordion}>
        <h3>옵션</h3>
        <div>
          {accordion ? (
            <FontAwesomeIcon icon={faCircleUp} className="arrow-up" />
          ) : (
            <FontAwesomeIcon icon={faCircleDown} className="arrow-down" />
          )}
        </div>
      </div>
      <ul className={accordion ? "open" : "close"}>
        <li>
          <span>얼음</span>
          <div className="ice-radio">
            <input
              type="radio"
              id="ice-small"
              name="ice"
              value={0}
              onChange={e => setPayload({ ...payload, ice: e.target.value })}
            />
            <label htmlFor="ice-small">적게</label>
            <input
              type="radio"
              id="ice-middle"
              name="ice"
              value={1}
              defaultChecked
              onChange={e => setPayload({ ...payload, ice: e.target.value })}
            />
            <label htmlFor="ice-middle">보통</label>
            <input
              type="radio"
              id="ice-large"
              name="ice"
              value={2}
              onChange={e => setPayload({ ...payload, ice: e.target.value })}
            />
            <label htmlFor="ice-large">많이</label>
          </div>
        </li>
        <li>
          <span>샷 추가</span>
          <div>
            <div>+{payload.shotPrice}원</div>
            <div onClick={() => handlePlusMinus("shot", -1)}>
              <FontAwesomeIcon icon={faMinus} />
            </div>
            <div>{payload.shot}</div>
            <div onClick={() => handlePlusMinus("shot", 1)}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        </li>
        <li>
          <span>크림 추가</span>
          <div>
            <div>+{payload.creamPrice}원</div>
            <div onClick={() => handlePlusMinus("cream", -1)}>
              <FontAwesomeIcon icon={faMinus} />
            </div>
            <div>{payload.cream}</div>
            <div onClick={() => handlePlusMinus("cream", 1)}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        </li>
      </ul>
    </OptionItemWrap>
  );
};

export default OptionItem;
