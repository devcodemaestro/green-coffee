import React from "react";
import UserInfoInput from "../components/userInfo/UserInfoInput";
import { UserInfoWrap } from "../styles/UserInfoStyle";
import { useNavigate } from "react-router";

const UserInfo = () => {
  const navigate = useNavigate();

  const handlePageMove = () => {
    navigate("/passchange");
  };

  const handleOk = () => {
    navigate("/mypage");
  };

  return (
    <UserInfoWrap>
      <UserInfoInput handlePageMove={handlePageMove} handleOk={handleOk} />
    </UserInfoWrap>
  );
};

export default UserInfo;
