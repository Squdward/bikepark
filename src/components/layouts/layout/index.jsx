import Footer from "../footer";
import Header from "../header"
import style from "./index.module.scss";
import { Helmet } from "react-helmet";

const Layout = ({children, metatags, title}) => {
	return (
		<div className={style.Layout}>
			<Helmet>
				<title>{title}</title>
				{metatags}
			</Helmet>
			<Header/>

			<main className={style.Body}>
				{children}
			</main>

			<Footer/>
		</div>
	)
}

export default Layout