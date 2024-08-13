import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>회사명</h4>
          <p>
            회사 설명을 여기에 입력합니다. 예를 들어, "우리는 고객에게 최고의
            서비스를 제공합니다."
          </p>
        </div>
        <div className="footer-section">
          <h4>서비스</h4>
          <ul>
            <li>
              <NavLink to="/services/web-design" className="footer-link">
                웹 디자인
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/seo" className="footer-link">
                SEO
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/marketing" className="footer-link">
                마케팅
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>지원</h4>
          <ul>
            <li>
              <NavLink to="/support/faq" className="footer-link">
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/support/contact" className="footer-link">
                문의하기
              </NavLink>
            </li>
            <li>
              <NavLink to="/support/help" className="footer-link">
                도움말
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>팔로우하기</h4>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 회사명. All rights reserved.</p>
      </div>
    </footer>
  );
}
