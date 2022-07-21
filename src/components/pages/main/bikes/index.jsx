import style from "./index.module.scss";
import Select from "../../../ui/select";
import Bubble from "../../../ui/bubble"
import BikeCards from "../../../ui/bikeCards";
import Button from "../../../ui/button"
import {useDispatch, useSelector } from "react-redux";
import { Loader } from "../../../ui/loader";
import { setFilterOptions } from "../../../../redux/slices/MainFilter";
import { GET_BIKES } from "../../../../redux/sagas/root";
import { selectBike } from "../../../../redux/slices/Bike";
import { useNavigate } from "react-router-dom";

const Bikes = () => {
	const navigate = useNavigate()
	const { brandsOptions, frameSizeOptions, } = useSelector(state => state.Options)
	const { showResult, loading, filter } = useSelector(state => state.MainFilter)
	const { bikes } = useSelector(state => state.Bikes)
	const dispatch = useDispatch();

	const selectHandler = (name, value,) => {
		dispatch(setFilterOptions({name, value}))

		dispatch({ type: GET_BIKES, payload: {...filter,[name]: value}})
	}

	const addBike = (id) => {
		dispatch(selectBike(id))
	}

	const removeBike = (id) => {
		dispatch(removeBike(id));
	}

	const pushingToOrderPage = () => {
		navigate('test')
	}

	return(
		<div>
			{showResult &&
				<Bubble tail={true}>
					{loading && <div className={style.Loading}><Loader /></div>}
					{showResult && 
					<>
						<div className={style.Filter}>
							<Select
								label={"Бренд"}
								options={brandsOptions}
								onChange={(val) => selectHandler("brand", val)}
							/>

							<Select
								label={"Размер рамы"}
								options={frameSizeOptions}
								onChange={(val) => selectHandler("frameSize", val)}
							/>
						</div>

						<div className={style.Content}>
							{!!bikes.length && bikes.map((bike) => (
								<BikeCards
									{...bike}
									key={bike.id}
									addBike={addBike}
									removeBikes={removeBike}
								/>
							))}
						</div>

						<Button onClick={pushingToOrderPage} className={style.Button}>Далее</Button>
					</>}
				</Bubble>
			}
		</div>
	)
}

export default Bikes