import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const [scrollY, setScrollY] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScrollY(true);
    } else {
      setScrollY(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(scrollY);
  }, [scrollY]);

  return (
    <div className={`header ${isVisible ? "visible" : "hidden"}`}>
      <div className="logo">
        <NavLink to="/" className="nav-link">
          스타트업 채용 매니저
        </NavLink>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
      </div>
      <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        <NavLink to="/page2" className="nav-link" onClick={toggleMenu}>
          공모전
        </NavLink>
        <NavLink to="/page3" className="nav-link" onClick={toggleMenu}>
          공모전 관리
        </NavLink>
        <NavLink to="/page4" className="nav-link" onClick={toggleMenu}>
          참가 스타트업
        </NavLink>
        <NavLink to="/page5" className="nav-link" onClick={toggleMenu}>
          페이지5
        </NavLink>
      </div>
    </div>
  );
}
