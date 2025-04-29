import React from "react";
import style from "./Footer.module.css";
import {
  FaCopyright,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.name}>
        <FaCopyright size={15} color="gray" />
        <span> 2025 Muhammad Ayman. All rights reserved</span>
      </div>
      <div className={style.socialMedia}>
        <a href="">
          <FaFacebook size={18} color="#0866ff" />
        </a>
        <a href="">
          <FaGithub size={18} color="red" />
        </a>
        <a href="">
          <FaLinkedin size={18} color="#0a66c2" />
        </a>
        <a href="">
          <FaWhatsapp size={18} color="#0cc143" />
        </a>
        <a href="">
          <FaXTwitter size={18} color="gray" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
