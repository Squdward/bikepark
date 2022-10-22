import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"

import Bikes from "./bikes"
import Filter from "./filter"

import { serializeData } from "../../../redux/slices/MainFilter"
import Layout from "../../layouts/layout"

const Main = () => {
    const dispatch = useDispatch()
    const { showResult } = useSelector((state) => state.MainFilter)

    useEffect(() => {
        const now = new Date().toJSON()
        const tomorrow = new Date(Date.now() + 3600 * 1000 * 24).toJSON()

        dispatch(serializeData({ name: "startDate", value: now }))
        dispatch(serializeData({ name: "endDate", value: tomorrow }))
    }, [])

    return (
        <Layout title={"Главная"}>
            <Filter />
            {showResult && <Bikes />}
        </Layout>
    )
}

export default Main
