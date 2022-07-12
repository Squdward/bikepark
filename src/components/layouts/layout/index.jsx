import Footer from "../footer";
import Header from "../header"
import style from "./index.module.scss";

const Layout = ({children}) => {
	return (
		<div className={style.Layout}>
			<Header/>

			<main className={style.Body}>
				{children}
			</main>

			<Footer/>
		</div>
	)
}

export default Layout