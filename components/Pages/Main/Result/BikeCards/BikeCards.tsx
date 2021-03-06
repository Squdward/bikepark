import style from "./BikeCards.module.css";
import { FC, useState } from "react";
import { IBikeCards } from "./BikeCards.props";
import Image from "next/image";
import cn from "classnames";
import React from "react";

const BikeCards: FC<IBikeCards> = React.memo(({
  frameSize,
  brand,
  image,
  name,
  price,
  id,
  addBike,
  removeBikes,
}) => {
  const [checked, setChecked] = useState(false);
  const [enter, setEnter] = useState(false);

  const placeholder = () => {
    if (checked && !enter) {
      return "Выбрано";
    } else if (checked && enter) {
      return "Отменить выбор";
    } else {
      return "Выбрать";
    }
  };

  const onButtonClick = () => {
    setChecked((val) => !val);
    setEnter((val) => !val);

    if (checked && enter) {
      removeBikes(id);
    } else {
      addBike(id);
    }
  };

  const mouseOver = () => {
    if (checked) {
      setEnter(true);
    }
  };

  const mouseLeave = () => {
    if (checked) {
      setEnter(false);
    }
  };

  return (
    <div className={style.Card}>
      <div className={style.TopLine}>
        <span className={style.FrameSize}>{frameSize}”</span>
        <span className={style.Brand}>{brand}</span>
      </div>

      <div className={style.Image}>
        <Image src={image} width={177} height={93} />
      </div>

      <p className={style.Name}>{name}</p>

      <p className={style.Price}>{price}</p>

      <button
        className={cn(style.Button, {
          [style.Checked]: checked,
          [style.Enter]: enter,
        })}
        onClick={onButtonClick}
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
      >
        {placeholder()}
      </button>
    </div>
  );
});

export {BikeCards}