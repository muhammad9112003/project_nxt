import React from 'react'
import Image from 'next/image';
import style from './page.module.css'
import project1 from '../../../public/card1.png'
import project2 from '../../../public/card2.png'
import project3 from '../../../public/card3.png'
import project4 from '../../../public/card4.png'
import project5 from '../../../public/card5.png'
const portfolio = () => {

const data = [
  { title: "Landing Page", url: project1, description: "A modern landing page designed to showcase products or services with responsive layout and attractive UI elements." },
  { title: "E-commerce", url: project2, description: "An online shopping platform built for smooth browsing, secure checkout, and dynamic product management features." },
  { title: "Cafe Site", url: project3, description: "A cozy website for a café, featuring menus, location details, and a welcoming design to attract customers." },
  { title: "CRUDS System", url: project4, description: "A complete CRUD system for managing users, products, and services efficiently with create, read, update, and delete operations." },
  { title: "Portfolio", url: project5, description: "A clean and professional personal portfolio website to display skills, experiences, and recent projects effectively." },
];
  return (
    <div className={style.mainContainer}>

    {data.map((i)=>(
      <div className={style.container} key={i.title}>
      <div className={style.text}>
        <h1 className={style.title}>{i.title}</h1>
        <p className={style.des}>
    {i.description}
        </p>
        <button className={style.btn}>see more</button>
      </div>
      <div className={style.imgContainer}>
        <Image src={i.url} alt="no logo" className={style.img} />
      </div>
    </div>
       ))}
       </div>

  );
}

export default portfolio;
