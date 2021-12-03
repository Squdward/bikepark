import style from "./TypeCards.module.css";
import Image from "next/image";
import React, { FC, useState } from "react";
import { Hint } from "./Hint/Hint";
import Checkbox from "components/UI/Checkbox/Checkbox";
import { ITypeCards } from "./TypeCards.props";

const TypeCards: FC<ITypeCards> = ({material, price, hint, image}) => {
  const [select, setSelect] = useState(false);

  const selectType = () => {
    setSelect(!select);
  };

	return (
    <div className={style.Card}>
      <div className={style.Wrapper}>
        <Image
          src={image}
          className={style.Image}
          width="259"
          height="137"
        />
      </div>

      <div className={style.Body}>
        <p className={style.Material}>{material}</p>

        <div className={style.Info}>
          <span className={style.Price}>{price}</span>

          <div className={style.Control}>
            <Hint>
              {hint}
            </Hint>

            <Checkbox 
              className={style.Checkbox}
              onChange={selectType}
              checked={select}
              id={"test"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export {TypeCards};