import React, { useState } from "react";
import { SizeItemWrap } from "../../styles/MenuDetailStyle";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SizeItem = () => {
  const [selectedValue, setSelectedValue] = useState("");
  console.log(selectedValue);
  return (
    <SizeItemWrap>
      <div className="size-radio">
        <div className="size-box">
          <input
            type="radio"
            id="tall-size"
            name="size"
            value="1"
            checked={selectedValue === "1"}
            onChange={e => setSelectedValue(e.target.value)}
          />
          <label htmlFor="tall-size">
            <FontAwesomeIcon
              icon={faMugSaucer}
              style={{
                color: selectedValue === "1" ? "#ffffff" : "#d9d9d9",
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
            value="2"
            checked={selectedValue === "2"}
            onChange={e => setSelectedValue(e.target.value)}
          />
          <label htmlFor="grande-size">
            <FontAwesomeIcon
              icon={faMugSaucer}
              style={{
                color: selectedValue === "2" ? "#ffffff" : "#d9d9d9",
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
            value="3"
            checked={selectedValue === "3"}
            onChange={e => setSelectedValue(e.target.value)}
          />
          <label htmlFor="venti-size">
            <FontAwesomeIcon
              icon={faMugSaucer}
              style={{
                color: selectedValue === "3" ? "#ffffff" : "#d9d9d9",
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
