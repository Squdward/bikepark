import style from "./TypeCards.module.css";
import Image from "next/image";
import React, { FC, useState } from "react";
import { Hint } from "./Hint/Hint";
import Checkbox from "components/UI/Checkbox/Checkbox";
import { ITypeCards } from "./TypeCards.props";

const TypeCards: FC<ITypeCards> = React.memo (({material, price, hint, image, name, checked, onChange}) => {
	return (
    <div className={style.Card}>
      <div className={style.Wrapper}>
        <Image src={image} className={style.Image} width="259" height="137" />
      </div>

      <div className={style.Body}>
        <p className={style.Material}>{material}</p>

        <div className={style.Info}>
          <span className={style.Price}>{price}</span>

          <div className={style.Control}>
            <Hint>{hint}</Hint>

            <Checkbox
              name={name}
              className={style.Checkbox}
              id={"test"}
              checked={checked}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export {TypeCards};