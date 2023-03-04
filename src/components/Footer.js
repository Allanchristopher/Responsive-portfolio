import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineGitlab
} from "react-icons/ai";
import { Space } from 'antd';
function Footer() {
  return (
    <div className="footer">
      <h1 className="footer-content-heading"  data-aos="fade-right"
          data-aos-duration="2000">Get In Touch</h1>
      <div className="footer-content" data-aos="fade-left"
          data-aos-duration="2000">
        <Space size={"large"} align="baseline">
        <a
          href="https://github.com/blessondanielrajs"
          className="footer-icon-color"
        >
          <AiFillGithub />
        </a>
        <a
          href=" https://www.linkedin.com/in/blesson-daniel-raj-s"
          className="footer-icon-color"
        >
          <AiFillLinkedin />
        </a>
        <a
          href=" https://www.linkedin.com/in/blesson-daniel-raj-s"
          className="footer-icon-color"
        >
          <AiOutlineGitlab />
        </a>
        <a
          href="mailto:blessondanielraj.s@gmail.com"
          className="footer-icon-color"
        >
          <AiOutlineMail />
        </a>
        <a
          href="tel:  +91 842 829 1673"
          className="footer-icon-color"
        >
          <AiOutlinePhone />
        </a>
        </Space>
      </div>
    </div>
  );
}

export default Footer;
