import style from "../Main.module.css";
import { Bubble } from "components/UI/Bubble/Bubble";
import { Button } from "components/UI/Button/Button";
import { Select } from "components/UI/Select/Select";
import React, { useCallback } from "react";
import { BikeCards } from "./BikeCards/BikeCards";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Loader } from "components/UI/loader";
import { filterSelect } from "redux/MainFilter/index.slice";
import { calcBikePrice, getBikes, removeBikes, selectBikes } from "redux/Bike/index.slice";

const Result = () => {
  const bikes         = useSelector( state => state.Bike.bikes);
  const {loading, showResult} = useSelector( state => state.MainFilter);

  const dispatch      = useDispatch();
  const router = useRouter();

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

  const addBike = useCallback((id: string): void => {
    dispatch(selectBikes(id));
    dispatch(calcBikePrice());
  }, []);
  
  const removeBike = useCallback((id: string): void => {
    dispatch(removeBikes(id));
    dispatch(calcBikePrice());
  }, []);

  const pushingToOrderPage = (): void => {
    router.push('/order/');
  };

  const select =  (name: string, value: string): void => {
    dispatch(filterSelect({name, value}));
    dispatch(getBikes());
  };

  return (
    <>
      {showResult && 
        <Bubble tail={true}>
          {loading && <div className={style.Loading}><Loader/></div>}
          {showResult && <>
            <div className={style.Filter}>
              <Select
                label={"Бренд"}
                defaultOption={"Все"}
                options={brandsOptions}
                onChange={(value) => select('brand', value)}
              />

              <Select
                label={"Размер рамы"}
                defaultOption={"Все"}
                options={frameSize}
                onChange={(value) => select('frameSize', value)}
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
            </>}  
        </Bubble>}
    </>
  );
};

export {Result};