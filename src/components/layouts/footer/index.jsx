import style from "./index.module.scss"
import { Link } from "react-router-dom"
import fb from "./assets/facebook.svg"
import inst from "./assets/instagram.svg"

const Footer = () => {
    return (
        <footer className={style.Footer}>
            <div className={style.Container}>
                <div className={style.Row}>
                    <div className={style.Rent}>
                        <p className={style.Subtitle}>Аренда велосипедов</p>

                        <ul className={style.Group}>
                            <li>Алюминий</li>
                            <li>Карбон</li>
                            <li>Горные/городские</li>
                            <li>Городские эконом</li>
                        </ul>
                    </div>

                    <nav className={style.Navigation}>
                        <ul className={style.List}>
                            <li>
                                <Link
                                    to={"./Rules"}
                                    className={style.Link}
                                >
                                    Правила
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to={"./Review"}
                                    className={style.Link}
                                >
                                    Отзывы
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to={"./Contact"}
                                    className={style.Link}
                                >
                                    Контакты
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to={"./Feedback"}
                                    className={style.Link}
                                >
                                    Обратная связь
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={style.Row}>
                    <Link
                        to={"/"}
                        className={style.Privacy}
                    >
                        © BikePark, 2021
                    </Link>
                    <Link
                        to={"/"}
                        className={style.Rights}
                    >
                        Политика конфиденциальности
                    </Link>

                    <ul className={style.Social}>
                        <li>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={fb}
                                    alt="facebook"
                                />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={inst}
                                    alt="instagram"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
