import React from "react";
import { FC } from "react";
import style from "./Configuration.module.css";
import { ConfigurationI } from "./Configuration.props";


const Configuration: FC<ConfigurationI> = React.memo(({ rentType, startDate, endDate, delivery }) => {
    return (
        <div className={style.Configuration}>
        <div className={style.Cell}>
          <span className={style.Name}>Тип аренды</span>
          <p className={style.Value}>{rentType}</p>
        </div>
        <div className={style.Cell}>
          <span className={style.Name}>Дата и время начала</span>
          <p className={style.Value}>{startDate}</p>
        </div>
        <div className={style.Cell}>
          <span className={style.Name}>Дата и время конца</span>
          <p className={style.Value}>{endDate}</p>
        </div>
        <div className={style.Cell}>
          <span className={style.Name}>Доставка</span>
          <p className={style.Value}>{delivery}</p>
        </div>
      </div>
    )
})

export {Configuration}