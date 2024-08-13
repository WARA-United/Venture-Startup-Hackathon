import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { SecurityScanOutlined, UserOutlined } from "@ant-design/icons";

import { Button, Input, Modal, Space, message } from "antd";

import "./Header.scss";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleLogin = () => {
    message.success("로그인 되었습니다.");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
          스매칭
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
          공모전 등록
        </NavLink>
        <NavLink to="/page4" className="nav-link" onClick={toggleMenu}>
          참가자 리스트
        </NavLink>
        <NavLink to="/page6" className="nav-link" onClick={toggleMenu}>
          계약서 작성
        </NavLink>

        <Button onClick={showModal}>Log in</Button>
      </div>

      <Modal
        title="Log in"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Input prefix={<UserOutlined />} placeholder="Username" />
          <Input.Password
            prefix={<SecurityScanOutlined />}
            placeholder="Password"
          />
          <Button type="primary" block onClick={handleLogin}>
            Log in
          </Button>
        </Space>
      </Modal>
    </div>
  );
}
