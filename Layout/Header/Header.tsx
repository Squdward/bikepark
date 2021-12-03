import style 	from "./Header.module.css";
import React, { FC } from "react";
import Image 	from "next/image";
import Link 	from "next/link";
import logo 	from "./Icon/logo.svg";
import { Button } from "../../components/UI/Button/Button";

const Header: FC = () => {
	return (
    <header className={style.Header}>
      <Link href="./">
        <a className={style.logo}>
          <Image src={logo} />
        </a>
      </Link>

      <nav className={style.Navigation}>
        <ul className={style.List}>
          <li className={style.Item}>
            <Link href={"./About"}>
              <a className={style.Link}>О нас</a>
            </Link>
          </li>

          <li className={style.Item}>
            <Link href={"./Rent"}>
              <a className={style.Link}>Аренда</a>
            </Link>
          </li>

          <li className={style.Item}>
            <Link href={"./Delivery"}>
              <a className={style.Link}>Доставка</a>
            </Link>
          </li>

          <li className={style.Item}>
            <Link href={"./Where"}>
              <a className={style.Link}>Где кататься</a>
            </Link>
          </li>

          <li className={style.Item}>
            <Link href={"./Contact"}>
              <a className={style.Link}>Контакты</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className={style.Other}>
        <button className={style.Login}>
          <svg
            width="40"
            height="40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="38"
              height="38"
              rx="9"
              stroke="#297FFF"
              strokeWidth="2"
            />
            <circle
              cx="20"
              cy="13.75"
              r="3.75"
              stroke="#297FFF"
              strokeWidth="2"
            />
            <path
              d="M10.25 28.688a7.188 7.188 0 0 1 7.188-7.188h5.125a7.188 7.188 0 0 1 7.187 7.188c0 .172-.14.312-.313.312H10.563a.312.312 0 0 1-.312-.313Z"
              stroke="#297FFF"
              strokeWidth="2"
            />
          </svg>
        </button>

        <Button size="small">Обратная связь</Button>

        <div className={style.Timer}>12:00</div>
      </div>
    </header>
  );
};

export {Header};