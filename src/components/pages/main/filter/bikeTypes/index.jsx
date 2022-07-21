import style from "./index.module.scss"
import Button from "../../../../ui/button"
import blank from "./assets/blank.png"
import TypeCards from "../../../../ui/typeCards"
import Bubble from "../../../../ui/bubble";
import { useDispatch, useSelector } from "react-redux"
import {GET_BIKES, GET_OPTIONS} from "../../../../../redux/sagas/root.js"
import {setFilterType} from "../../../../../redux/slices/MainFilter.js"
import { useEffect } from "react";

const BikeTypes = () => {
	const filter = useSelector(state => state.MainFilter.filter)
	const { Aluminum, Carbonfiber, MountainUrban, Urbaneconomy } = filter.type
	const dispatch = useDispatch();

	const TypeCardsData = [
		{
			material: "Алюминий",
			name: "Aluminum",
			price: "90 AED",
			hint: "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
			image: blank,
			checked: Aluminum,
		},
		{
			material: "Карбон",
			name: "Carbonfiber",
			price: "180 AED",
			hint: "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
			image: blank,
			checked: Carbonfiber,
		},
		{
			material: "Горный/городской",
			name: "MountainUrban",
			price: "90 AED",
			hint: "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
			image: blank,
			checked: MountainUrban,
		},
		{
			material: "Городской эконом",
			name: "Urbaneconomy",
			price: "45 AED",
			hint: "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
			image: blank,
			checked: Urbaneconomy,
		},
	];

	const typeChange = (e) => {
		const {checked, name} = e.target;

		dispatch(setFilterType({name, value: checked}))
	}

	const getBikes = () => {
		dispatch({ type: GET_BIKES, payload: filter })
	}
	
 	useEffect(() => {
			dispatch({ type: GET_OPTIONS })
	}, [])

	return (
		<Bubble tail={true}>
			<p className={style.BlockName}>Тип велосипеда</p>

			<div className={style.Type}>
				{TypeCardsData &&
					TypeCardsData.map((item, index) => (
						<TypeCards {...item} key={index} onChange={typeChange} />
					))}
			</div>

			<Button 
				className={style.Button}
				onClick={getBikes}
				>
					Найти
				</Button>
		</Bubble>
	)
}

export default BikeTypes