import Input from "../input"
import style from "./index.module.scss"
import cn from "classnames"
import { useState } from "react"

const InputPassword = (props) => {
    const [type, setType] = useState(props.type)

    const changeType = () => {
        if (type === "password") {
            setType("text")
        } else if (type === "text") {
            setType("password")
        }
    }

    return (
        <div className={style.Wrapper}>
            <Input
                {...props}
                type={type}
            />
            <span
                className={cn(style.Eye, {
                    [style.Open]: type === "text",
                })}
                onClick={changeType}
            ></span>
        </div>
    )
}

export default InputPassword
