import { useEffect } from "react";
import Layout from "../../layouts/layout"
import Bubble from "../../ui/bubble"
import Tabs from "../../ui/tabs"
import style from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { GET_ORDERS } from "../../../redux/sagas/root";
import Table from "../../ui/table";
import Personal from "./personal";
import Dialog from "../../ui/dialog";

const Me = () => {
	const { currentOrders, finaledOrders } = useSelector(state => state.User.orders);
	const {CancelOrder} = useSelector(state => state.Popup)
	const personal = useSelector( state => state.User.personal)
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: GET_ORDERS, })
	}, [])

	const TabList = [
		{
			placeholder: 'Текущие заказы',
			content: () => <Table List={currentOrders}/>
		},
		{
			placeholder: 'Выполненные заказы',
			content: () => <Table List={finaledOrders}/>
		},
		{
			placeholder: 'Личные данныe',
			content: () => <Personal {...personal}/>
		},
	]

	return (
		<Layout title={'Личный кабинет'}>
			<Bubble>
				<div className={style.Wrapper}>
					<h1 className={style.Title}>Личный кабинет</h1>

					<Tabs
						defaultValue={TabList[0].placeholder}
						tabs={TabList}
					/>
				</div>
			</Bubble>
			{CancelOrder && <Dialog/>}
		</Layout>
	)
}

export default Me