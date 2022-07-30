import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../../../redux/slices/Popups";
import Popup from "../popup"

const Login = () => {
	const {login } = useSelector(state => state.Popup)
	const dispatch = useDispatch();

	const setClose = () => {
		dispatch(closeModal('login'))
	}
	return (
		<>
		{login &&
			<Popup setClose={setClose}>
				login
			</Popup>
		}
		</>
	)
}

export default Login