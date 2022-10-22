import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { useNavigate } from "react-router-dom"

import style from "./index.module.scss"

import { GET_BIKES } from "../../../../redux/sagas/root"
import {
    AllBikesWithSelected,
    removeBike,
    selectBike,
} from "../../../../redux/slices/Bike"
import { setFilterOptions } from "../../../../redux/slices/MainFilter"
import { setOptions } from "../../../../redux/slices/Options"
import { BikeCards, Bubble, Button, Loader, Select } from "../../../ui"

const Bikes = React.memo(() => {
    const navigate = useNavigate()
    const { brandsOptions, frameSizeOptions } = useSelector(
        (state) => state.Options
    )
    const { loading, filter } = useSelector((state) => state.MainFilter)
    const { selectedBikes } = useSelector((state) => state.Bikes)
    const bikes = useSelector(AllBikesWithSelected)
    const dispatch = useDispatch()
    console.log(bikes)
    const selectHandler = (name, value) => {
        dispatch(setFilterOptions({ name, value }))

        dispatch({ type: GET_BIKES, payload: { ...filter, [name]: value } })
    }

    const addBike = (id) => {
        dispatch(selectBike(id))
    }

    const deleteBike = (id) => {
        dispatch(removeBike(id))
    }

    const pushingToOrderPage = () => {
        navigate("order")
    }

    const createOptins = () => {
        const brands = {
            all: {
                label: "All",
                value: "All",
            },
        }
        const frameSize = {
            all: {
                label: "All",
                value: "All",
            },
        }

        bikes.forEach((bike) => {
            brands[bike.brand] = {
                label: bike.brand,
                value: bike.brand,
            }

            frameSize[bike.frameSize] = {
                label: bike.frameSize,
                value: bike.frameSize,
            }
        })
        debugger
        dispatch(
            setOptions({
                brandsOptions: Object.values(brands),
                frameSizeOptions: Object.values(frameSize),
            })
        )
    }

    useEffect(() => {
        createOptins()
    }, [])

    return (
        <div>
            <Bubble tail={true}>
                {loading && (
                    <div className={style.Loading}>
                        <Loader />
                    </div>
                )}
                <>
                    <div className={style.Filter}>
                        {brandsOptions.length && (
                            <Select
                                label={"Бренд"}
                                options={brandsOptions}
                                onChange={(val) => selectHandler("brand", val)}
                            />
                        )}

                        {frameSizeOptions.length && (
                            <Select
                                label={"Размер рамы"}
                                options={frameSizeOptions}
                                onChange={(val) =>
                                    selectHandler("frameSize", val)
                                }
                            />
                        )}
                    </div>

                    <div className={style.Content}>
                        {!!bikes.length &&
                            bikes.map((bike) => (
                                <BikeCards
                                    {...bike}
                                    isChecked={bike.checked}
                                    key={bike.id}
                                    addBike={addBike}
                                    removeBikes={deleteBike}
                                />
                            ))}
                    </div>

                    <Button
                        onClick={pushingToOrderPage}
                        disabled={!selectedBikes.length}
                        className={style.Button}
                    >
                        Далее
                    </Button>
                </>
            </Bubble>
        </div>
    )
})

export default Bikes
