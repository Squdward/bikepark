import style from "./index.module.scss";
import Select from "../../../ui/select";
import Bubble from "../../../ui/bubble"
import BikeCards from "../../../ui/bikeCards";
import { useEffect, useState } from "react";

const Bikes = () => {
	const [showResult, setShowResult] = useState(false);

	const brandsOptions = [
		{
			id: 1,
			value: "All",
			label: "Все",
		},
		{
			id: 2,
			value: "SCHWINN",
			label: "SCHWINN",
		},
		{
			id: 3,
			value: "Cannondale",
			label: "Cannondale",
		},
		{
			id: 4,
			value: "Trek",
			label: "Trek",
		},
		{
			id: 5,
			value: "Giant",
			label: "Giant",
		},
	];

	const frameSize = [
		{
			id: 1,
			value: "All",
			label: "Все",
		},
		{
			id: 2,
			value: "20",
			label: "20",
		},
		{
			id: 3,
			value: "25",
			label: "25",
		},
	];

	// useEffect(() => {
	// 	fetch('https://62d1d524d4eb6c69e7e42a57.mockapi.io/Bikes')
	// 	.then( response => response.json())
	// 		.then(data => setBikes(data))
	// }, [])

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
						{/* {bikes.length && bikes.map((bike) => (
							<BikeCards
								{...bike}
								key={bike.id}
								addBike={'addBike'}
								removeBikes={'removeBike'}
							/>
						))} */}
					</div>
				</Bubble>
			}
		</div>
	)
}

export default Bikes