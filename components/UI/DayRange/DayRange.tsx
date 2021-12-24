import style from "./DayRange.module.css";
import React, { FC} from "react";
import cn from "classnames";
import Flatpickr from "react-flatpickr";
import { IDayRange } from "./DayRange.props";

const DayRange: FC<IDayRange> = ({startDate, endDate, onChange}) => {
  return (
    <div className={style.Container}>
      <div className={cn(style.Picker, style.Start)}>
        <p className={style.Name}>Дата и время начала</p>

        <Flatpickr 
          data-enable-time
          value={startDate}
          onChange={(date) => onChange(date, "startDate")} />
      </div>

      <span className={style.Dash} />

      <div className={cn(style.Picker, style.End)}>
        <p className={style.Name}>Дата и время конца</p>

        <Flatpickr 
          data-enable-time 
          value={endDate}
          onChange={(date) => onChange(date, "endDate")} />
      </div>
    </div>
  );
};

export {DayRange};

