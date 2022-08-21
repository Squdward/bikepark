import Table from "../../../ui/table";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import { GET_ORDERS } from "../../../../redux/sagas/root";

const CurrentOrder = () => {
	const orders = useSelector(state => state.User.orders);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({type: GET_ORDERS,})
	}, [])

	return (
		<Table List={orders}/>
	)
}

export default CurrentOrder