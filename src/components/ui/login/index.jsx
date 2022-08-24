import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../../../redux/slices/Popups"
import Popup from "../popup"
import Tabs from "../tabs"
import LoginTab from "./loginTab"
import RegisterTab from "./registerTab"

const Login = () => {
    const { login } = useSelector((state) => state.Popup)
    const dispatch = useDispatch()

    const setClose = () => {
        dispatch(closeModal("login"))
    }

    const list = [
        {
            placeholder: "Вход",
            content: () => <LoginTab key="LoginTab" />,
        },
        {
            placeholder: "Регистрация",
            content: () => <RegisterTab key="RegisterTab" />,
        },
    ]

    return (
        <>
            {login && (
                <Popup
                    setClose={setClose}
                    exitOnOverlay={false}
                >
                    <Tabs
                        defaultValue={"Вход"}
                        tabs={list}
                    />
                </Popup>
            )}
        </>
    )
}

export default Login
