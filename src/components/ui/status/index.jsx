import style from "./index.module.scss"
import cn from "classnames"

const Status = ({ statusNum }) => {
    const statusLabel = ["В обработке", "доставляется", "в работе", "завершен"]
    return (
        <div
            className={cn(style.Status, {
                [style.inProgress]: statusNum === 0,
                [style.Delivery]: statusNum === 1,
                [style.inWork]: statusNum === 2,
                [style.Finish]: statusNum === 3,
            })}
        >
            {statusLabel[statusNum]}
        </div>
    )
}

export default Status
