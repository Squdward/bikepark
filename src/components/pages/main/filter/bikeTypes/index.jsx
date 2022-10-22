import { useDispatch, useSelector } from "react-redux"

import blank from "./assets/blank.png"
import style from "./index.module.scss"

import { GET_BIKES } from "../../../../../redux/sagas/root.js"
import { setFilterType } from "../../../../../redux/slices/MainFilter.js"
import { Bubble, Button, TypeCards } from "../../../../ui"

const BikeTypes = () => {
    const filter = useSelector((state) => state.MainFilter.filter)
    const { Aluminum, Carbonfiber, MountainUrban, Urbaneconomy } = filter.type
    const dispatch = useDispatch()

    const TypeCardsData = [
        {
            material: "Алюминий",
            name: "Aluminum",
            price: "90 AED",
            hint: "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
            image: blank,
            checked: Aluminum,
        },
        {
            material: "Карбон",
            name: "Carbonfiber",
            price: "180 AED",
            hint: "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
            image: blank,
            checked: Carbonfiber,
        },
        {
            material: "Горный/городской",
            name: "MountainUrban",
            price: "90 AED",
            hint: "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
            image: blank,
            checked: MountainUrban,
        },
        {
            material: "Городской эконом",
            name: "Urbaneconomy",
            price: "45 AED",
            hint: "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
            image: blank,
            checked: Urbaneconomy,
        },
    ]

    const typeChange = (e) => {
        const { checked, name } = e.target

        dispatch(setFilterType({ name, value: checked }))
    }

    const getBikes = () => {
        dispatch({ type: GET_BIKES, payload: filter })
    }

    return (
        <Bubble tail={true}>
            <p className={style.BlockName}>Тип велосипеда</p>

            <div className={style.Type}>
                {TypeCardsData &&
                    TypeCardsData.map((item, index) => (
                        <TypeCards
                            {...item}
                            key={index}
                            onChange={typeChange}
                        />
                    ))}
            </div>

            <Button
                className={style.Button}
                onClick={getBikes}
            >
                Найти
            </Button>
        </Bubble>
    )
}

export default BikeTypes
