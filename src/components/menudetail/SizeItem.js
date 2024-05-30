import React, { useState } from "react";
import { SizeItemWrap } from "../../styles/MenuDetailStyle";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SizeItem = ({ payload, setPayload }) => {
  return (
    <SizeItemWrap>
      <div className="size-radio">
        <div className="size-box">
          <input
            type="radio"
            id="tall-size"
            name="size"
            value="0"
            defaultChecked
            onChange={e => setPayload({ ...payload, size: e.target.value })}
          />
          <label htmlFor="tall-size">
            <FontAwesomeIcon
              icon={faMugSaucer}
              style={{
                color: payload.size === "0" ? "#ffffff" : "#d9d9d9",
                fontSize: "20px",
              }}
            />
            Tall
          </label>
        </div>
        <div className="size-box">
          <input
            type="radio"
            id="grande-size"
            name="size"
            value="1"
            onChange={e => setPayload({ ...payload, size: e.target.value })}
          />
          <label htmlFor="grande-size">
            <FontAwesomeIcon
              icon={faMugSaucer}
              style={{
                color: payload.size === "1" ? "#ffffff" : "#d9d9d9",
                fontSize: "30px",
              }}
            />
            Grande
          </label>
        </div>
        <div className="size-box">
          <input
            type="radio"
            id="venti-size"
            name="size"
            value="2"
            onChange={e => setPayload({ ...payload, size: e.target.value })}
          />
          <label htmlFor="venti-size">
            <FontAwesomeIcon
              icon={faMugSaucer}
              style={{
                color: payload.size === "2" ? "#ffffff" : "#d9d9d9",
                fontSize: "40px",
              }}
            />
            Venti
          </label>
        </div>
      </div>
    </SizeItemWrap>
  );
};

export default SizeItem;
