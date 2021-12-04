import style from "./Button.module.css"
import cn from "classnames"
import { FC } from "react";
import { IButton } from "./Button.propps";
import React from "react";

const Button: FC<IButton> = React.memo(({size='medium', children, className, ...props} ) => {
	return (
		<button className={cn(style.Button, className, {
			[style.Small]: size === "small"
		})} {...props}>
			{children}
		</button>
	);
});

export {Button}