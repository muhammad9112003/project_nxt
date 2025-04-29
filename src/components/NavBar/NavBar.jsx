'use client'
import Link from 'next/link';
import React from 'react'
import style from './Nav.module.css'
import { GiBatwingEmblem } from "react-icons/gi";
const NavBar = () => {
    const links = [
      {
        id: 1,
        title: "Home",
        url: "/",
      },
      {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
      },
      {
        id: 3,
        title: "About",
        url: "/about",
      },
      {
        id: 4,
        title: "Contact",
        url: "/contact",
      },
    ];
  return (
    <div className={style.container}>
      <Link href="/" className={style.logo}>
        <GiBatwingEmblem />
      </Link>
      <div className={style.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={style.link} id='link'>
            {link.title}
          </Link>
        ))}
        <Link className={style.logOut} href='./singIn'>log in</Link>
      </div>
    </div>
  );
}

export default NavBar
