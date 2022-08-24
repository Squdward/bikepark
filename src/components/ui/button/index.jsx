import cn from "classnames"

import style from "./index.module.scss"

const Button = ({ size, children, className, type, ...props }) => {
    return (
        <button
            className={cn(style.Button, className, {
                [style.Small]: size === "sm",
                [style.Full]: size === "full",
                [style.Ghost]: type === "ghost",
            })}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button

Button.defaultProps = {
    size: "md",
}
