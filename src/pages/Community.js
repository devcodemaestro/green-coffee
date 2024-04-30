import React from "react";
import { CommunityWrap } from "../styles/CommunityStyle";

const Community = () => {
  return (
    <CommunityWrap>
      <div className="inner">
        <div>
          <img src={`${process.env.PUBLIC_URL}/assets/emblem.png`} alt="" />
        </div>
        <h3>Coming Soon...</h3>
      </div>
    </CommunityWrap>
  );
};

export default Community;
