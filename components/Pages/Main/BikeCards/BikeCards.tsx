import style from "./BikeCards.module.css";
import { FC } from "react";
import { IBikeCards } from "./BikeCards.props";
import Image from "next/image";

const BikeCards: FC<IBikeCards> = ({frameSize, brand, image, name, price, id, available}) => {
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

      <label>
        выбрать
        <input type="checkbox" value={id} />
      </label>
    </div>
  );
};

export {BikeCards}