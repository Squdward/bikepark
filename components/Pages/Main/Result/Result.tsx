import style from "../Main.module.css";
import { Bubble } from "components/UI/Bubble/Bubble";
import { Button } from "components/UI/Button/Button";
import { Select } from "components/UI/Select/Select";
import React from "react";
import { BikeCards } from "../BikeCards/BikeCards";
import { IBikes } from "interface/IBikes";
import { useDispatch, useSelector } from "react-redux";
import { removeBikes, selectBikes } from "redux/Main/index.slice";

const Result = () => {
  const bikes         = useSelector( state => state.bikes);
  const dispatch      = useDispatch();

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

  const addBike = (id) => {
    dispatch(selectBikes(id));
  };
  
  const removeBike = (id) => {
    dispatch(removeBikes(id));
  };

  return (
    <>
      {bikes && bikes.length > 0 ? (
        <Bubble tail={true}>
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
            {bikes.map((bike: IBikes) => (
              <BikeCards
                {...bike}
                key={bike.id}
                addBike={addBike}
                removeBikes={removeBike}
              />
            ))}
          </div>

          <Button className={style.Button}>Далее</Button>
        </Bubble>
      ) : null}
    </>
  );
};

export {Result};