import style from "./index.module.scss";
import cn from "classnames";

const Input = ({ className, id, label, error, ...props}) => {
	return (
		<>
			{label&& <label className={style.Label}>{label}</label>}
			{error}
			<input id={id} className={cn(style.Input, className)} {...props}/>
		</>
	)
}

export default Input