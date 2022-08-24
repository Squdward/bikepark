import { useEffect } from "react"
import Layout from "../../layouts/layout"
import style from "./index.module.scss"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { GET_ORDERS } from "../../../redux/sagas/root"
import Personal from "./personal"
import { Bubble, Dialog, Table, Tabs } from "../../ui"

const Me = () => {
    const { currentOrders, finaledOrders } = useSelector(
        (state) => state.User.orders
    )
    const { CancelOrder } = useSelector((state) => state.Popup)
    const personal = useSelector((state) => state.User.personal)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: GET_ORDERS })
    }, [])

    const TabList = [
        {
            placeholder: "Текущие заказы",
            content: () => <Table List={currentOrders} />,
            id: 1,
        },
        {
            placeholder: "Выполненные заказы",
            content: () => <Table List={finaledOrders} />,
            id: 2,
        },
        {
            placeholder: "Личные данныe",
            content: () => <Personal {...personal} />,
            id: 3,
        },
    ]

    return (
        <Layout title={"Личный кабинет"}>
            <Bubble>
                <div className={style.Wrapper}>
                    <h1 className={style.Title}>Личный кабинет</h1>

                    <Tabs
                        defaultValue={TabList[0].placeholder}
                        tabs={TabList}
                    />
                </div>
            </Bubble>
            {CancelOrder && <Dialog />}
        </Layout>
    )
}

export default Me
