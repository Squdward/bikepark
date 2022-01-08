import style from "./index.module.css";
import { FC } from "react";

const Loader: FC = () => {
    return (
        <div className={style.Loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export {Loader}