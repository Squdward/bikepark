import style from "./index.module.scss";
import Select from "../../../ui/select";
import Bubble from "../../../ui/bubble"
import BikeCards from "../../../ui/bikeCards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Bikes = () => {
	const { brandsOptions, frameSize } = useSelector(state => state.MainFilter)
	const { bikes } = useSelector(state => state.Bikes)

	const [showResult, setShowResult] = useState(true);
	const dispatch = useDispatch();


	useEffect(() => {
		dispatch({type: 'GET_BIKES'})

	}, [])

	return(
		<div>
			{showResult &&
				<Bubble>
					<div className={style.Filter}>
						<Select
							label={"Бренд"}
							defaultOption={"Все"}
							options={brandsOptions}
							onChange={() => {}}
						/>

						<Select
							label={"Размер рамы"}
							defaultOption={"Все"}
							options={frameSize}
							onChange={() => {}}
						/>
					</div>

					<div className={style.Content}>
						{bikes.length && bikes.map((bike) => (
							<BikeCards
								{...bike}
								key={bike.id}
								addBike={'addBike'}
								removeBikes={'removeBike'}
							/>
						))}
					</div>
				</Bubble>
			}
		</div>
	)
}

export default Bikes