import Bubble from "../../../ui/bubble"
import style from "./index.module.scss";
import gifts from "./assets/gifts.png"
import Options from "./options";
import BikeTypes from "./bikeTypes";

const Filter = () => {
	const handleSubmit = (e) => {
		e.preventDefault()
	};

	return (
		<form className={style.Form} onSubmit={handleSubmit}>
			<Bubble tail={false}>
				<div className={style.TopLine}>
					<h1 className={style.Title}>Аренда велосипедов c доставкой</h1>
					
					<img className={style.Gifts} src={gifts} alt="Подарки при покупке"/>
				</div>

				<Options/>
			</Bubble>

			<BikeTypes/>
		</form>
	)
}

export default Filter