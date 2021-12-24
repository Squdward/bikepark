import { FC } 			from "react";
import style 				from "./Bubble.module.css";
import cn 					from "classnames";
import { IBubble } 	from "./Bubble.props";

const Bubble: FC<IBubble> = ({tail=false, children, className}) => {
	return (
		<div className={cn(style.Bubble, className, {
			[style.Tail]: tail,
			className
		})}>
			{children}
		</div>
	);
};

export {Bubble};