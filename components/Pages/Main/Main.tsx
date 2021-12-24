import React, { ChangeEvent, FC, useState,} from "react";
import style 					    from "./Main.module.css";
import { Bubble } 		    from "../../UI/Bubble/Bubble";
import { Gift }           from "./Gift/Gift";
import img                from "./Image/1.png";
import img2               from "./Image/2.png";
import img3               from "./Image/3.png";
import blank              from "./TypeCards/Images/blank.png";
import { Switch }         from "../../UI/Switch/Switch";
import { DayRange }       from "../../UI/DayRange/DayRange";
import { Select }         from "../../UI/Select/Select";
import { TypeCards }      from "./TypeCards/TypeCards";
import { Button }         from "components/UI/Button/Button";
import { BikeCards } from "./BikeCards/BikeCards";


const Main: FC = () => {

  const [form, setForm] = useState({
    rentType: "По дням",
    startDate: new Date(),
    endDate: new Date(),
    delivery: "По адресу",
    Aluminum: false,
    Carbonfiber: false,
    MountainUrban: false,
    Urbaneconomy: false,
  });

  const serializeForm = (e: ChangeEvent<HTMLInputElement>) => {
    const formCopy = {...form};
    const name = e.target.name;

    if(e.target.type === 'checkbox') {
      formCopy[name] = e.target.checked;
    } else {
      formCopy[name] = e.target.value;
    }


    setForm(formCopy);
  };

  const serializeData = (date: Date[], name: string, ) => {
    const formCopy = {...form};

    formCopy[name] = date;

    setForm(formCopy);
  };

  const serializeSelect = (val: string) => {
    const formCopy = { ...form };

    formCopy.delivery = val;

    setForm(formCopy);
  };

  const SubmitForm = (e: SubmitEvent) => {
    e.preventDefault();
    const formData = new FormData();

    for (const value in form ) {
      formData.append(value, form[value]);
    }
  };

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

  const brandsOptions = [
    {
      id: 1,
      value: "Все",
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
      value: "Все",
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
    <>
      <form onSubmit={SubmitForm}>
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
              onChange={serializeForm}
            />

            <DayRange
              startDate={form.startDate}
              endDate={form.endDate}
              name={"startDate"}
              onChange={serializeData}
            />

            <Select
              label={"Доставка"}
              defaultOption={form.delivery}
              options={selectOption}
              onChange={serializeSelect}
            />
          </div>
        </Bubble>

        <Bubble tail={true}>
          <p className={style.BlockName}>Тип велосипеда</p>

          <div className={style.Type}>
            {TypeCardsData &&
              TypeCardsData.map((item, index) => (
                <TypeCards {...item} key={index} onChange={serializeForm} />
              ))}
          </div>

          <Button className={style.Button}>Найти</Button>
        </Bubble>
      </form>

      <br />

      <Bubble tail={true}>
        <div className={style.Filter}>
          <Select
            label={"Бренд"}
            defaultOption={""}
            options={brandsOptions}
            onChange={() => {}}
          />

          <Select
            label={"Размер рамы"}
            defaultOption={""}
            options={frameSize}
            onChange={() => {}}
          />
        </div>

        <div className={style.Content}>
          <BikeCards
            id={"1"}
            frameSize="20"
            brand="SCHWINN"
            image={"https://i.ibb.co/WD3JRpq/image-31-min.png"}
            name="Городской велосипед Schwinn Traveler 20”"
            price="90 AED/день"
            available={true}
          />
        </div>
      </Bubble>
    </>
  );
};

export {Main};