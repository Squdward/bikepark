import style from "./index.module.scss"
import Button from "../../../../ui/button"
import blank from "./assets/blank.png"
import TypeCards from "../../../../ui/typeCards"
import Bubble from "../../../../ui/bubble";

const BikeTypes = () => {
	const TypeCardsData = [
		{
			material: "Алюминий",
			name: "Aluminum",
			price: "90 AED",
			hint: "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
			image: blank,
			checked: 'form.Aluminum',
		},
		{
			material: "Карбон",
			name: "Carbonfiber",
			price: "180 AED",
			hint: "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
			image: blank,
			checked: 'form.Carbonfiber',
		},
		{
			material: "Горный/городской",
			name: "MountainUrban",
			price: "90 AED",
			hint: "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
			image: blank,
			checked: 'form.MountainUrban',
		},
		{
			material: "Городской эконом",
			name: "Urbaneconomy",
			price: "45 AED",
			hint: "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
			image: blank,
			checked: 'form.Urbaneconomy',
		},
	];

	return (
		<Bubble tail={true}>
			<p className={style.BlockName}>Тип велосипеда</p>

			<div className={style.Type}>
				{TypeCardsData &&
					TypeCardsData.map((item, index) => (
						<TypeCards {...item} key={index} onChange={'validationInput'} />
					))}
			</div>

			<Button className={style.Button}>Найти</Button>
		</Bubble>
	)
}

export default BikeTypes