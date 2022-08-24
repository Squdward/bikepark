import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import { REGISTER } from "../../../../redux/sagas/root"
import isEmpty from "../../../../utils/isEmpty"
import isValid from "../../../../utils/isValid"
import Button from "../../button"
import Checkbox from "../../checkbox"
import Input from "../../input"
import InputPassword from "../../inputPassword"
import style from "../index.module.scss"

const RegisterTab = () => {
    const dispatch = useDispatch()

    const [data, setData] = useState({
        name: "",
        phoneNumber: "",
        email: "eve.holt@reqres.in",
        password: "pistol",
        agree: true,
    })

    const [error, setError] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        password: "",
    })

    const onChange = (e) => {
        const cloneState = { ...data }

        const name = e.target.name
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value

        cloneState[name] = value

        setData(cloneState)
    }

    const registerUser = (e) => {
        e.preventDefault()
        const errors = {}
        const { name, phoneNumber, email } = data

        if (!isValid(name)) {
            errors.name = "Имя должно иметь более 2х символов"
        }

        if (!isValid(phoneNumber, "phone")) {
            errors.phoneNumber = "Неккоректный номер телефона"
        }

        if (!isValid(email, "email")) {
            errors.email = "Неккоректно указан email"
        }

        // if (!isValid(password, 'password')) {
        //   errors.password = 'Пароль должен быть содержать хотя-бы одну заглавную букву, цифру. И быть не меньше 8 символов'
        // }

        if (isEmpty(errors)) {
            console.log("tut")
            dispatch({ type: REGISTER, payload: data })
        } else {
            // console.log('zdes')
            setError(errors)
        }
    }

    return (
        <form>
            <Input
                className={style.Input}
                label="Имя*"
                placeholder="Введите имя"
                name="name"
                onChange={onChange}
                value={data.name.value}
                error={error.name}
                required
            />

            <Input
                className={style.Input}
                label="Номер телефона*"
                placeholder="Введите номер телефона"
                name="phoneNumber"
                onChange={onChange}
                value={data.phoneNumber}
                error={error.phoneNumber}
                required
            />

            <Input
                type="email"
                className={style.Input}
                label="E-mail"
                placeholder="Введите E-mail"
                name="email"
                onChange={onChange}
                error={error.email}
                value={data.email}
            />

            <InputPassword
                className={style.Input}
                type="password"
                label="Пароль*"
                placeholder="Введите пароль"
                name="password"
                required
                onChange={onChange}
                error={error.password}
                value={data.password}
            />

            <Checkbox
                classNameWrapper={style.Input}
                id="data"
                name="agree"
                onChange={onChange}
                checked={data.agree}
                label="Согласие на обработку персональных данных"
            />

            <Button
                className={style.Button}
                size={"full"}
                onClick={registerUser}
            >
                Войти
            </Button>

            <span className={style.Auth}>
                Уже авторизованы?
                <Link
                    className={style.Link}
                    to="/forget"
                >
                    Войти
                </Link>
            </span>
        </form>
    )
}

export default RegisterTab
