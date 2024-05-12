import React from "react";
import { FooterInner, FooterWrap } from "../styles/FooterStyle";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faHouse,
  faMugSaucer,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const location = useLocation();

  const footerIcon = [
    {
      pathName: "home",
      path: "/home",
      icon: <FontAwesomeIcon icon={faHouse} />,
      isActive: location.pathname === "/home",
    },
    {
      pathName: "custom",
      path: "/favorite",
      icon: <FontAwesomeIcon icon={faStar} />,
      isActive: location.pathname === "/favorite",
    },
    {
      pathName: "order",
      path: "/order",
      icon: <FontAwesomeIcon icon={faMugSaucer} />,
      isActive:
        location.pathname === "/order" ||
        location.pathname === "/search" ||
        location.pathname.startsWith("/menudetail"),
    },
    {
      pathName: "commu",
      path: "/community",
      icon: <FontAwesomeIcon icon={faUser} />,
      isActive: location.pathname === "/community",
    },
    {
      pathName: "mypage",
      path: "/mypage",
      icon: <FontAwesomeIcon icon={faEllipsis} />,
      isActive:
        location.pathname === "/mypage" ||
        location.pathname === "/passchange" ||
        location.pathname === "/userinfo" ||
        location.pathname === "/resign" ||
        location.pathname === "/cart",
    },
  ];
  return (
    <FooterWrap>
      <FooterInner>
        {footerIcon.map(item => (
          <li key={item.pathName}>
            <NavLink
              to={`${item.path}`}
              className={`nav-link ${item.isActive ? "nav-link-active" : ""}`}
            >
              {item.icon}
            </NavLink>
          </li>
        ))}
      </FooterInner>
    </FooterWrap>
  );
};

export default Footer;
