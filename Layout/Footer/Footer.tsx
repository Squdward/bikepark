import style from "./Footer.module.css";
import Link from "next/link";
import fb from "./Icon/facebook.svg";
import inst from "./Icon/instagram.svg";

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
                <Link href={"./Rules"}>
                  <a>Правила</a>
                </Link>
              </li>

              <li>
                <Link href={"./Review"}>
                  <a>Отзывы</a>
                </Link>
              </li>

              <li>
                <Link href={"./Contact"}>
                  <a>Контакты</a>
                </Link>
              </li>

              <li>
                <Link href={"./Feedback"}>
                  <a>Обратная связь</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={style.Row}>
          <a className={style.Privacy}>© BikePark, 2021</a>
          <a className={style.Rights}>Политика конфиденциальности</a>

					<ul className={style.Social}>
						<li>
							<img src={fb.src} alt="facebook" />
						</li>
						
						<li>
							<img src={inst.src} alt="instagram" />
						</li>
					</ul>
        </div>
      </div>
    </footer>
  );
};

export {Footer};