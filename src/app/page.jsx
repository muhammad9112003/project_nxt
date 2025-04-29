import Link from "next/link";
import Image from "next/image";
import hero from '../../public/hero.png'
import style from './page.module.css'
export default function Home() {
  return (
    <>
      <div className={style.Container}>
        <div className={style.text}>
          <h1 className={style.head}>
            Better design for your digital products
          </h1>
          <p className={style.breif}>
            Turning your Idea into Reality. We bring together the teams from the
            global tech industry.
          </p>
          <Link className={style.showMore} href='/portfolio'>See Our Works</Link>
        </div>
        <div className={style.imgContainer}>
          <Image src={hero} className={style.img} alt="no logo" />
        </div>
      </div>
    </>
  );
}
