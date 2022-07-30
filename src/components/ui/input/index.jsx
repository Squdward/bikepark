import style from "./index.module.scss";
import cn from "classnames";

const Input = ({ className , ...props}) => {
	return (
		<input className={cn(style.Input, className)} {...props}/>
	)
}

export default Input