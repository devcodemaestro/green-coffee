import React from "react";
import { HomeWelcomWrap } from "../../styles/HomeStyle";
import { useNavigate } from "react-router";
import NonMember from "./NonMember";
import Member from "./Member";

const Welcome = () => {
  const navigate = useNavigate();

  const handleTermsMove = () => {
    navigate("/terms");
  };

  const handleLoginMove = () => {
    navigate("/login");
  };
  return (
    <HomeWelcomWrap>
      <div className="inner">
        <div>
          <img src={`${process.env.PUBLIC_URL}/assets/coffee.png`} alt="" />
        </div>
        <Member />
        <NonMember
          handleTermsMove={handleTermsMove}
          handleLoginMove={handleLoginMove}
        />
      </div>
    </HomeWelcomWrap>
  );
};

export default Welcome;
