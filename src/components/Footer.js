import React from "react";
import { FooterInner, FooterWrap } from "../styles/FooterStyle";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faHouse,
  faMugSaucer,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const footerIcon = [
    {
      pathName: "home",
      path: "/",
      icon: <FontAwesomeIcon icon={faHouse} />,
    },
    {
      pathName: "custom",
      path: "/favorite",
      icon: <FontAwesomeIcon icon={faStar} />,
    },
    {
      pathName: "order",
      path: "/order",
      icon: <FontAwesomeIcon icon={faMugSaucer} />,
    },
    {
      pathName: "commu",
      path: "/community",
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      pathName: "mypage",
      path: "/mypage",
      icon: <FontAwesomeIcon icon={faEllipsis} />,
    },
  ];
  return (
    <FooterWrap>
      <FooterInner>
        {footerIcon.map(item => (
          <li key={item.pathName}>
            <NavLink
              to={`${item.path}`}
              className={({ isActive }) =>
                "nav-link" + (isActive ? "-active" : "")
              }
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
