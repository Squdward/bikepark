import style from "./Input.module.css";
import cn from "classnames";
import { FC } from "react";
import { InputI } from "./Input.props";

const Input: FC<InputI> = ({className, ...props}) => {
    return (
        <input className={cn(style.Input, className )} {...props}/>
    );
}

export {Input}