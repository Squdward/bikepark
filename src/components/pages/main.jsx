import { useEffect } from "react"
import { serializeData } from "../../redux/slices/MainFilter"
import Layout from "../layouts/layout"
import Bikes from "./bikes"
import Filter from "./filter"
import { useDispatch } from "react-redux/es/exports"

const Main = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		console.count()
		const now = new Date().toJSON();
		const tomorrow = new Date(Date.now() + (3600 * 1000 * 24)).toJSON();

		dispatch(serializeData({ name: 'startDate', value: now }))
		dispatch(serializeData({ name: 'endDate', value: tomorrow }))
	}, [])
	
	return (
		<Layout>
			<Filter/>
			<Bikes/>
		</Layout>
	)
}

export default Main