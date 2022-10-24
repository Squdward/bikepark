import cn from "classnames"

import style from "./index.module.scss"

const Bubble = ({ children, tail, className }) => {
    return (
        <div
            className={cn(style.Bubble, className, {
                [style.Tail]: tail,
                className,
            })}
        >
            {children}
        </div>
    )
}

export default Bubble

Bubble.defaultProps = {
    tail: false,
}
