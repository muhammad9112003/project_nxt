import React from 'react'
import style from './page.module.css'
import Image from 'next/image';
import logIn from '../../../public/Login-.png'
import Link from 'next/link';
const singIn = () => {
    
    return (
      <div className={style.container}>
        <div className={style.imgContainer}>
          <Image className={style.img} src={logIn} alt="no logo" />
        </div>
        <form className={style.form}>
          <h2 className={style.head}>login your account</h2>
          <input
            type="text"
            placeholder="UserName"
            autoComplete="off"
            required
          />
          <input
            type="password"
            placeholder="PassWord"
            autoComplete="off"
            required
          />
          <Link className={style.btn} href="/">
            login
          </Link>
          <p className={style.pass}>forget password?</p>
        </form>
      </div>
    );
}

export default singIn
