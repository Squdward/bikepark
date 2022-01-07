import style 					from "../Main.module.css";
import img 						from "../Image/1.png";
import img2 					from "../Image/2.png";
import img3 					from "../Image/3.png";
import { Bubble } 		from "components/UI/Bubble/Bubble";
import { Button } 		from "components/UI/Button/Button";
import { DayRange } 	from "components/UI/DayRange/DayRange";
import { Select } 		from "components/UI/Select/Select";
import { Switch } 		from "components/UI/Switch/Switch";
import React, { ChangeEvent, FC }	from "react";
import { Gift } 			from "../Gift/Gift";
import { TypeCards } 	from "../TypeCards/TypeCards";
import blank 					from "../TypeCards/Images/blank.png";
import { useDispatch, useSelector } from "react-redux";
import { getBikes, serializeData, serializeSelect, serializeForm } from "redux/Main/index.slice";


const Filter: FC= () => {
  const form = useSelector( state => state);
  const dispatch = useDispatch();

  const SwitchOption = [
    {
      value: "По дням",
      placeholder: "По дням",
    },
    {
      value: "2 часа",
      placeholder: "2 часа",
    },
  ];

  const selectOption = [
    {
      id: 1,
      value: "По Адресу",
      label: "По Адресу",
    },
    {
      id: 2,
      value: "Самовывоз",
      label: "Самовывоз",
    },
  ];

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

  const select = (val) => {
    dispatch(serializeSelect(val));
  };

  const data = (value, name) => {
    dispatch(serializeData({
      name,
      value,
    }));
  };

  const validationInput = (e: ChangeEvent) => {
    dispatch(serializeForm({
      name: e.target.name,
      value: e.target.value,
      type: e.target.type,
      checked: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getBikes());
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Bubble tail={false}>
        <div className={style.TopLine}>
          <h1 className={style.Title}>Аренда велосипедов c доставкой</h1>

          <div className={style.Gifts}>
            <Gift
              width={160}
              height={120}
              color={"#D7E6FF"}
              description={"Шлем"}
              image={img}
            />
            <Gift
              width={133}
              height={115}
              color={"#B9D5FF"}
              description={"Фонарик"}
              image={img2}
            />
            <Gift
              width={120}
              height={120}
              color={"#A5C7FA"}
              description={"Замок"}
              image={img3}
            />
          </div>
        </div>

        <div className={style.Options}>
          <Switch
            placeholder="Тип аренды"
            option={SwitchOption}
            defaultValue={"По дням"}
            selected={form.rentType}
            name={"rentType"}
            onChange={validationInput}
          />

          <DayRange
            startDate={form.startDate}
            endDate={form.endDate}
            name={"startDate"}
            onChange={data}
          />

          <Select
            label={"Доставка"}
            defaultOption={form.delivery}
            options={selectOption}
            onChange={select}
          />
        </div>
      </Bubble>

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
    </form>
  );
};

export {Filter};