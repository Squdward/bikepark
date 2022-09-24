import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const RequireAuth = ({ children }) => {
    const { auth } = useSelector((state) => state.User)

    if (auth) {
        return children
    } else {
        return (
            <Navigate
                to="/"
                replace="true"
            />
        )
    }
}

export default RequireAuth
