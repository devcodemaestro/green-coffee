import React from "react";
import { SizeItemWrap } from "../../styles/MenuDetailStyle";

const SizeItem = () => {
  return (
    <SizeItemWrap>
      <div className="size-radio">
        <input
          type="radio"
          id="tall-size"
          name="size"
          value="ROLE_USER"
          // checked={userType === "ROLE_USER"}
          // onChange={handleUserTypeChange}
        />
        <label htmlFor="tall-size">Tall</label>
        <input
          type="radio"
          id="grande-size"
          name="size"
          value="ROLE_COMPANY"
          // checked={userType === "ROLE_COMPANY"}
          // onChange={handleUserTypeChange}
        />
        <label htmlFor="grande-size">Grande</label>
        <input
          type="radio"
          id="venti-size"
          name="size"
          value="venti"
          // checked={userType === "ROLE_COMPANY"}
          // onChange={handleUserTypeChange}
        />
        <label htmlFor="venti-size">Venti</label>
      </div>
    </SizeItemWrap>
  );
};

export default SizeItem;
