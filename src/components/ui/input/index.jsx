import cn from "classnames"

import style from "./index.module.scss"

const Input = ({ className, id, label, error, ...props }) => {
    return (
        <>
            {label && <label className={style.Label}>{label}</label>}
            {error}
            <input
                id={id}
                className={cn(style.Input, className)}
                {...props}
            />
        </>
    )
}

export default Input
