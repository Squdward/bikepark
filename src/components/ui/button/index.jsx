import style from "./index.module.scss";
import cn from "classnames";

const Button = ({size, children, className, ...props}) => {
	return (
		<button className={cn(style.Button, className, {
			[style.Small]: size === "sm",
			[style.Full]: size === "full"
		})} {...props}>
			{children}
		</button>
	)
}

export default Button

Button.defaultProps = {
	size: "md"
}