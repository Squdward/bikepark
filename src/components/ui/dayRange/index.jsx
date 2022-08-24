import "flatpickr/dist/themes/airbnb.css"
import style from "./index.module.scss"
import Flatpickr from "react-flatpickr"
import cn from "classnames"

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

export default DayRange
