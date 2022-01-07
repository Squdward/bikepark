import style from "../Main.module.css";
import { Bubble } from "components/UI/Bubble/Bubble";
import { Button } from "components/UI/Button/Button";
import { Select } from "components/UI/Select/Select";
import React from "react";
import { BikeCards } from "./BikeCards/BikeCards";
import { useDispatch, useSelector } from "react-redux";
import { removeBikes, selectBikes } from "redux/Main/index.slice";
import { useRouter } from "next/router";

const Result = () => {
  const bikes         = useSelector( state => state.bikes);
  const dispatch      = useDispatch();
  const router = useRouter();

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

  const addBike = (id: string): void => {
    dispatch(selectBikes(id));
  };
  
  const removeBike = (id: string): void => {
    dispatch(removeBikes(id));
  };

  const pushingToOrderPage = (): void => {
    router.push('/order/');
  }

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
            {bikes.map((bike) => (
              <BikeCards
                {...bike}
                key={bike.id}
                addBike={addBike}
                removeBikes={removeBike}
              />
            ))}
          </div>

          <Button onClick={pushingToOrderPage} className={style.Button}>Далее</Button>
        </Bubble>
      ) : null}
    </>
  );
};

export {Result};