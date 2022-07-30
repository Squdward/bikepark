import Layout from "../../layouts/layout";
import Bubble from "../../ui/bubble";
import Configuration from "./configuration";
import style from "./index.module.scss";
import SelectedBikesTable from "./selectedBikesTable";
import {Link, Navigate} from "react-router-dom"
import cn from "classnames";
import { useSelector } from "react-redux";
import Booking from "./booking";

const Order = () => {
	const { price, selectedBikes } = useSelector( state => state.Bikes)
	const {delivery} = useSelector( state => state.MainFilter);


	const deliveryPrice = delivery === "По Адресу" ? "100 AED/день" : "Бесплатно" 
	const finalPrice = delivery === "По Адресу" ? price + 100 : price;

	return (
		selectedBikes.length ? 
		<Layout>
			<Bubble className={style.Wrapper}>
				<h1 className={style.Title}>Заявка на аренду велосипедов</h1>

				<Configuration/>

				<SelectedBikesTable/>

				<div className={style.Result}>
					<Link to="/" className={style.Return}>
							<span>
								Назад к выбору велосипедов
							</span>
					</Link>

					<div className={style.Prices}>
						<ul>
							<li>
								<span className={style.Label}>Доставка</span> <span className={style.Price}>{deliveryPrice}</span>
							</li>

							<li>
									<span className={style.Label}>Итого</span> <span className={cn(style.Price, style.FinalPrice)}>{finalPrice} AED/день</span>
							</li>
						</ul>
					</div>
				</div>
			</Bubble>

			<Booking/>
		</Layout> : <Navigate to="/" replace/>
	)
}


export default Order;