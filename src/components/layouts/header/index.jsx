import cn from "classnames"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import logo from "./assets/logo.svg"
import style from "./index.module.scss"

import { openModal } from "../../../redux/slices/Popups"
import Button from "../../ui/button"
import Login from "../../ui/login"

const Header = React.memo(() => {
    const [visible, setVisible] = useState(false)
    const { auth } = useSelector((state) => state.User)
    const dispatch = useDispatch()

    const setOpen = () => {
        if (!auth) {
            dispatch(openModal("login"))
        }
    }

    return (
        <header className={style.Header}>
            <Link to="/">
                <img
                    src={logo}
                    alt={"logo"}
                />
            </Link>

            <nav className={style.Navigation}>
                <ul className={style.List}>
                    <li className={style.Item}>
                        <Link
                            to="/"
                            className={style.Link}
                        >
                            О нас
                        </Link>
                    </li>
                    <li className={style.Item}>
                        <Link
                            to="/"
                            className={style.Link}
                        >
                            Аренда
                        </Link>
                    </li>
                    <li className={style.Item}>
                        <Link
                            to="/"
                            className={style.Link}
                        >
                            Доставка
                        </Link>
                    </li>
                    <li className={style.Item}>
                        <Link
                            to="/"
                            className={style.Link}
                        >
                            Где кататься
                        </Link>
                    </li>
                    <li className={style.Item}>
                        <Link
                            to="/"
                            className={style.Link}
                        >
                            Контакты
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className={style.Other}>
                <button
                    className={style.Login}
                    onClick={setOpen}
                    onMouseOver={() => setVisible(true)}
                    onMouseLeave={() => setVisible(false)}
                >
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

                    <div
                        className={cn(style.Cloud, {
                            [style.Visible]: visible,
                        })}
                    >
                        <Link
                            className={style.Link}
                            to="/me"
                        >
                            Личный кабинет
                        </Link>
                        <Link
                            className={style.Link}
                            to="/exit"
                        >
                            Выход
                        </Link>
                    </div>
                </button>

                <Button size="sm">Обратная связь</Button>

                <div className={style.Timer}>12:00</div>
            </div>

            <Login />
        </header>
    )
})

export default Header
