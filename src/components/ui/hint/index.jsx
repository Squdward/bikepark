import cn from "classnames"

import { useRef, useState } from "react"

import question from "./assets/question.svg"
import style from "./index.module.scss"

import useClickOutside from "../../../hooks/useClickOutside"

const Hint = ({ children, className }) => {
    const [open, setOpen] = useState(false)
    const button = useRef(null)

    const showHint = () => {
        setOpen(true)
    }

    const hideHint = () => {
        setOpen(false)
    }

    useClickOutside(button, hideHint)

    return (
        <div className={cn(style.Container, className)}>
            <button
                className={style.Button}
                onClick={showHint}
                ref={button}
            >
                <img
                    src={question}
                    alt="question"
                />
            </button>

            <div
                className={cn(style.Hint, {
                    [style.Open]: open,
                })}
            >
                {children}
            </div>
        </div>
    )
}

export default Hint
