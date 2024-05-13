import React, { useState } from "react";
import { SizeItemWrap } from "../../styles/MenuDetailStyle";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SizeItem = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleIconClick = value => {
    setSelectedValue(value);
  };
  return (
    <SizeItemWrap>
      <div className="size-radio">
        <div className="size-box">
          <FontAwesomeIcon
            icon={faMugSaucer}
            style={{
              color: selectedValue === "ROLE_USER" ? "#ffffff" : "#d9d9d9",
              fontSize: "20px",
            }}
            onClick={() => handleIconClick("ROLE_USER")}
          />
          <input
            type="radio"
            id="tall-size"
            name="size"
            value="ROLE_USER"
            checked={selectedValue === "ROLE_USER"}
            onChange={() => handleIconClick("ROLE_USER")}
          />
          <label
            htmlFor="tall-size"
            onClick={() => handleIconClick("ROLE_USER")}
          >
            Tall
          </label>
        </div>
        <div className="size-box">
          <FontAwesomeIcon
            icon={faMugSaucer}
            style={{
              color: selectedValue === "ROLE_COMPANY" ? "#ffffff" : "#d9d9d9",
              fontSize: "30px",
            }}
            onClick={() => handleIconClick("ROLE_COMPANY")}
          />

          <input
            type="radio"
            id="grande-size"
            name="size"
            value="ROLE_COMPANY"
            checked={selectedValue === "ROLE_COMPANY"}
            onChange={() => handleIconClick("ROLE_COMPANY")}
          />
          <label htmlFor="grande-size">Grande</label>
        </div>
        <div className="size-box">
          <FontAwesomeIcon
            icon={faMugSaucer}
            style={{
              color: selectedValue === "venti" ? "#ffffff" : "#d9d9d9",
              fontSize: "40px",
            }}
            onClick={() => handleIconClick("venti")}
          />

          <input
            type="radio"
            id="venti-size"
            name="size"
            value="venti"
            checked={selectedValue === "venti"}
            onChange={() => handleIconClick("venti")}
          />
          <label htmlFor="venti-size">Venti</label>
        </div>
      </div>
    </SizeItemWrap>
  );
};

export default SizeItem;
