import style 					from "../Main.module.css";
import { Bubble } 		from "components/UI/Bubble/Bubble";
import React, { FC, useCallback }	from "react";
import { serializeForm } from "redux/MainFilter/index.slice";
import { getBikes } from "redux/Bike/index.slice";
import { useDispatch } from "react-redux";
import { BikeTypes } from "./BikeTypes";
import { Gifts } from "./Gifts";
import { Options } from "./Options";



const Filter: FC= () => {
  const dispatch = useDispatch();

  const validationInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(serializeForm({
      name: e.target.name,
      value: e.target.value,
      type: e.target.type,
      checked: e.target.checked,
    }));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getBikes());
  };

  return (
    <form className={style.Form} onSubmit={handleSubmit}>
      <Bubble tail={false}>
        <div className={style.TopLine}>
          <h1 className={style.Title}>Аренда велосипедов c доставкой</h1>

          <Gifts/>
        </div>

        <Options validationInput={validationInput}/>
      </Bubble>

      <BikeTypes validationInput={validationInput}/>
    </form>
  );
};

export {Filter};