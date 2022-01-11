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
                  <a className={style.Link}>Правила</a>
                </Link>
              </li>

              <li>
                <Link href={"./Review"}>
                  <a className={style.Link}>Отзывы</a>
                </Link>
              </li>

              <li>
                <Link href={"./Contact"}>
                  <a className={style.Link}>Контакты</a>
                </Link>
              </li>

              <li>
                <Link href={"./Feedback"}>
                  <a className={style.Link}>Обратная связь</a>
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
              <a href="https://www.facebook.com/" target="_blank" rel="noopener">
                <img src={fb.src} alt="facebook" />
              </a>
						</li>
						
						<li>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener">
                <img src={inst.src} alt="instagram" />
              </a>
						</li>
					</ul>
        </div>
      </div>
    </footer>
  );
};

export {Footer};