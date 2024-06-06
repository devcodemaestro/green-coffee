import React, { useState } from "react";
import { DropboxWrap } from "../styles/ui/DropDownStyle";

const DropDown = ({ dummy }) => {
  const [selectedStore, setSelectedStore] = useState("");
  const [isView, setIsView] = useState(false);
  const handleClick = () => {
    setIsView(!isView);
  };
  const handleBackGroundClick = () => {
    setTimeout(() => {
      setIsView(false);
    }, 100);
  };

  const handleStoreSelect = store => {
    setSelectedStore(store);
    setIsView(false);
  };

  return (
    <DropboxWrap>
      <div onClick={handleClick}>
        <button>
          {selectedStore || "매장선택"} {isView ? "▼" : "▲"}
        </button>
      </div>
      {isView && (
        <ul className={isView ? "show" : ""}>
          {dummy.map(item => (
            <li key={item.id} onClick={() => handleStoreSelect(item.title)}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </DropboxWrap>
  );
};

export default DropDown;
