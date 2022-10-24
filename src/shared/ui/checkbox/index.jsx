import cn from "classnames"
import { memo } from "react"

import style from "./index.module.scss"

const Checkbox = memo(
    ({
        id,
        onChange,
        checked,
        name,
        disabled = false,
        className,
        label = false,
        classNameWrapper,
    }) => {
        return (
            <label
                htmlFor={id}
                className={cn(style.Checkbox, classNameWrapper)}
            >
                <input
                    type="checkbox"
                    id={id}
                    onChange={onChange}
                    checked={checked}
                    name={name}
                    disabled={disabled}
                    className={className}
                />
                {label && <span className={style.Label}>{label}</span>}
            </label>
        )
    }
)

export { Checkbox }
