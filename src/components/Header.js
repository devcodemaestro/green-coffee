import React from "react";
import { HeaderInner, HeaderWrap } from "../styles/HeaderStyle";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handelBack = () => {
    navigate(-1);
  };

  const pathName = location.pathname.replace("/", "").split("/")[0];

  const headerList = {
    "": "로그인",
    cart: "장바구니",
    menudetail: "상세메뉴",
    mypage: "마이페이지",
    order: "주문",
    orderlist: "주문내역",
    "orderlist-detail": "상세내역",
    orderstatus: "주문현황",
    favorite: "즐겨찾기",
    payment: "결제하기",
    resign: "회원탈퇴",
    signup: "회원가입",
    terms: "약관동의",
    "terms/detail1": "서비스 이용약관",
    "terms/detail2": "개인정보 처리방침",
    "terms/detail3": "마케팅 정보 수신",
    userinfo: "정보수정",
    community: "커뮤니티",
    passchange: "비밀번호 변경",
    findaccount: "아이디 / 비밀번호 찾기",
    search: "주문",
  };

  const headerTitle = headerList[pathName] || "";
  return (
    <HeaderWrap>
      <HeaderInner>
        {headerTitle === "로그인" ? (
          <li></li>
        ) : (
          <li className="img" onClick={handelBack}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/arrow-left.png`}
              alt=""
            />
          </li>
        )}
        <li>
          <h1>{headerTitle}</h1>
        </li>
        <li></li>
      </HeaderInner>
    </HeaderWrap>
  );
};

export default Header;
