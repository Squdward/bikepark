import { FC } 			from "react";
import style 				from "./Bubble.module.css";
import cn 					from "classnames";
import { IBubble } 	from "./Bubble.props";

const Bubble: FC<IBubble> = ({tail=false, children}) => {
	return (
		<div className={cn(style.Bubble, {
			[style.Tail]: tail,
		})}>
			{children}
		</div>
	);
};

export {Bubble};