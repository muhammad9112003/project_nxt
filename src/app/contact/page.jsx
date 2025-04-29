"use client";
import React from "react";
import style from "./page.module.css";
import Image from "next/image";
import contactimg from "../../../public/contact.png";

const contact = () => {
  return (
    <div className={style.container}>
      <h1 className={style.head}>Let's Keep in Touch</h1>
      <div className={style.contentContainer}>
        <div className={style.imageContainer}>
          <Image src={contactimg} alt="no logo" className={style.img} />
        </div>
        <form className={style.form}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-Mail" />
          <textarea
            className={style.textarea}
            id="textArea"
            placeholder="Message"
          />
          <input type="submit" value="send" className={style.send} />
        </form>
      </div>
    </div>
  );
};

export default contact;
