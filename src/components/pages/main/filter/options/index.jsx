import style from "./index.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { serializeData } from "../../../../../redux/slices/MainFilter"
import { DayRange, Select, Switch } from "../../../../ui"

const Options = () => {
    const { rentType, startDate, endDate } = useSelector(
        (state) => state.MainFilter
    )
    const { switchOption, selectOption } = useSelector((state) => state.Options)
    const dispatch = useDispatch()

    const serializeField = (name, value) => {
        dispatch(serializeData({ name, value }))
    }

    return (
        <div className={style.Options}>
            <Switch
                placeholder="Тип аренды"
                option={switchOption}
                defaultValue={switchOption[0].value}
                selected={rentType}
                name={"rentType"}
                onChange={(e) => serializeField(e.target.name, e.target.value)}
            />

            <DayRange
                startDate={startDate}
                endDate={endDate}
                name={"startDate"}
                onChange={(data, name) => serializeField(name, data)}
            />

            <Select
                label={"Доставка"}
                defaultOption={selectOption[0].value}
                options={selectOption}
                onChange={(select) => serializeField("delivery", select)}
            />
        </div>
    )
}

export default Options
