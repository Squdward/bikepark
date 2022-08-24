import style from "./index.module.scss"
import cn from "classnames"

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
