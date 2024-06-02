import React from "react";
import { FooterInner, FooterWrap } from "../styles/FooterStyle";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faEllipsis,
  faHouse,
  faMugSaucer,
  faStar,
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
      pathName: "cart",
      path: "/cart",
      icon: <FontAwesomeIcon icon={faBagShopping} />,
      isActive: location.pathname === "/cart",
    },
    {
      pathName: "mypage",
      path: "/mypage",
      icon: <FontAwesomeIcon icon={faEllipsis} />,
      isActive:
        location.pathname === "/mypage" ||
        location.pathname === "/passchange" ||
        location.pathname === "/userinfo" ||
        location.pathname === "/resign",
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
