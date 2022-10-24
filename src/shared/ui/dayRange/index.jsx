import "flatpickr/dist/themes/airbnb.css"
import cn from "classnames"
import Flatpickr from "react-flatpickr"

import style from "./index.module.scss"

const DayRange = ({ startDate, endDate, onChange }) => {
    return (
        <div className={style.Container}>
            <div className={cn(style.Picker, style.Start)}>
                <p className={style.Name}>Дата и время начала</p>

                <Flatpickr
                    data-enable-time
                    value={startDate}
                    options={{
                        minDate: "today",
                        dateFormat: "Y-m-d H:i",
                    }}
                    onChange={(_, date) => {
                        onChange(date, "startDate")
                    }}
                />
            </div>

            <span className={style.Dash} />

            <div className={cn(style.Picker, style.End)}>
                <p className={style.Name}>Дата и время конца</p>

                <Flatpickr
                    data-enable-time
                    options={{
                        minDate: "today",
                        dateFormat: "Y-m-d H:i",
                    }}
                    value={endDate}
                    onChange={(_, date) => onChange(date, "endDate")}
                />
            </div>
        </div>
    )
}

export { DayRange }
