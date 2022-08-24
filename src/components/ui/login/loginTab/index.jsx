import { useState } from "react"
import InputMask from "react-input-mask"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import { LOGIN } from "../../../../redux/sagas/root"
import Button from "../../button/index"
import Input from "../../input"
import InputPassword from "../../inputPassword"
import style from "../index.module.scss"

const LoginTab = () => {
    const dispatch = useDispatch()

    const [data, setData] = useState({
        login: "",
        password: "",
    })

    const changeData = (e) => {
        const value = e.target.value
        const name = e.target.name

        setData({ ...data, [name]: value })
    }

    const logIn = async () => {
        try {
            dispatch({
                type: LOGIN,
                payload: {
                    email: data.login || "eve.holt@reqres.in",
                    password: data.password || "cityslicka",
                },
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {/* <InputMask mask={"+375(99)-999-99-99"} label="Номер Телефона*" placeholder="Номер телефона*" name="phoneNumber" value={''} onChange={() => {}} >
				{(inputProps) => <Input {...inputProps} />}
			</InputMask> */}

            <Input
                className={style.Input}
                label="Номер Телефона*"
                placeholder="Введите номер телефона"
                name="login"
                onChange={changeData}
                value={data.login}
            />

            <InputPassword
                className={style.Input}
                type="password"
                label="Пароль*"
                placeholder="Введите пароль"
                name="password"
                required
                onChange={changeData}
                value={data.password}
            />

            <Button
                className={style.Button}
                size={"full"}
                onClick={logIn}
            >
                Войти
            </Button>
            <Link
                className={style.Forget}
                to="/forget"
            >
                Забыли пароль?
            </Link>
        </div>
    )
}

export default LoginTab
