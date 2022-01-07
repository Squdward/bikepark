import style	from "./Layout.module.css";
import React, {FC}	from "react";
import { Header } 	from "./Header/Header";
import { Footer } from "./Footer/Footer";

const Layout: FC = ({children}) => {
		return (
				<div className={style.Layout}>
					<Header/>

					<main className={style.Body}>
						{children}
					</main>

					<Footer/>
				</div>
		);
};

export default Layout;