import React from "react"
import { useSelector } from "react-redux"
import style from "./index.module.scss"

const Configuration = React.memo(() => {
    const { rentType, startDate, endDate, delivery } = useSelector(
        (state) => state.MainFilter
    )
    const options = { hour: "numeric", minute: "numeric" }
    const start = new Date(startDate).toLocaleDateString("ru-RU", options)
    const end = new Date(endDate).toLocaleDateString("ru-RU", options)

    return (
        <div className={style.Configuration}>
            <div className={style.Cell}>
                <span className={style.Name}>Тип аренды</span>
                <p className={style.Value}>{rentType}</p>
            </div>
            <div className={style.Cell}>
                <span className={style.Name}>Дата и время начала</span>
                <p className={style.Value}>{start}</p>
            </div>
            <div className={style.Cell}>
                <span className={style.Name}>Дата и время конца</span>
                <p className={style.Value}>{end}</p>
            </div>
            <div className={style.Cell}>
                <span className={style.Name}>Доставка</span>
                <p className={style.Value}>{delivery}</p>
            </div>
        </div>
    )
})

export default Configuration
