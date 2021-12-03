import React, { FC, } from "react";
import style 					from "./Main.module.css";
import { Bubble } 		from "../../UI/Bubble/Bubble";
import { Gift }       from "./Gift/Gift";
import img            from "./Image/1.png";
import img2           from "./Image/2.png";
import img3           from "./Image/3.png";
import { Switch }     from "../../UI/Switch/Switch";
import { DayRange }   from "../../UI/DayRange/DayRange";
import { Select }     from "../../UI/Select/Select";
import { IOption }    from "components/UI/Select/Select.props";
import { TypeCards }  from "./TypeCards/TypeCards";
import { ITypeCards } from "./TypeCards/TypeCards.props";
import blank          from "./TypeCards/Images/blank.png";
import { Button }     from "components/UI/Button/Button";


const Main: FC = () => {
  const selectOptions: IOption[] = [
    {
      id: 1,
      value: "По адрессу",
      label: "По адрессу",
    },
    {
      id: 2,
      value: "Самовывоз",
      label: "Самовывоз",
    },
  ];

  const TypeCardsData: ITypeCards[] = [
    {
      material: "Алюминий",
      price: "90 AED",
      hint: "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
      image: blank.src,
    },
    {
      material: "Карбон",
      price: "180 AED",
      hint: "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
      image: blank.src,
    },
    {
      material: "Горный/городской",
      price: "90 AED",
      hint: "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
      image: blank.src,
    },
    {
      material: "Городской эконом",
      price: "45 AED",
      hint: "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
      image: blank.src,
    },
  ];

	return (
    <>
    <form>
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
              name="Тип аренды"
              option={[
                {
                  name: "Тип аренды",
                  value: "По дням",
                  placeholder: "По дням",
                },
                {
                  name: "Тип аренды",
                  value: "2 часа",
                  placeholder: "2 часа",
                },
              ]}
            />

            <DayRange />

            <Select
              options={selectOptions}
              defaultOption={"По адресу"}
              id="Delivery"
            />
        </div>
      </Bubble>

      <Bubble tail={true}>
        <p className={style.BlockName}>Тип велосипеда</p>

        <div className={style.Type}>
          {TypeCardsData &&
            TypeCardsData.map((item, index) => <TypeCards {...item} key={index} />)}
        </div>

        <Button className={style.Button}>Найти</Button>
      </Bubble>
      </form>
    </>
  );
};

export {Main};