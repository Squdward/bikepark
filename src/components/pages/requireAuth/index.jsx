import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

import { openModal } from "../../../redux/slices/Popups"

const RequireAuth = ({ children }) => {
    const { auth } = useSelector((state) => state.User)
    const dispatch = useDispatch()

    if (auth) {
        return children
    } else {
        dispatch(openModal("login"))
        return <Navigate to={"/"} />
    }
}

export default RequireAuth
