import React from "react";
import { DetailStatusWrap } from "../../styles/OrderListStyle";

const DetailStatus = () => {
  return (
    <DetailStatusWrap>
      <ul>
        <li>
          <div className="circle"></div>
        </li>
        <li>
          <div className="line"></div>
        </li>
        <li>
          <div className="circle"></div>
        </li>
        <li>
          <div className="line"></div>
        </li>
        <li>
          <div className="circle"></div>
        </li>
      </ul>
    </DetailStatusWrap>
  );
};

export default DetailStatus;
