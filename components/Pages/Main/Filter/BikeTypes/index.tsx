import style from "../../main.module.css";
import { Bubble } from "components/UI/Bubble/Bubble"
import React, { FC } from "react"
import { Button } from "components/UI/Button/Button";
import { TypeCards } from "./TypeCards/TypeCards";
import blank    from "./TypeCards/Images/blank.png";
import { useSelector } from "react-redux";

const BikeTypes: FC<{validationInput: (e: React.ChangeEvent<HTMLInputElement>) => void}> = ({validationInput}) => {
    const form = useSelector( state => state.MainFilter.filter);

    const TypeCardsData = [
		{
			material: "Алюминий",
			name: "Aluminum",
			price: "90 AED",
			hint: "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
			image: blank.src,
			checked: form.Aluminum,
		},
		{
			material: "Карбон",
			name: "Carbonfiber",
			price: "180 AED",
			hint: "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
			image: blank.src,
			checked: form.Carbonfiber,
		},
		{
			material: "Горный/городской",
			name: "MountainUrban",
			price: "90 AED",
			hint: "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
			image: blank.src,
			checked: form.MountainUrban,
		},
		{
			material: "Городской эконом",
			name: "Urbaneconomy",
			price: "45 AED",
			hint: "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
			image: blank.src,
			checked: form.Urbaneconomy,
		},
	];

    return (
        <Bubble tail={true}>
        <p className={style.BlockName}>Тип велосипеда</p>

        <div className={style.Type}>
          {TypeCardsData &&
            TypeCardsData.map((item, index) => (
              <TypeCards {...item} key={index} onChange={validationInput} />
            ))}
        </div>

        <Button className={style.Button}>Найти</Button>
      </Bubble>
    )   
}

export {BikeTypes};