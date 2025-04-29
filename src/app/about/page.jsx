"use client"
import React from 'react'
import Image from 'next/image';
import aboutimg from '../../../public/about.png'
import style from './page.module.css'
import Link from 'next/link';

const about = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image src={aboutimg} alt="no logo" className={style.img} />
        <div className={style.imgText}>
          <h1 className={style.imgTitle}>Digital Storytellers</h1>
          <h2 className={style.imgDes}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={style.textContainer}>
        <div className={style.text}>
          <h1 className={style.title}>Who Are We ?</h1>
          <p className={style.des}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className={style.text}>
          <h1 className={style.title}>What We Do ?</h1>
          <p className={style.des}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Link className={style.btn} href='/contact'>contact us</Link>
        </div>
      </div>
    </div>
  );
}

export default about;
